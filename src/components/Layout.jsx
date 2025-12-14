import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
    Home,
    User,
    LogOut,
    Menu,
    X,
    Target,
    Shield, // Admin icon
    Sun,
    Moon
} from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useTheme } from "../contexts/ThemeContext";

export default function Layout({ children }) {
    const { theme, toggleTheme } = useTheme();

    const { currentUser, logout } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const menuRef = React.useRef(null);
    const buttonRef = React.useRef(null);


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

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setSidebarOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarOpen]);

    const navItems = [
        { label: "Dashboard", path: "/", icon: <Home size={20} /> },
        { label: "Matches", path: "/matches", icon: <Target size={20} /> }, // Matches = Prediction in ref
        { label: "Profile", path: "/profile", icon: <User size={20} /> },
    ];

    if (isAdmin) {
        navItems.push({ label: "Admin Panel", path: "/admin", icon: <Shield size={20} /> });
    }

    const isActive = (path) => location.pathname === path;

    // Render Navigation Items shared between mobile/desktop
    const NavLinks = () => (
        <>
            {navItems.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link ${isActive(item.path) ? "active" : "inactive"}`}
                    onClick={() => setSidebarOpen(false)}
                >
                    <span style={{ marginRight: "0.75rem" }}>{item.icon}</span>
                    {item.label}
                </Link>
            ))}
        </>
    );

    // Render User Profile Footer shared
    const UserFooter = () => (
        <div style={{ borderTop: "1px solid var(--border-gray-200)", padding: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flexShrink: 0 }}>
                    <div style={{ height: "2rem", width: "2rem", borderRadius: "9999px", backgroundColor: "var(--primary-600)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {currentUser?.photoURL ? (
                            <img src={currentUser.photoURL} alt="User" style={{ width: "100%", height: "100%", borderRadius: "9999px", objectFit: "cover" }} />
                        ) : (
                            <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "white" }}>
                                {currentUser?.displayName?.[0] || currentUser?.first_name?.[0] || currentUser?.email?.[0]?.toUpperCase() || "U"}
                            </span>
                        )}
                    </div>
                </div>
                <div style={{ marginLeft: "0.75rem" }}>
                    <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-gray-700)", margin: 0 }}>
                        {currentUser?.displayName || (currentUser?.first_name && currentUser?.last_name ? `${currentUser.first_name} ${currentUser.last_name}` : "User")}
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-gray-500)", margin: 0 }}>
                        {currentUser?.email}
                    </p>
                </div>
            </div>
            <button
                onClick={logout}
                className="btn btn-secondary"
                style={{ marginTop: "0.75rem", width: "100%", justifyContent: "flex-start", border: "none" }}
            >
                <LogOut size={20} style={{ marginRight: "0.75rem" }} />
                Logout
            </button>
        </div>
    );

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-gray-50)" }}>


            {/* Mobile Dropdown Menu (Descending from top) */}
            <div ref={menuRef} className={`mobile-menu-dropdown ${sidebarOpen ? 'open' : ''}`}>
                <nav style={{ padding: "1rem" }}>
                    <NavLinks />
                </nav>
                <UserFooter />
            </div>

            {/* Desktop Sidebar (Fixed) */}
            <div className="desktop-sidebar-wrapper">
                <div className="desktop-sidebar-inner">
                    <div style={{ display: "flex", height: "4rem", alignItems: "center", paddingLeft: "1rem", paddingRight: "1rem" }}>
                        <h1 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "var(--text-gray-900)" }}>Prediction App</h1>
                    </div>
                    <nav style={{ flex: 1, padding: "1rem", spaceY: "0.25rem" }}>
                        <NavLinks />
                    </nav>
                    <UserFooter />
                </div>
            </div>

            {/* Main Content (Padded left on desktop) */}
            <div className="main-wrapper">
                {/* Top Sticky Header */}
                <div className="sticky-header">
                    <button
                        ref={buttonRef}
                        type="button"
                        className="mobile-menu-btn"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        style={{ background: "none", border: "none", padding: "0.625rem", color: "var(--text-gray-700)", cursor: "pointer" }}
                    >
                        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div className="header-separator"></div>

                    <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "0.875rem", color: "var(--text-gray-500)" }}>
                            Welcome, {currentUser?.displayName || (currentUser?.first_name && currentUser?.last_name ? `${currentUser.first_name} ${currentUser.last_name}` : "User")}!
                        </span>
                        <button
                            onClick={toggleTheme}
                            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", display: "flex", alignItems: "center" }}
                            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {theme === 'dark' ? <Sun size={20} color="#eab308" /> : <Moon size={20} color="#6b7280" />}
                        </button>
                    </div>
                </div>

                {/* Page Content */}
                <main style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
                    <div style={{ maxWidth: "80rem", margin: "0 auto", paddingLeft: "1rem", paddingRight: "1rem" }}>
                        {children}
                    </div>
                </main>
            </div>

        </div>
    );
}
