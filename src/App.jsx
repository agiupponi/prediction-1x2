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

                        {/* Private Routes with Layout */}
                        <Route path="/" element={
                            <PrivateRoute>
                                <Layout>
                                    <Dashboard />
                                </Layout>
                            </PrivateRoute>
                        } />
                        <Route path="/matches" element={
                            <PrivateRoute>
                                <Layout>
                                    <Predictions />
                                </Layout>
                            </PrivateRoute>
                        } />
                        <Route path="/profile" element={
                            <PrivateRoute>
                                <Layout>
                                    <Profile />
                                </Layout>
                            </PrivateRoute>
                        } />
                        <Route path="/admin" element={
                            <PrivateRoute>
                                <Layout>
                                    <AdminDashboard />
                                </Layout>
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
