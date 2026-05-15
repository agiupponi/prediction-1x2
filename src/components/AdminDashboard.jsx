import React, { useState } from "react";
import { useAdminUsers } from "../hooks/useAdminUsers";
import { Users, BarChart3, Settings, Edit, Trash2, Shield, Trophy } from "lucide-react";
import TeamManagement from "./TeamManagement";
import MatchManagement from "./MatchManagement";

export default function AdminDashboard() {
    const {
        users,
        loading,
        stats,
        handleUpdateUser,
        handleRoleChange,
        deleteUser
    } = useAdminUsers();

    const [activeTab, setActiveTab] = useState('overview');
    const [editingUser, setEditingUser] = useState(null);

    function getDisplayName(user) {
        if (user.displayName) return user.displayName;
        if (user.first_name && user.last_name) return `${user.first_name} ${user.last_name}`;
        return 'No Name';
    }

    async function onUpdateSubmit(e) {
        e.preventDefault();
        if (!editingUser) return;
        const success = await handleUpdateUser(editingUser);
        if (success) setEditingUser(null);
    }

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
                                                <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center overflow-hidden" style={{ backgroundColor: "var(--primary-600)" }}>
                                                    {user.photoURL ? (
                                                        <img 
                                                            src={user.photoURL} 
                                                            alt="" 
                                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                            onError={(e) => { 
                                                                e.target.onerror = null; 
                                                                e.target.style.display = 'none'; 
                                                            }} 
                                                        />
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
                                                {/* Use Icon directly if it's passed as a component or mapping */}
                                                {item.name === 'Total Users' && <Users className="h-6 w-6 text-gray-400" />}
                                                {item.name === 'Active Users' && <BarChart3 className="h-6 w-6 text-gray-400" />}
                                                {item.name === 'Admins' && <Settings className="h-6 w-6 text-gray-400" />}
                                                {item.name === 'Managers' && <Shield className="h-6 w-6 text-gray-400" />}
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
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
                        <h3 className="text-lg font-bold mb-4">Edit User</h3>
                        <form onSubmit={onUpdateSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Display Name (Optional)</label>
                                <input
                                    type="text"
                                    value={editingUser.displayName || ''}
                                    onChange={e => setEditingUser({ ...editingUser, displayName: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        value={editingUser.first_name || ''}
                                        onChange={e => setEditingUser({ ...editingUser, first_name: e.target.value })}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        value={editingUser.last_name || ''}
                                        onChange={e => setEditingUser({ ...editingUser, last_name: e.target.value })}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end gap-2 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setEditingUser(null)}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
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
