import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const PolicyGuard = ({ children }) => {
    const { currentUser, acceptPolicies } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [cookieAccepted, setCookieAccepted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (currentUser) {
            // Check if policies are accepted
            const hasAcceptedPrivacy = !!currentUser.privacyAcceptedAt;
            const hasAcceptedCookie = !!currentUser.cookieAcceptedAt;

            console.log("PolicyGuard Debug:", {
                currentUser,
                hasAcceptedPrivacy,
                hasAcceptedCookie,
                privacyAcceptedAt: currentUser.privacyAcceptedAt,
                cookieAcceptedAt: currentUser.cookieAcceptedAt
            });

            if (!hasAcceptedPrivacy || !hasAcceptedCookie) {
                console.log("Showing modal");
                setShowModal(true);
            } else {
                console.log("Hiding modal");
                setShowModal(false);
            }
        } else {
            console.log("No currentUser in PolicyGuard");
        }
    }, [currentUser]);

    const handleAccept = async () => {
        if (!privacyAccepted || !cookieAccepted) {
            toast.error("Please accept requirements to proceed");
            return;
        }

        try {
            setLoading(true);
            await acceptPolicies();
            toast.success("Policies accepted");
            setShowModal(false);
        } catch (error) {
            console.error("Failed to accept policies", error);
            toast.error("Error updating profile");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);

    if (showModal) {
        return (
            <>
                <div aria-hidden="true" className="pointer-events-none select-none filter blur-[2px]">
                    {children}
                </div>
                <div className="fixed inset-0 z-max flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
                    <div className="glass-card max-w-md p-6 animate-in fade-in zoom-in duration-300 border border-white/10 shadow-2xl">
                        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">Policy Update</h2>
                        <p className="mb-6 text-center text-gray-900">
                            We've updated our policies. To continue using the application, you must review and accept the new terms.
                        </p>

                        <div className="flex flex-col gap-3 mb-6">
                            <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                                <input
                                    type="checkbox"
                                    checked={privacyAccepted}
                                    onChange={e => setPrivacyAccepted(e.target.checked)}
                                    className="checkbox checkbox-primary"
                                />
                                <span className="text-sm group-hover:text-white transition-colors">
                                    I accept the <Link to="/privacy" target="_blank" className="link link-primary font-medium hover:text-primary-focus text-decoration-none">Privacy Policy</Link>
                                </span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                                <input
                                    type="checkbox"
                                    checked={cookieAccepted}
                                    onChange={e => setCookieAccepted(e.target.checked)}
                                    className="checkbox checkbox-primary"
                                />
                                <span className="text-sm group-hover:text-white transition-colors">
                                    I accept the <Link to="/privacy" target="_blank" className="link link-primary font-medium hover:text-primary-focus text-decoration-none">Cookie Policy</Link>
                                </span>
                            </label>
                        </div>

                        <button
                            onClick={handleAccept}
                            disabled={!privacyAccepted || !cookieAccepted || loading}
                            className="btn btn-primary w-full shadow-lg shadow-primary/20"
                        >
                            {loading ? "Processing..." : "Accept & Continue"}
                        </button>
                    </div>
                </div>
            </>
        );
    }

    return children;
};

export default PolicyGuard;
