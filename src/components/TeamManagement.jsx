import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs, doc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

const TeamManagement = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingTeam, setEditingTeam] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        shortName: '',
        threeLetterName: '',
        crest: ''
    });

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, 'teams'));
            const teamList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTeams(teamList);
        } catch (error) {
            console.error("Error fetching teams:", error);
            toast.error('Failed to fetch teams');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const resetForm = () => {
        setFormData({
            name: '',
            shortName: '',
            threeLetterName: '',
            crest: ''
        });
        setEditingTeam(null);
        setShowForm(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Map form data to Firestore schema
            const payload = {
                name: formData.name,
                short_name: formData.shortName,
                three_letter_name: formData.threeLetterName.toUpperCase(),
                crest: formData.crest
            };

            if (editingTeam) {
                await updateDoc(doc(db, 'teams', editingTeam.id), payload);
                toast.success('Team updated successfully');
            } else {
                // Create new document with auto-ID
                const newTeamRef = doc(collection(db, 'teams'));
                await setDoc(newTeamRef, payload);
                toast.success('Team created successfully');
            }

            fetchTeams();
            resetForm();
        } catch (error) {
            console.error(error);
            toast.error('Operation failed');
        }
    };

    const handleEdit = (team) => {
        setEditingTeam(team);
        setFormData({
            name: team.name,
            shortName: team.short_name || team.name,
            threeLetterName: team.three_letter_name || '',
            crest: team.crest || ''
        });
        setShowForm(true);
    };

    const handleDelete = async (teamId) => {
        if (!window.confirm('Are you sure you want to delete this team?')) {
            return;
        }

        try {
            await deleteDoc(doc(db, 'teams', teamId));
            toast.success('Team deleted successfully');
            fetchTeams();
        } catch (error) {
            console.error(error);
            toast.error('Failed to delete team');
        }
    };

    if (loading) {
        return <div className="p-8 text-center">Loading teams...</div>;
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold">Team Management</h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Manage football teams for the prediction system.
                    </p>
                </div>
                <button
                    onClick={() => setShowForm(true)}
                    className="btn btn-primary"
                >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Team
                </button>
            </div>

            {/* Add/Edit Form */}
            {showForm && (
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-lg font-medium">
                            {editingTeam ? 'Edit Team' : 'Add New Team'}
                        </h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Team Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="input mt-1"
                                        placeholder="e.g., Manchester United"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="shortName" className="block text-sm font-medium text-gray-700">
                                        Short Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="shortName"
                                        name="shortName"
                                        value={formData.shortName}
                                        onChange={handleInputChange}
                                        className="input mt-1"
                                        placeholder="e.g., Man Utd"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="threeLetterName" className="block text-sm font-medium text-gray-700">
                                        Three Letter Code *
                                    </label>
                                    <input
                                        type="text"
                                        id="threeLetterName"
                                        name="threeLetterName"
                                        value={formData.threeLetterName}
                                        onChange={handleInputChange}
                                        className="input mt-1"
                                        placeholder="e.g., MUN"
                                        maxLength={3}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="crest" className="block text-sm font-medium text-gray-700">
                                        Crest URL
                                    </label>
                                    <input
                                        type="url"
                                        id="crest"
                                        name="crest"
                                        value={formData.crest}
                                        onChange={handleInputChange}
                                        className="input mt-1"
                                        placeholder="https://example.com/crest.png"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end space-x-3 pt-4">
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="btn btn-secondary"
                                >
                                    <X className="h-4 w-4 mr-2" />
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    <Save className="h-4 w-4 mr-2" />
                                    {editingTeam ? 'Update Team' : 'Create Team'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Teams Table */}
            <div className="card">
                <div className="card-header">
                    <h3 className="text-lg font-medium">
                        Teams ({teams.length})
                    </h3>
                </div>
                <div className="card-body">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Team
                                    </th>
                                    <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Short Name
                                    </th>
                                    <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Code
                                    </th>
                                    <th className="p-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {teams.map((team) => (
                                    <tr key={team.id} className="border-b last:border-0 hover:bg-gray-50">
                                        <td className="p-4">
                                            <div className="flex items-center">
                                                {team.crest && (
                                                    <img
                                                        className="h-8 w-8 object-contain mr-3"
                                                        src={team.crest}
                                                        alt={`${team.name} crest`}
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                        }}
                                                    />
                                                )}
                                                <div>
                                                    <div className="text-sm font-medium">
                                                        {team.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm">
                                            {team.short_name}
                                        </td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {team.three_letter_name}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex justify-end space-x-2">
                                                <button
                                                    onClick={() => handleEdit(team)}
                                                    className="p-1 text-blue-600 hover:text-blue-800"
                                                    title="Edit team"
                                                >
                                                    <Edit size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(team.id)}
                                                    className="p-1 text-red-600 hover:text-red-800"
                                                    title="Delete team"
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
        </div>
    );
};

export default TeamManagement;
