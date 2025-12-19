import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import AdminDashboard from './components/AdminDashboard';
import Dashboard from './components/Dashboard'; // Import extracted component
import Predictions from './components/Predictions';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import PrivacyPolicy from './components/PrivacyPolicy';
import PolicyGuard from './components/PolicyGuard';

// Dashboard component extracted to src/components/Dashboard.jsx

function App() {
    return (
        <Router>
            <ThemeProvider>
                <AuthProvider>
                    <Toaster position="top-center" toastOptions={{
                        style: {
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--border-color)',
                        },
                    }} />
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/privacy" element={<PrivacyPolicy />} />

                        {/* Private Routes with Layout */}
                        <Route path="/" element={
                            <PrivateRoute>
                                <PolicyGuard>
                                    <Layout>
                                        <Dashboard />
                                    </Layout>
                                </PolicyGuard>
                            </PrivateRoute>
                        } />
                        <Route path="/matches" element={
                            <PrivateRoute>
                                <PolicyGuard>
                                    <Layout>
                                        <Predictions />
                                    </Layout>
                                </PolicyGuard>
                            </PrivateRoute>
                        } />
                        <Route path="/profile" element={
                            <PrivateRoute>
                                <PolicyGuard>
                                    <Layout>
                                        <Profile />
                                    </Layout>
                                </PolicyGuard>
                            </PrivateRoute>
                        } />
                        <Route path="/admin" element={
                            <PrivateRoute>
                                <PolicyGuard>
                                    <Layout>
                                        <AdminDashboard />
                                    </Layout>
                                </PolicyGuard>
                            </PrivateRoute>
                        } />

                        {/* Catch all */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </AuthProvider>
            </ThemeProvider>
        </Router>
    );
}

export default App;
