import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import toast from 'react-hot-toast';
import { CheckCircle, XCircle, Clock, Calendar, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';

export default function Predictions() {
    const { currentUser } = useAuth();
    const [matches, setMatches] = useState([]);
    const [predictions, setPredictions] = useState({});
    const [loading, setLoading] = useState(true);
    const [currentMatchday, setCurrentMatchday] = useState(null);
    const [teams, setTeams] = useState({});

    const [availableMatchdays, setAvailableMatchdays] = useState([]);

    useEffect(() => {
        initializeView();
    }, []);

    useEffect(() => {
        if (currentMatchday) {
            fetchMatchdayData();
        }
    }, [currentMatchday, currentUser]);

    const initializeView = async () => {
        try {
            // Fetch teams
            const teamsRes = await api.get('/teams');
            const teamsMap = {};
            if (teamsRes.data) {
                teamsRes.data.forEach(t => teamsMap[t.id] = t);
            }
            setTeams(teamsMap);

            // Fetch available matchdays
            let mds = [];
            try {
                const mdRes = await api.get('/matches/matchdays');
                mds = mdRes.data || [];
                setAvailableMatchdays(mds);
            } catch (err) {
                console.error("Failed to fetch matchdays", err);
            }

            // Fetch upcoming match to set matchday
            try {
                const upcomingRes = await api.get('/matches/upcoming');
                if (upcomingRes.data && upcomingRes.data.matchday) {
                    setCurrentMatchday(upcomingRes.data.matchday);
                } else {
                    // Default to first available or 1
                    setCurrentMatchday(mds.length > 0 ? mds[0] : 1);
                }
            } catch (err) {
                console.log("No upcoming matches or error:", err);
                setCurrentMatchday(mds.length > 0 ? mds[0] : 1);
            }

        } catch (error) {
            console.error(error);
            toast.error("Failed to load initial data");
        }
    };

    const fetchMatchdayData = async () => {
        setLoading(true);
        try {
            // Fetch matches for matchday
            const matchesRes = await api.get(`/matches?matchday=${currentMatchday}`);
            setMatches(matchesRes.data || []);

            // Fetch user predictions
            if (currentUser) {
                const predsRes = await api.get('/predictions');
                const predsMap = {};
                if (predsRes.data) {
                    predsRes.data.forEach(p => {
                        predsMap[p.match_id] = p.prediction;
                    });
                }
                setPredictions(predsMap);
            } else {
                setPredictions({});
            }

        } catch (error) {
            console.error(error);
            toast.error("Failed to load matches");
        } finally {
            setLoading(false);
        }
    };

    const handleVote = async (matchId, value) => {
        if (!currentUser) {
            toast.error("Please log in to vote");
            return;
        }

        const oldPrediction = predictions[matchId];
        // Optimistic update
        setPredictions(prev => ({ ...prev, [matchId]: value }));

        try {
            await api.post('/predictions', {
                matchId,
                prediction: value
            });
            toast.success("Prediction saved");
        } catch (error) {
            console.error(error);
            toast.error("Failed to save prediction");
            setPredictions(prev => ({ ...prev, [matchId]: oldPrediction }));
        }
    };

    const getTeam = (id) => teams[id] || { name: 'Unknown', short_name: 'UNK', crest_url: '' };

    const filteredMatches = matches
        .filter(m => m.matchday == currentMatchday) // Loose equality mainly just in case, but strict is fine if types match
        .sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

    // Helper for styling
    const getBtnClass = (match, type) => {
        const isSelected = predictions[match.id] === type;
        const isWinner = match.status === 'FINISHED' && match.winner === type; // Assuming 'winner' logic exists or computed? 
        // Backend match model doesn't store 'winner' property explicitly, usually computed from score_home/away.
        // I need to verify how 'winner' is derived.
        // In previous implementation it might have been in Firestore doc.
        // I should compute 'winner' here if not present.

        let winner = match.winner;
        if (!winner && match.status === 'FINISHED' && match.score_home !== null && match.score_away !== null) {
            if (match.score_home > match.score_away) winner = '1';
            else if (match.score_away > match.score_home) winner = '2';
            else winner = 'X';
        }

        const isCorrectPrediction = match.status === 'FINISHED' && isSelected && winner === type;
        const isWrongPrediction = match.status === 'FINISHED' && isSelected && winner !== type;
        const base = "flex-1 py-2 rounded-md text-sm font-bold transition-all border ";

        // Highlight the winning option in green for finished matches
        if (match.status === 'FINISHED') {
            if (isCorrectPrediction) {
                return base + " border-green-700 shadow-md cursor-default bg-green-700 text-black"; // Reduced complexity
            }
            if (isWrongPrediction) {
                return base + " border-red-600 shadow-md cursor-default bg-red-600 text-white";
            }
            if (!isSelected && winner === type) { // Winner but not selected
                return base + " border-green-300 shadow-md cursor-default bg-green-200 text-black";
            }
            return base + " opacity-50 cursor-not-allowed bg-gray-100 text-gray-400 border-gray-200";
        }

        // For ongoing matches
        if (isSelected) {
            // Highlight pending predictions in "Orange-Yellow" (Amber) as requested
            return base + " bg-amber-500 text-white border-amber-500 shadow-md";
        }
        return base + " bg-white text-gray-700 hover:bg-gray-50 border-gray-200";
    };

    const getCardBackgroundClass = (match) => {
        if (match.status !== 'FINISHED' || !predictions[match.id]) {
            return '';
        }

        let winner = match.winner;
        if (!winner && match.status === 'FINISHED' && match.score_home !== null && match.score_away !== null) {
            if (match.score_home > match.score_away) winner = '1';
            else if (match.score_away > match.score_home) winner = '2';
            else winner = 'X';
        }

        const userPrediction = predictions[match.id];
        const isCorrect = userPrediction === winner;

        return isCorrect ? 'match-card-correct' : 'match-card-incorrect';
    };

    // Helper to navigate matchdays
    const navigateMatchday = (direction) => {
        if (availableMatchdays.length === 0) {
            // Fallback for simple increment if no list
            setCurrentMatchday(prev => direction === 'next' ? prev + 1 : Math.max(1, prev - 1));
            return;
        }

        const currentIndex = availableMatchdays.indexOf(currentMatchday);
        if (currentIndex === -1) return; // Should not happen if sync

        if (direction === 'prev' && currentIndex > 0) {
            setCurrentMatchday(availableMatchdays[currentIndex - 1]);
        } else if (direction === 'next' && currentIndex < availableMatchdays.length - 1) {
            setCurrentMatchday(availableMatchdays[currentIndex + 1]);
        }
    };

    if (loading || !currentMatchday) return <div className="p-8 text-center text-gray-500">Loading matches...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-4">
                <h1 className="text-2xl font-bold">Make Predictions</h1>

                {/* Matchday Navigator */}
                <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-gray-200">
                    <button
                        onClick={() => navigateMatchday('prev')}
                        disabled={availableMatchdays.length > 0 ? currentMatchday === availableMatchdays[0] : currentMatchday <= 1}
                        className="p-1 hover:bg-gray-100 rounded disabled:opacity-30"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {availableMatchdays.length > 0 ? (
                        <div className="relative">
                            <select
                                value={currentMatchday}
                                onChange={(e) => setCurrentMatchday(Number(e.target.value))}
                                className="appearance-none bg-transparent font-mono font-bold px-4 py-1 pr-8 cursor-pointer focus:outline-none bg-gray-50 border-none text-xl"
                            >
                                {availableMatchdays.map(md => (
                                    <option key={md} value={md}>Matchday {md}</option>
                                ))}
                            </select>
                        </div>
                    ) : (
                        <span className="font-mono font-bold px-2">Matchday {currentMatchday}</span>
                    )}

                    <button
                        onClick={() => navigateMatchday('next')}
                        disabled={availableMatchdays.length > 0 ? currentMatchday === availableMatchdays[availableMatchdays.length - 1] : false}
                        className="p-1 hover:bg-gray-100 rounded disabled:opacity-30"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                {filteredMatches.map(match => {
                    const home = getTeam(match.home_team_id); // use home_team_id from backend
                    const away = getTeam(match.away_team_id);
                    const isLocked = match.status === 'FINISHED' || new Date(match.start_date) < new Date();

                    let winner = match.winner;
                    if (!winner && match.status === 'FINISHED' && match.score_home !== null && match.score_away !== null) {
                        if (match.score_home > match.score_away) winner = '1';
                        else if (match.score_away > match.score_home) winner = '2';
                        else winner = 'X';
                    }

                    return (
                        <div
                            key={match.id}
                            className={`card match-card p-4 hover:shadow-md transition-shadow ${getCardBackgroundClass(match)}`}
                        >
                            <div className="flex justify-between items-start mb-4 text-xs text-gray-500 uppercase tracking-wide font-semibold">
                                <div className="flex items-center gap-1">
                                    <Clock size={14} />
                                    {new Date(match.start_date).toLocaleString()}
                                </div>
                                <div className="flex items-center gap-1">
                                    {match.status === 'FINISHED' ? (
                                        <span className="text-green-600 flex items-center gap-1"><CheckCircle size={14} /> FINISHED</span>
                                    ) : (
                                        <span className="text-blue-600 flex items-center gap-1"><Calendar size={14} /> SCHEDULED</span>
                                    )}
                                </div>
                            </div>

                            {/* Referee - removed from display as backend model doesn't explicitly have it right now, could add if needed */}

                            {/* Teams & Score */}
                            {/* Teams & Score */}
                            <div className="flex items-center justify-between mb-6 px-2">
                                <div className="flex flex-col items-center justify-center gap-1 w-1/3">
                                    {home.crest_url && <img src={home.crest_url} alt={home.short_name} className="w-8 h-8 object-contain" />}
                                    <span className="font-bold text-center leading-tight text-sm">{home.short_name || home.name}</span>
                                </div>

                                <div className="flex flex-col items-center justify-center w-1/3">
                                    {match.status === 'FINISHED' ? (
                                        <>
                                            <div className="text-2xl font-black text-gray-800 tracking-widest">
                                                {match.score_home} - {match.score_away}
                                            </div>
                                            {(match.score_halftime_home !== null && match.score_halftime_home !== undefined) && (
                                                <div className="text-xs text-gray-400 mt-1">
                                                    ({match.score_halftime_home} - {match.score_halftime_away})
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <span className="text-sm font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">VS</span>
                                    )}
                                </div>

                                <div className="flex flex-col items-center justify-center gap-1 w-1/3">
                                    {away.crest_url && <img src={away.crest_url} alt={away.short_name} className="w-8 h-8 object-contain" />}
                                    <span className="font-bold text-center leading-tight text-sm">{away.short_name || away.name}</span>
                                </div>
                            </div>

                            {/* Voting Buttons */}
                            <div className="flex gap-2">
                                <button
                                    className={getBtnClass(Object.assign({}, match, { winner }), '1')} // pass winner-augmented match object for helper
                                    onClick={() => !isLocked && handleVote(match.id, '1')}
                                    disabled={isLocked && winner !== '1'}
                                >
                                    1
                                </button>
                                <button
                                    className={getBtnClass(Object.assign({}, match, { winner }), 'X')}
                                    onClick={() => !isLocked && handleVote(match.id, 'X')}
                                    disabled={isLocked && winner !== 'X'}
                                >
                                    X
                                </button>
                                <button
                                    className={getBtnClass(Object.assign({}, match, { winner }), '2')}
                                    onClick={() => !isLocked && handleVote(match.id, '2')}
                                    disabled={isLocked && winner !== '2'}
                                >
                                    2
                                </button>
                            </div>

                            {/* Prediction Result Logic */}
                            {isLocked && predictions[match.id] && predictions[match.id] === winner && (
                                <div className="mt-3 text-center text-sm font-bold p-2 rounded bg-green-100 text-green-700">
                                    Correct Prediction! (+1 Pt)
                                </div>
                            )}
                        </div>
                    );
                })}

                {filteredMatches.length === 0 && !loading && (
                    <div className="text-center py-10 text-gray-400 w-full">No matches scheduled for this matchday.</div>
                )}
            </div>
        </div>
    );
};
