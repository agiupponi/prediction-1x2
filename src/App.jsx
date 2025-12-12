import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import { Home, User, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

function HomeWithNav() {
    const { currentUser } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        async function checkAdmin() {
            if (currentUser) {
                const snap = await getDoc(doc(db, "users", currentUser.uid));
                if (snap.exists() && snap.data().role === 'admin') {
                    setIsAdmin(true);
                }
            }
        }
        checkAdmin();
    }, [currentUser]);

    return (
        <div className="container">
            <nav className="glass-card flex justify-between items-center p-4 mb-8" style={{ padding: "1rem 2rem" }}>
                <div className="flex items-center gap-2 font-bold text-xl">
                    <span style={{ fontSize: "1.5rem" }}>🔥</span> Prediction App
                </div>
                <div className="flex items-center gap-4">
                    {currentUser ? (
                        <>
                            {isAdmin && (
                                <Link to="/admin" className="btn btn-secondary">
                                    <Shield size={16} /> Admin
                                </Link>
                            )}
                            <Link to="/profile" className="btn btn-primary">
                                <User size={16} /> Profile
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-secondary">Log In</Link>
                            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                        </>
                    )}
                </div>
            </nav>

            <div className="text-center mt-12 fade-in">
                <h1>Welcome to the App</h1>
                <p className="mt-4 text-xl" style={{ color: "var(--text-secondary)" }}>
                    A premium experience built with React and Firebase.
                </p>
                {!currentUser && (
                    <div className="mt-8">
                        <Link to="/signup" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.25rem" }}>Get Started</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div className="min-h-screen">
                <Toaster position="top-center" toastOptions={{
                    style: {
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-color)',
                    },
                }} />
                <AuthProvider>
                    <Routes>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        } />
                        <Route path="/admin" element={
                            <PrivateRoute>
                                <AdminDashboard />
                            </PrivateRoute>
                        } />
                        <Route path="/" element={<HomeWithNav />} />
                    </Routes>
                </AuthProvider>
            </div>
        </Router>
    );
}

export default App;
