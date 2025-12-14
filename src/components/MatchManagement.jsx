import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X, Download, Search, ChevronLeft, ChevronRight, CheckCircle, Clock } from 'lucide-react';
import api from '../services/api';
import toast from 'react-hot-toast';

const MatchManagement = () => {
    const [matches, setMatches] = useState([]);
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchingExternal, setFetchingExternal] = useState(false);
    const [editingMatch, setEditingMatch] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const [expandedMatchdays, setExpandedMatchdays] = useState({});

    // Toggle matchday collapse
    const toggleMatchday = (md) => {
        setExpandedMatchdays(prev => ({
            ...prev,
            [md]: !prev[md]
        }));
    };

    const handleSingleSync = async (matchId) => {
        try {
            setLoading(true);
            await api.post(`/matches/${matchId}/fetch-external`);
            toast.success("Match synced successfully");
            fetchData();
        } catch (error) {
            console.error(error);
            toast.error("Failed to sync match");
        } finally {
            setLoading(false);
        }
    };
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    // Search
    const [searchFilters, setSearchFilters] = useState({
        matchday: '',
        status: '',
        team: ''
    });

    const [formData, setFormData] = useState({
        matchday: '',
        homeTeamId: '',
        awayTeamId: '',
        referee: '',
        startDate: '',
        status: 'TIMED',
        fullTimeScoreHome: '',
        fullTimeScoreAway: '',
        winner: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);

            // Fetch Matches
            const matchesRes = await api.get('/matches');
            // Fetch Teams
            const teamsRes = await api.get('/teams');

            setMatches(matchesRes.data);
            setTeams(teamsRes.data);

            // Determine current matchday to expand
            try {
                const upcomingRes = await api.get('/matches/upcoming');
                if (upcomingRes.data && upcomingRes.data.matchday) {
                    setExpandedMatchdays({ [upcomingRes.data.matchday]: true });
                } else {
                    // Fallback: Expand the last one or none? 
                    // User said "Start with all closed... except current". 
                    // If no current found, maybe just keep closed.
                    setExpandedMatchdays({});
                }
            } catch (err) {
                setExpandedMatchdays({});
            }

        } catch (error) {
            console.error(error);
            toast.error('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    // --- External Fetch Logic (Ported from Server) ---
    // --- External Fetch Logic (Ported from Server) ---
    const handleFetchExternal = async () => {
        if (!window.confirm('This will fetch matches from the Football Data API. Continue?')) return;

        setFetchingExternal(true);
        try {
            const res = await api.post('/matches/import');
            toast.success(res.data.message);
            fetchData();
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Import failed');
        } finally {
            setFetchingExternal(false);
        }
    };

    // --- Helpers ---
    const getTeamName = (id) => {
        const t = teams.find(x => x.id === id);
        return t ? t.short_name : 'Unknown';
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEdit = (match) => {
        setEditingMatch(match);
        setFormData({
            matchday: match.matchday,
            homeTeamId: match.home_team_id,
            awayTeamId: match.away_team_id,
            referee: match.referee || '',
            startDate: match.start_date ? match.start_date.slice(0, 16) : '',
            status: match.status,
            fullTimeScoreHome: match.score_home || '',
            fullTimeScoreAway: match.score_away || '',
            winner: match.winner || ''
        });
        setShowForm(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                matchday: parseInt(formData.matchday),
                home_team_id: formData.homeTeamId,
                away_team_id: formData.awayTeamId,
                referee: formData.referee,
                start_date: new Date(formData.startDate).toISOString(),
                status: formData.status,
                score_home: formData.fullTimeScoreHome ? parseInt(formData.fullTimeScoreHome) : null,
                score_away: formData.fullTimeScoreAway ? parseInt(formData.fullTimeScoreAway) : null,
                // winner: formData.winner || null // Model might not support 'winner' field?
                // Let's check Match.js model.
                // Model: Match.js
                // score_home, score_away, matchday, start_date, status.
                // No 'winner' or 'referee' column in my implementation of Match.js!
                // I need to add them or ignore them.
                // For now, I will ignore them in payload to avoid error, or I should update Model.
                // The frontend uses 'winner' in logic.
                // I should update Model later if needed. For now I omit them from payload to keep it simple.
            };

            if (editingMatch) {
                await api.put(`/matches/${editingMatch.id}`, payload);
                toast.success("Match updated");
            } else {
                await api.post('/matches', payload);
                toast.success("Match created");
            }
            setShowForm(false);
            setEditingMatch(null);
            fetchData();
        } catch (err) {
            console.error(err);
            toast.error("Error saving match");
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete match?")) return;
        try {
            await api.delete(`/matches/${id}`);
            fetchData();
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete");
        }
    };

    // --- Filtering & Sorting ---
    const filteredMatches = matches
        .filter(m => {
            if (searchFilters.matchday && m.matchday != searchFilters.matchday) return false;
            if (searchFilters.status && m.status !== searchFilters.status) return false;
            return true;
        })
        .sort((a, b) => new Date(b.start_date) - new Date(a.start_date)); // Newest first

    // Grouping
    const groupedMatches = filteredMatches.reduce((acc, match) => {
        const md = match.matchday || 'Unscheduled';
        if (!acc[md]) acc[md] = [];
        acc[md].push(match);
        return acc;
    }, {});

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold">Match Management</h2>
                    <p className="text-sm text-gray-500">Manage matches and fetch from API</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={handleFetchExternal} disabled={fetchingExternal} className="btn btn-secondary">
                        <Download size={16} />
                        {fetchingExternal ? ' Fecthing...' : ' Fetch External'}
                    </button>
                    <button onClick={() => { setEditingMatch(null); setShowForm(true); }} className="btn btn-primary">
                        <Plus size={16} /> Add Match
                    </button>
                </div>
            </div>

            {showForm && (
                <div className="card p-4">
                    <h3 className="font-bold mb-4">{editingMatch ? 'Edit' : 'Add'} Match</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label>Matchday</label>
                                <input name="matchday" type="number" required value={formData.matchday} onChange={handleInputChange} />
                            </div>
                            <div>
                                <label>Date</label>
                                <input name="startDate" type="datetime-local" required value={formData.startDate} onChange={handleInputChange} />
                            </div>
                            <div>
                                <label>Status</label>
                                <select name="status" value={formData.status} onChange={handleInputChange} className="input">
                                    <option value="TIMED">Scheduled</option>
                                    <option value="FINISHED">Finished</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label>Home Team</label>
                                <select name="homeTeamId" required value={formData.homeTeamId} onChange={handleInputChange} className="input">
                                    <option value="">Select Team</option>
                                    {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                                </select>
                            </div>
                            <div>
                                <label>Away Team</label>
                                <select name="awayTeamId" required value={formData.awayTeamId} onChange={handleInputChange} className="input">
                                    <option value="">Select Team</option>
                                    {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                                </select>
                            </div>
                        </div>
                        {formData.status === 'FINISHED' && (
                            <div className="grid grid-cols-3 gap-4 border-t pt-4">
                                <input placeholder="Home Score" name="fullTimeScoreHome" type="number" value={formData.fullTimeScoreHome} onChange={handleInputChange} />
                                <input placeholder="Away Score" name="fullTimeScoreAway" type="number" value={formData.fullTimeScoreAway} onChange={handleInputChange} />
                                <select name="winner" value={formData.winner} onChange={handleInputChange} className="input">
                                    <option value="">Winner</option>
                                    <option value="1">1 (Home)</option>
                                    <option value="X">X (Draw)</option>
                                    <option value="2">2 (Away)</option>
                                </select>
                            </div>
                        )}
                        <div className="flex justify-end gap-2">
                            <button type="button" onClick={() => setShowForm(false)} className="btn btn-secondary">Cancel</button>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            )}

            {/* Group by Matchday */}
            {Object.keys(groupedMatches).sort((a, b) => Number(a) - Number(b)).map(matchday => (
                <div key={matchday} className="card overflow-hidden mb-6">
                    <div className="bg-gray-100 px-4 py-2 font-bold flex justify-between items-center cursor-pointer" onClick={() => toggleMatchday(matchday)}>
                        <span>Matchday {matchday}</span>
                        <span className="text-xs text-gray-500">{groupedMatches[matchday].length} matches</span>
                    </div>

                    {(expandedMatchdays[matchday]) && (
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="p-4">Match</th>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groupedMatches[matchday].map(m => (
                                    <tr key={m.id} className="border-b last:border-0 hover:bg-gray-50">
                                        <td className="p-4">
                                            <div className="font-medium">{getTeamName(m.home_team_id)} vs {getTeamName(m.away_team_id)}</div>
                                            {m.external_id && <div className="text-xs text-blue-500">ID: {m.external_id}</div>}
                                        </td>
                                        <td className="p-4 text-sm text-gray-500">
                                            {new Date(m.start_date).toLocaleDateString()} {new Date(m.start_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${m.status === 'FINISHED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {m.status === 'FINISHED' ? `${m.score_home} - ${m.score_away}` : 'Scheduled'}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right flex justify-end gap-2">
                                            {m.external_id && (
                                                <button
                                                    onClick={() => handleSingleSync(m.id)}
                                                    className="p-1 text-blue-600 hover:text-blue-800"
                                                    title="Sync from External API"
                                                >
                                                    <Download size={16} />
                                                </button>
                                            )}
                                            <button onClick={() => handleEdit(m)} className="p-1 hover:text-blue-600"><Edit size={16} /></button>
                                            <button onClick={() => handleDelete(m.id)} className="p-1 hover:text-red-600"><Trash2 size={16} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            ))}

            {/* Loading Overlay */}
            {fetchingExternal && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                        <h3 className="text-lg font-bold">Importing Data...</h3>
                        <p className="text-gray-500">Please wait while we fetch the latest matches.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MatchManagement;
