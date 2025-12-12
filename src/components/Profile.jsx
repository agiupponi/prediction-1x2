import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import toast from "react-hot-toast";
import { User, Mail, Camera } from "lucide-react";

export default function Profile() {
    const { currentUser, logout } = useAuth();
    const nameRef = useRef();
    const fileInputRef = useRef();
    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleFileChange(e) {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]);
            setPhotoPreview(URL.createObjectURL(e.target.files[0]));
        }
    }

    async function handleLogout() {
        setError("");
        try {
            await logout();
            navigate("/login");
        } catch {
            setError("Failed to log out");
        }
    }

    async function handleUpdateProfile(e) {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            let photoURL = currentUser.photoURL;

            if (photo) {
                const fileRef = ref(storage, `users/${currentUser.uid}/profile.png`); // Simple Overwrite
                await uploadBytes(fileRef, photo);
                photoURL = await getDownloadURL(fileRef);
            }

            if (nameRef.current.value !== currentUser.displayName || photo) {
                await updateProfile(currentUser, {
                    displayName: nameRef.current.value,
                    photoURL: photoURL
                });
                // Also update in Firestore
                const userRef = doc(db, "users", currentUser.uid);
                await updateDoc(userRef, {
                    displayName: nameRef.current.value,
                    photoURL: photoURL
                });
                toast.success("Profile updated!");
            }
        } catch (err) {
            setError("Failed to update profile");
            console.error(err);
        }
        setLoading(false);
    }

    return (
        <div className="container flex items-center justify-center" style={{ minHeight: "80vh" }}>
            <div className="glass-card w-full" style={{ maxWidth: "400px", padding: "2rem" }}>
                <h2 className="text-center mb-4">Profile</h2>
                {error && <div style={{ color: "#ef4444", marginBottom: "1rem", textAlign: "center" }}>{error}</div>}

                <div
                    className="flex justify-center mb-6 relative"
                    onClick={() => fileInputRef.current.click()}
                    style={{ cursor: "pointer" }}
                    title="Click to update profile picture"
                >
                    <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "var(--accent-secondary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", overflow: "hidden", position: "relative", border: "3px solid var(--bg-secondary)", transition: "transform 0.2s" }} className="hover:scale-105">
                        {photoPreview || currentUser?.photoURL ?
                            <img src={photoPreview || currentUser.photoURL} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            : (currentUser?.displayName?.[0] || <User />)
                        }
                    </div>
                    <input type="file" id="photo-upload" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} accept="image/*" />
                </div>

                <form onSubmit={handleUpdateProfile} className="flex flex-col gap-4">
                    <div className="form-group">
                        <div className="flex items-center gap-2 mb-2" style={{ color: "var(--text-secondary)" }}>
                            <Mail size={16} />
                            <label>Email</label>
                        </div>
                        <input type="email" value={currentUser?.email} disabled style={{ opacity: 0.7, cursor: "not-allowed" }} />
                    </div>
                    <div className="form-group">
                        <div className="flex items-center gap-2 mb-2" style={{ color: "var(--text-secondary)" }}>
                            <User size={16} />
                            <label>Display Name</label>
                        </div>
                        <input type="text" ref={nameRef} defaultValue={currentUser?.displayName} placeholder="Display Name" />
                    </div>

                    <button disabled={loading} className="btn btn-primary mt-4" type="submit">
                        Update Profile
                    </button>
                </form>

                <div className="w-full text-center mt-4">
                    <button onClick={handleLogout} className="btn btn-secondary w-full">
                        Log Out
                    </button>
                </div>

                <div className="w-full text-center mt-4">
                    <Link to="/">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
