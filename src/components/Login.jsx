import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Mail, Lock, Chrome } from "lucide-react";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, googleSignIn } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            toast.success("Logged in successfully!");
            navigate("/");
        } catch (err) {
            console.error(err);
            setError("Failed to sign in: " + err.message);
            toast.error("Failed to sign in");
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
                <h2 className="text-center mb-4">Log In</h2>
                {error && <div style={{ color: "#ef4444", marginBottom: "1rem", textAlign: "center" }}>{error}</div>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="form-group">
                        <div className="flex items-center gap-2 mb-2" style={{ color: "var(--text-secondary)" }}>
                            <Mail size={16} />
                            <label>Email</label>
                        </div>
                        <input style={{ maxWidth: "374px" }} type="email" ref={emailRef} required placeholder="john@example.com" />
                    </div>
                    <div className="form-group">
                        <div className="flex items-center gap-2 mb-2" style={{ color: "var(--text-secondary)" }}>
                            <Lock size={16} />
                            <label>Password</label>
                        </div>
                        <input style={{ maxWidth: "374px" }} type="password" ref={passwordRef} required placeholder="••••••••" />
                    </div>
                    <button disabled={loading} className="btn btn-primary mt-4" type="submit">
                        Log In
                    </button>
                </form>

                <div className="mt-4 flex flex-col gap-2">
                    <button disabled={loading} onClick={handleGoogleSignIn} className="btn btn-secondary w-full">
                        <Chrome size={18} /> Log in with Google
                    </button>
                </div>

                <div className="w-full text-center mt-4" style={{ color: "var(--text-secondary)" }}>
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}
