import React, { useContext, useState, useEffect, ReactNode } from "react";
import { auth, db } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    updateProfile,
    User as FirebaseUser,
    UserCredential
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { UserRole } from "../types";

export interface ExtendedUser extends FirebaseUser {
    role?: UserRole;
    first_name?: string;
    last_name?: string;
}

interface AuthContextType {
    currentUser: ExtendedUser | null;
    signup: (email: string, password: string, displayName: string) => Promise<UserCredential>;
    login: (email: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
    googleSignIn: () => Promise<UserCredential>;
    updateUserSession: (updates: Partial<ExtendedUser>) => void;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<ExtendedUser | null>(null);
    const [loading, setLoading] = useState(true);

    // Sign up with Email/Password
    async function signup(email: string, password: string, displayName: string): Promise<UserCredential> {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName });
        await setDoc(doc(db, "users", userCredential.user.uid), {
            email: userCredential.user.email,
            displayName: displayName,
            photoURL: null,
            role: "user",
            createdAt: new Date().toISOString()
        });
        return userCredential;
    }

    // Login
    function login(email: string, password: string): Promise<UserCredential> {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Sign In
    async function googleSignIn(): Promise<UserCredential> {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;

        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            await setDoc(userRef, {
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL || null,
                role: "user",
                createdAt: new Date().toISOString()
            });
        } else {
            const existingData = userSnap.data();
            if (!existingData.photoURL && user.photoURL) {
                await setDoc(userRef, { photoURL: user.photoURL }, { merge: true });
            }
        }

        return userCredential;
    }

    // Logout
    function logout(): Promise<void> {
        return signOut(auth);
    }

    // Funzione per forzare l'aggiornamento reattivo dello stato in UI
    function updateUserSession(updates: Partial<ExtendedUser>) {
        if (currentUser) {
            // In TS mutation of Firebase user is tricky, we clone it
            const updatedUser = { ...currentUser, ...updates } as ExtendedUser;
            setCurrentUser(updatedUser);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const extendedUser = user as ExtendedUser;
                try {
                    const userRef = doc(db, "users", user.uid);
                    const docSnap = await getDoc(userRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        extendedUser.role = data.role;
                        extendedUser.first_name = data.first_name;
                        extendedUser.last_name = data.last_name;
                        if (data.photoURL) {
                            // We don't mutate the private photoURL from Firebase Auth directly if we want to be safe,
                            // but for this app's logic we treat the extended user as the source of truth.
                        }
                    }
                } catch (err) {
                    console.error("Error fetching user details", err);
                }
                setCurrentUser(extendedUser);
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        googleSignIn,
        updateUserSession
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
