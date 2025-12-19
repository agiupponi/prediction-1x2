import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { Users, BarChart3, Settings, Eye, Edit, Trash2, Shield, Trophy, X } from "lucide-react";
import toast from "react-hot-toast";
import TeamManagement from "./TeamManagement";
import MatchManagement from "./MatchManagement";

export default function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('overview');
    const [editingUser, setEditingUser] = useState(null);

    function getDisplayName(user) {
        if (user.displayName) return user.displayName;
        if (user.first_name && user.last_name) return `${user.first_name} ${user.last_name}`;
        return 'No Name';
    }

    async function handleUpdateUser(e) {
        e.preventDefault();
        if (!editingUser) return;

        try {
            const userRef = doc(db, "users", editingUser.id);
            await updateDoc(userRef, {
                displayName: editingUser.displayName || null,
                first_name: editingUser.first_name || null,
                last_name: editingUser.last_name || null
            });
            toast.success("User updated successfully");
            setEditingUser(null);
            fetchUsers();
        } catch (error) {
            console.error("Error updating user:", error);
            toast.error("Failed to update user");
        }
    }

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

    async function handleRoleChange(id, newRole) {
        if (!window.confirm(`Are you sure you want to change this user's role to ${newRole}?`)) return;
        try {
            await updateDoc(doc(db, "users", id), { role: newRole });
            toast.success(`User role updated to ${newRole}`);
            fetchUsers();
        } catch (error) {
            console.error(error);
            toast.error("Failed to update role");
        }
    }

    async function deleteUser(userId) {
        if (!window.confirm('Are you sure you want to delete this user?')) {
            return;
        }

        try {
            await deleteDoc(doc(db, "users", userId));
            toast.success('User deleted');
            fetchUsers();
        } catch (error) {
            console.error(error);
            toast.error('Failed to delete user');
        }
    }

    const stats = [
        {
            name: 'Total Users',
            value: users.length,
            icon: Users,
            change: '+0%',
            changeType: 'increase',
        },
        {
            name: 'Active Users',
            value: users.filter(user => user.role).length,
            icon: BarChart3,
            change: '+0%',
            changeType: 'increase',
        },
        {
            name: 'Admins',
            value: users.filter(user => user.role === 'admin').length,
            icon: Settings,
            change: '+0',
            changeType: 'increase',
        },
        {
            name: 'Managers',
            value: users.filter(user => user.role === 'manager').length,
            icon: Shield,
            change: '+0',
            changeType: 'increase',
        },
    ];

    const tabs = [
        { id: 'overview', name: 'Overview', icon: BarChart3 },
        { id: 'users', name: 'User Management', icon: Users },
        { id: 'teams', name: 'Team Management', icon: Shield },
        { id: 'matches', name: 'Match Management', icon: Trophy }
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    const renderUserTable = () => (
        <div className="card">
            <div className="card-header">
                <h3 className="text-lg leading-6 font-medium">
                    User Management
                </h3>
            </div>
            <div className="card-body">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    User
                                </th>
                                <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Role
                                </th>
                                <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Joined
                                </th>
                                <th className="p-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="border-b last:border-0 hover:bg-gray-50">
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center overflow-hidden">
                                                    {user.photoURL ? (
                                                        <img src={user.photoURL} alt="" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <span className="text-sm font-medium text-white">
                                                            {getDisplayName(user).charAt(0).toUpperCase()}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium">
                                                    {getDisplayName(user)}
                                                </div>
                                                <div className="text-sm text-gray-500">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <select
                                            value={user.role || 'user'}
                                            onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                            className="text-sm border border-gray-300 rounded px-2 py-1"
                                        >
                                            <option value="user">User</option>
                                            <option value="manager">Manager</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </td>
                                    <td className="p-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Active
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm text-gray-500">
                                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex justify-end space-x-2">
                                            <button
                                                onClick={() => setEditingUser(user)}
                                                className="p-1 text-gray-600 hover:text-gray-800"
                                                title="Edit User"
                                            >
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => deleteUser(user.id)}
                                                className="p-1 text-red-600 hover:text-red-800"
                                                title="Delete User"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div className="space-y-6">
                        {/* Header */}
                        <div>
                            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                            <p className="mt-1 text-sm text-gray-500">
                                Manage users and monitor application statistics.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((item) => (
                                <div key={item.name} className="card">
                                    <div className="card-body">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <item.icon className="h-6 w-6 text-gray-400" />
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">
                                                        {item.name}
                                                    </dt>
                                                    <dd className="flex items-baseline">
                                                        <div className="text-2xl font-semibold">
                                                            {item.value}
                                                        </div>
                                                        <div
                                                            className={`ml-2 flex items-baseline text-sm font-semibold ${item.changeType === 'increase'
                                                                ? 'text-green-600'
                                                                : item.changeType === 'decrease'
                                                                    ? 'text-red-600'
                                                                    : 'text-gray-500'
                                                                }`}
                                                        >
                                                            {item.change}
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Users Table */}
                        {renderUserTable()}
                    </div>
                );
            case 'users':
                return (
                    <div className="space-y-6">
                        {/* Header */}
                        <div>
                            <h1 className="text-2xl font-bold">User Management</h1>
                            <p className="mt-1 text-sm text-gray-500">
                                Manage users and their roles in the system.
                            </p>
                        </div>

                        {/* Users Table */}
                        {renderUserTable()}
                    </div>
                );
            case 'teams':
                return <TeamManagement />;
            case 'matches':
                return <MatchManagement />;
            default:
                return null;
        }
    };

    return (
        <div className="space-y-6">
            {/* Tabs */}
            {/* Tabs */}
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${activeTab === tab.id
                                ? 'border-primary-600 text-primary-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:cursor-pointer'
                                }`}
                        >
                            <tab.icon className="h-5 w-5" />
                            <span>{tab.name}</span>
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content */}
            {renderTabContent()}

            {/* Edit User Modal */}
            {editingUser && (
                <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4">
                    <div className="glass-card max-w-md w-half p-6 relative animate-in fade-in zoom-in duration-300 border border-white/10 shadow-2xl">
                        <button
                            onClick={() => setEditingUser(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <h3 className="text-xl font-bold mb-6 text-white border-b border-white-10 pb-2 text-gray-900">Edit User</h3>

                        <form onSubmit={handleUpdateUser} className="space-y-4">

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-1">Display Name</label>
                                    <input
                                        type="text"
                                        value={editingUser.displayName || ''}
                                        onChange={e => setEditingUser({ ...editingUser, displayName: e.target.value })}
                                        className="w-available rounded-md border-gray-300 shadow-sm p-2 text-gray-900 bg-white focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
                                        placeholder="Display Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        value={editingUser.first_name || ''}
                                        onChange={e => setEditingUser({ ...editingUser, first_name: e.target.value })}
                                        className="w-available rounded-md border-gray-300 shadow-sm p-2 text-gray-900 bg-white focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        value={editingUser.last_name || ''}
                                        onChange={e => setEditingUser({ ...editingUser, last_name: e.target.value })}
                                        className="w-available rounded-md border-gray-300 shadow-sm p-2 text-gray-900 bg-white focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-white-10">
                                <button
                                    type="button"
                                    onClick={() => setEditingUser(null)}
                                    className="px-4 py-2 border border-white-10 rounded-md text-gray-300 hover:bg-white-5 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 shadow-lg shadow-primary/20 transition-colors"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
