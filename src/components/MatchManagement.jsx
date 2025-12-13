import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X, Download, Search, ChevronLeft, ChevronRight, CheckCircle, Clock } from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs, doc, setDoc, deleteDoc, updateDoc, query, where, Timestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';

const MatchManagement = () => {
    const [matches, setMatches] = useState([]);
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchingExternal, setFetchingExternal] = useState(false);
    const [editingMatch, setEditingMatch] = useState(null);
    const [showForm, setShowForm] = useState(false);

    // Pagination
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
            const matchesSnap = await getDocs(collection(db, 'matches'));
            const matchesData = matchesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            // Fetch Teams
            const teamsSnap = await getDocs(collection(db, 'teams'));
            const teamsData = teamsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            setMatches(matchesData);
            setTeams(teamsData);
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
        const token = import.meta.env.VITE_FOOTBALL_DATA_TOKEN;

        if (!token) {
            toast.error("Missing API Token (VITE_FOOTBALL_DATA_TOKEN)");
            setFetchingExternal(false);
            return;
        }

        try {
            const response = await fetch('/api/football/competitions/SA/matches', {
                headers: { 'X-Auth-Token': token }
            });
            const data = await response.json();
            const externalMatches = data.matches || [];

            let importedMatchesCount = 0;
            let importedTeamsCount = 0;

            // Simplify: We process sequentially to avoid race conditions on team creation
            for (const match of externalMatches) {
                // 1. Upsert Teams
                let homeTeamId = null;
                let awayTeamId = null;

                const findTeam = (tla) => teams.find(t => t.three_letter_name === tla);

                // Create specific function to add team if not exists
                const upsertTeam = async (apiTeam) => {
                    // Check existing in generic list
                    // Ideally we query firestore, but for client-side batch we can check local state if refreshed
                    // Or better: try to find by TLA in firestore
                    const q = query(collection(db, 'teams'), where('three_letter_name', '==', apiTeam.tla));
                    const snap = await getDocs(q);

                    if (!snap.empty) {
                        return snap.docs[0].id;
                    } else {
                        // Create
                        const newTeamRef = doc(collection(db, 'teams'));
                        await setDoc(newTeamRef, {
                            name: apiTeam.name,
                            short_name: apiTeam.shortName || apiTeam.name,
                            three_letter_name: apiTeam.tla,
                            crest: apiTeam.crest
                        });
                        importedTeamsCount++;
                        return newTeamRef.id;
                    }
                };

                homeTeamId = await upsertTeam(match.homeTeam);
                awayTeamId = await upsertTeam(match.awayTeam);

                // 2. Upsert Match
                // Check if match exists (by matchday + teams)
                const matchQuery = query(
                    collection(db, 'matches'),
                    where('matchday', '==', match.matchday),
                    where('home_team', '==', homeTeamId),
                    where('away_team', '==', awayTeamId)
                );
                const matchSnap = await getDocs(matchQuery);

                const status = match.status === 'FINISHED' ? 'FINISHED' : 'TIMED';
                let winner = null;
                if (match.score?.winner) {
                    if (match.score.winner === 'HOME_TEAM') winner = '1';
                    else if (match.score.winner === 'AWAY_TEAM') winner = '2';
                    else if (match.score.winner === 'DRAW') winner = 'X';
                }

                const matchData = {
                    matchday: match.matchday,
                    home_team: homeTeamId,
                    away_team: awayTeamId,
                    referee: match.referees?.[0]?.name || null,
                    start_date: match.utcDate, // ISO String
                    status,
                    full_time_score_home: match.score?.fullTime?.home ?? null,
                    full_time_score_away: match.score?.fullTime?.away ?? null,
                    winner
                };

                if (!matchSnap.empty) {
                    // Update existing
                    const docId = matchSnap.docs[0].id;
                    await updateDoc(doc(db, 'matches', docId), matchData);
                } else {
                    // Create new
                    await setDoc(doc(collection(db, 'matches')), matchData);
                    importedMatchesCount++;
                }
            }

            toast.success(`Imported ${importedMatchesCount} new matches!`);
            fetchData(); // Refresh all
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch external matches: " + error.message);
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
            homeTeamId: match.home_team,
            awayTeamId: match.away_team,
            referee: match.referee || '',
            startDate: match.start_date ? match.start_date.slice(0, 16) : '',
            status: match.status,
            fullTimeScoreHome: match.full_time_score_home || '',
            fullTimeScoreAway: match.full_time_score_away || '',
            winner: match.winner || ''
        });
        setShowForm(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                matchday: parseInt(formData.matchday),
                home_team: formData.homeTeamId,
                away_team: formData.awayTeamId,
                referee: formData.referee,
                start_date: new Date(formData.startDate).toISOString(),
                status: formData.status,
                full_time_score_home: parseInt(formData.fullTimeScoreHome) || null,
                full_time_score_away: parseInt(formData.fullTimeScoreAway) || null,
                winner: formData.winner || null
            };

            if (editingMatch) {
                await updateDoc(doc(db, 'matches', editingMatch.id), payload);
                toast.success("Match updated");
            } else {
                await setDoc(doc(collection(db, 'matches')), payload);
                toast.success("Match created");
            }
            setShowForm(false);
            setEditingMatch(null);
            fetchData();
        } catch (err) {
            toast.error("Error saving match");
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete match?")) return;
        await deleteDoc(doc(db, 'matches', id));
        fetchData();
    };

    // --- Filtering & Sorting ---
    const filteredMatches = matches
        .filter(m => {
            if (searchFilters.matchday && m.matchday != searchFilters.matchday) return false;
            if (searchFilters.status && m.status !== searchFilters.status) return false;
            return true;
        })
        .sort((a, b) => new Date(b.start_date) - new Date(a.start_date)); // Newest first

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

            <div className="card overflow-hidden">
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
                        {filteredMatches.map(m => (
                            <tr key={m.id} className="border-b last:border-0 hover:bg-gray-50">
                                <td className="p-4">
                                    <div className="font-medium">{getTeamName(m.home_team)} vs {getTeamName(m.away_team)}</div>
                                    <div className="text-xs text-gray-500">MD {m.matchday}</div>
                                </td>
                                <td className="p-4 text-sm text-gray-500">
                                    {new Date(m.start_date).toLocaleDateString()} {new Date(m.start_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${m.status === 'FINISHED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {m.status === 'FINISHED' ? `${m.full_time_score_home} - ${m.full_time_score_away}` : 'Scheduled'}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <button onClick={() => handleEdit(m)} className="p-1 hover:text-blue-600"><Edit size={16} /></button>
                                    <button onClick={() => handleDelete(m.id)} className="p-1 hover:text-red-600"><Trash2 size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MatchManagement;
