import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sign up with Email/Password
    async function signup(email, password, displayName) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Update profile with display name
        await updateProfile(userCredential.user, { displayName });
        // Create user document in Firestore
        await setDoc(doc(db, "users", userCredential.user.uid), {
            email: userCredential.user.email,
            displayName: displayName,
            role: "user", // Default role
            createdAt: new Date().toISOString()
        });
        return userCredential;
    }

    // Login
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Sign In
    async function googleSignIn() {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;

        // Check if user exists in Firestore, if not create
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            await setDoc(userRef, {
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                role: "user",
                createdAt: new Date().toISOString()
            });
        }

        return userCredential;
    }

    // Logout
    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Optional: fetch additional user data (role) from Firestore and attach to user object
                // For now, simpler is better. We can fetch role in protected routes or components.
                setCurrentUser(user);
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
        googleSignIn
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
