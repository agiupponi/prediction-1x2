import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Download } from 'lucide-react';
import api from '../services/api';
import toast from 'react-hot-toast';
import MatchEditModal from './MatchEditModal';

const MatchManagement = () => {
    const [matches, setMatches] = useState([]);
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchingExternal, setFetchingExternal] = useState(false);
    const [editingMatch, setEditingMatch] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    // Search
    const [searchFilters, setSearchFilters] = useState({
        matchday: '',
        status: '',
        team: ''
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

    const handleFetchMatchday = async (matchday) => {
        if (!window.confirm(`Fetch all matches for matchday ${matchday}?`)) return;

        setFetchingExternal(true);
        try {
            const res = await api.post(`/matches/import/matchday/${matchday}`);
            toast.success(res.data.message);
            fetchData();
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Fetch failed');
        } finally {
            setFetchingExternal(false);
        }
    };

    // --- Helpers ---
    const getTeamName = (id) => {
        const t = teams.find(x => x.id === id);
        return t ? t.short_name : 'Unknown';
    };

    const handleEdit = (match) => {
        setEditingMatch(match);
        setIsModalOpen(true);
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
                        {fetchingExternal ? ' Fetching...' : ' Fetch External'}
                    </button>
                    <button onClick={() => { setEditingMatch(null); setIsModalOpen(true); }} className="btn btn-primary">
                        <Plus size={16} /> Add Match
                    </button>
                </div>
            </div>

            <MatchEditModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                match={editingMatch}
                teams={teams}
                onSave={fetchData}
            />

            {/* Group by Matchday */}
            {Object.keys(groupedMatches).sort((a, b) => Number(a) - Number(b)).map(matchday => (
                <div key={matchday} className="card overflow-hidden mb-6">
                    <div className="bg-gray-100 px-4 py-2 font-bold flex justify-between items-center">
                        <div className="flex-1 cursor-pointer" onClick={() => toggleMatchday(matchday)}>
                            <span>Matchday {matchday}</span>
                            <span className="ml-2 text-xs text-gray-500 font-normal">{groupedMatches[matchday].length} matches</span>
                        </div>
                        <button
                            onClick={(e) => { e.stopPropagation(); handleFetchMatchday(matchday); }}
                            className="btn btn-secondary py-1 px-3 text-xs flex items-center gap-1"
                            title="Fetch matches for this matchday"
                        >
                            <Download size={14} /> Fetch Day
                        </button>
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
                                            {(() => {
                                                switch (m.status) {
                                                    case 'FINISHED':
                                                        return (
                                                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                                {m.score_home} - {m.score_away} (FT)
                                                            </span>
                                                        );
                                                    case 'IN_PLAY':
                                                        return (
                                                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 animate-pulse">
                                                                {m.score_home !== null ? `${m.score_home} - ${m.score_away}` : '0 - 0'} (LIVE)
                                                            </span>
                                                        );
                                                    case 'PAUSED':
                                                        return (
                                                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                                                {m.score_home !== null ? `${m.score_home} - ${m.score_away}` : '0 - 0'} (HT)
                                                            </span>
                                                        );
                                                    case 'POSTPONED':
                                                        return (
                                                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                                Postponed
                                                            </span>
                                                        );
                                                    default:
                                                        return (
                                                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                                {new Date(m.start_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                            </span>
                                                        );
                                                }
                                            })()}
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
