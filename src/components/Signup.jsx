import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Mail, Lock, User, Chrome } from "lucide-react";

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const nameRef = useRef();
    const { signup, googleSignIn } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
            toast.success("Account created!");
            navigate("/");
        } catch (err) {
            console.error(err);
            setError("Failed to create an account: " + err.message);
            toast.error("Failed to create account");
        }

        setLoading(false);
    }

    async function handleGoogleSignIn() {
        try {
            setError("");
            setLoading(true);
            await googleSignIn();
            toast.success("Logged in with Google!");
            navigate("/");
        } catch (err) {
            console.error(err);
            setError("Failed to sign in with Google");
            toast.error("Google Sign In Failed");
        }
        setLoading(false);
    }

    return (
        <div className="container flex items-center justify-center" style={{ minHeight: "80vh" }}>
            <div className="glass-card w-full" style={{ maxWidth: "400px", padding: "2rem" }}>
                <h2 className="text-center mb-4">Create Account</h2>
                {error && <div style={{ color: "#ef4444", marginBottom: "1rem", textAlign: "center" }}>{error}</div>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="form-group">
                        <div className="flex items-center gap-2 mb-2" style={{ color: "var(--text-secondary)" }}>
                            <User size={16} />
                            <label>Display Name</label>
                        </div>
                        <input type="text" ref={nameRef} required placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                        <div className="flex items-center gap-2 mb-2" style={{ color: "var(--text-secondary)" }}>
                            <Mail size={16} />
                            <label>Email</label>
                        </div>
                        <input type="email" ref={emailRef} required placeholder="john@example.com" />
                    </div>
                    <div className="form-group">
                        <div className="flex items-center gap-2 mb-2" style={{ color: "var(--text-secondary)" }}>
                            <Lock size={16} />
                            <label>Password</label>
                        </div>
                        <input type="password" ref={passwordRef} required placeholder="••••••••" />
                    </div>
                    <div className="form-group">
                        <div className="flex items-center gap-2 mb-2" style={{ color: "var(--text-secondary)" }}>
                            <Lock size={16} />
                            <label>Confirm Password</label>
                        </div>
                        <input type="password" ref={passwordConfirmRef} required placeholder="••••••••" />
                    </div>
                    <button disabled={loading} className="btn btn-primary mt-4" type="submit">
                        Sign Up
                    </button>
                </form>

                <div className="mt-4 flex flex-col gap-2">
                    <button disabled={loading} onClick={handleGoogleSignIn} className="btn btn-secondary w-full">
                        <Chrome size={18} /> Sign up with Google
                    </button>
                </div>

                <div className="w-full text-center mt-4" style={{ color: "var(--text-secondary)" }}>
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </div>
        </div>
    );
}
