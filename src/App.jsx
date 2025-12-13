import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import AdminDashboard from './components/AdminDashboard';
import Predictions from './components/Predictions';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';

function Dashboard() {
    const { currentUser } = useAuth();
    return (
        <div>
            <h1>Dashboard</h1>
            <p className="text-[var(--text-secondary)] mt-2">Welcome back, {currentUser?.displayName}!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="card">
                    <h3>Total Predictions</h3>
                    <p className="text-3xl font-bold mt-2 text-[var(--accent-primary)]">0</p>
                </div>
                <div className="card">
                    <h3>Success Rate</h3>
                    <p className="text-3xl font-bold mt-2 text-[var(--accent-secondary)]">0%</p>
                </div>
                <div className="card">
                    <h3>Points</h3>
                    <p className="text-3xl font-bold mt-2 text-green-500">0</p>
                </div>
            </div>
        </div>
    );
}

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
