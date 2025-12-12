import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Users, Shield, ShieldOff, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

export default function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        setLoading(true);
        try {
            const usersCol = collection(db, "users");
            const userSnapshot = await getDocs(usersCol);
            const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsers(userList);
        } catch (error) {
            console.error("Error fetching users:", error);
            toast.error("Failed to fetch users");
        }
        setLoading(false);
    }

    async function toggleAdmin(id, currentRole) {
        if (!window.confirm("Are you sure you want to change this user's role?")) return;
        try {
            const newRole = currentRole === 'admin' ? 'user' : 'admin';
            await updateDoc(doc(db, "users", id), { role: newRole });
            toast.success(`User role updated to ${newRole}`);
            fetchUsers();
        } catch (error) {
            console.error("Error updating role:", error);
            toast.error("Failed to update role");
        }
    }

    return (
        <div className="container" style={{ marginTop: "2rem" }}>
            <div className="flex justify-between items-center mb-6">
                <h1>Admin Dashboard</h1>
                <Link to="/" className="btn btn-secondary">Back to Home</Link>
            </div>

            <div className="glass-card" style={{ padding: "1.5rem", overflowX: "auto" }}>
                {loading ? (
                    <p className="text-center">Loading users...</p>
                ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse", color: "var(--text-primary)" }}>
                        <thead>
                            <tr style={{ borderBottom: "1px solid var(--border-color)", textAlign: "left" }}>
                                <th style={{ padding: "1rem" }}>User</th>
                                <th style={{ padding: "1rem" }}>Email</th>
                                <th style={{ padding: "1rem" }}>Role</th>
                                <th style={{ padding: "1rem" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} style={{ borderBottom: "1px solid var(--glass-border)" }}>
                                    <td style={{ padding: "1rem" }}>
                                        <div className="flex items-center gap-2">
                                            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                                                {user.photoURL ? <img src={user.photoURL} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <Users size={16} />}
                                            </div>
                                            {user.displayName || "No Name"}
                                        </div>
                                    </td>
                                    <td style={{ padding: "1rem" }}>{user.email}</td>
                                    <td style={{ padding: "1rem" }}>
                                        <span style={{
                                            padding: "0.25rem 0.75rem",
                                            borderRadius: "99px",
                                            fontSize: "0.85rem",
                                            background: user.role === 'admin' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(51, 65, 85, 0.5)',
                                            color: user.role === 'admin' ? '#c4b5fd' : '#94a3b8',
                                            border: `1px solid ${user.role === 'admin' ? 'rgba(139, 92, 246, 0.3)' : 'transparent'}`
                                        }}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td style={{ padding: "1rem" }}>
                                        <button
                                            className="btn"
                                            style={{ padding: "0.5rem", marginRight: "0.5rem", background: "transparent", border: "1px solid var(--border-color)" }}
                                            title={user.role === 'admin' ? "Remove Admin" : "Make Admin"}
                                            onClick={() => toggleAdmin(user.id, user.role)}
                                        >
                                            {user.role === 'admin' ? <ShieldOff size={16} color="#ef4444" /> : <Shield size={16} color="#22c55e" />}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
