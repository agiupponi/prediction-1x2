import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import toast from 'react-hot-toast';
import { CheckCircle, XCircle, Clock, Calendar, ChevronLeft, ChevronRight, AlertCircle, Trophy } from 'lucide-react';
import StandingModal from './StandingModal';

export default function Predictions() {
    const { currentUser } = useAuth();
    const [matches, setMatches] = useState([]);
    const [predictions, setPredictions] = useState({});
    const [loading, setLoading] = useState(true);
    const [currentMatchday, setCurrentMatchday] = useState(null);
    const [teams, setTeams] = useState({});
    const [expandedMatchId, setExpandedMatchId] = useState(null);
    const [oddsData, setOddsData] = useState({});
    const [matchPredictions, setMatchPredictions] = useState({});
    const [isStandingModalOpen, setIsStandingModalOpen] = useState(false);

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

            // Refetch details for this match if open to update list instantly
            if (expandedMatchId === matchId) {
                const res = await api.get(`/predictions/match/${matchId}/all`);
                setMatchPredictions(prev => ({ ...prev, [matchId]: res.data }));
            }

        } catch (error) {
            console.error(error);
            toast.error("Failed to save prediction");
            setPredictions(prev => ({ ...prev, [matchId]: oldPrediction }));
        }
    };

    const toggleMatchExpand = async (matchId) => {
        if (expandedMatchId === matchId) {
            setExpandedMatchId(null);
        } else {
            setExpandedMatchId(matchId);

            // Fetch Odds
            if (!oddsData[matchId]) {
                try {
                    const res = await api.get(`/matches/${matchId}/odds`);
                    setOddsData(prev => ({ ...prev, [matchId]: res.data }));
                } catch (error) {
                    console.error("Failed to fetch odds", error);
                }
            }

            // Fetch User Predictions List
            // Always fetch fresh to get latest updates
            try {
                const res = await api.get(`/predictions/match/${matchId}/all`);
                setMatchPredictions(prev => ({ ...prev, [matchId]: res.data }));
            } catch (error) {
                console.error("Failed to fetch match predictions", error);
            }
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
                return base + " border-green-200 shadow-md cursor-default bg-green-200 text-black";
            }
            return base + " opacity-50 cursor-not-allowed bg-gray-100 text-gray-400 border-gray-200";
        }

        // For ongoing matches
        if (isSelected) {
            // Highlight pending predictions in "Orange-Yellow" (Amber) as requested
            return base + " bg-amber-500 text-white border-amber-500 shadow-md";
        }
        return base + " bg-white text-black hover:bg-gray-50 border-gray-200";
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

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsStandingModalOpen(true)}
                        className="p-2 bg-amber-100 text-amber-600 rounded-full hover:bg-amber-200 transition-colors"
                        title="View Standings"
                    >
                        <Trophy size={20} />
                    </button>

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
                                    className="appearance-none bg-transparent font-mono font-bold px-4 py-1 pr-8 cursor-pointer focus:outline-none bg-gray-50 border-none text-xl text-gray-900"
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
                            className={`card match-card p-4 hover:shadow-md transition-shadow cursor-pointer`}
                            onClick={(e) => {
                                // Prevent toggle when clicking buttons
                                if (e.target.tagName === 'BUTTON') return;
                                toggleMatchExpand(match.id);
                            }}
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
                            <div className="flex items-center justify-between mb-6 px-2">
                                <div className="flex flex-col items-center justify-center gap-1 w-33">
                                    {home.crest_url && <img src={home.crest_url} alt={home.short_name} className="w-8 h-8 object-contain" />}
                                    <span className="font-bold text-center leading-tight text-sm">{home.short_name || home.name}</span>
                                </div>

                                <div className="flex flex-col items-center justify-center w-33">
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
                                        <span className="text-sm font-bold text-gray-9">-</span>
                                    )}
                                </div>

                                <div className="flex flex-col items-center justify-center gap-1 w-33">
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

                            {/* New: Odds / Expanded View */}
                            {expandedMatchId === match.id && (
                                <div className="mt-4 pt-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300 cursor-default" onClick={(e) => e.stopPropagation()}>
                                    {isLocked || predictions[match.id] ? (
                                        <>
                                            <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Community Predictions</h4>
                                            {oddsData[match.id] && oddsData[match.id].length > 0 ? (
                                                <div className="space-y-4">
                                                    <div className="space-y-2">
                                                        {oddsData[match.id].map(odd => {
                                                            const type = odd.prediction;
                                                            const partial = odd.partial_prediction;
                                                            const total = odd.total_predictions;
                                                            const oddValue = odd.odd;

                                                            return (
                                                                <div key={type} className="flex items-center justify-between text-sm">
                                                                    <span className="font-bold w-4 text-center">{type}</span>
                                                                    <div className="flex-1 mx-3 bg-gray-100 rounded-full h-2 overflow-hidden">
                                                                        <div
                                                                            className={`h-full ${type === '1' ? 'bg-blue-500' : type === 'X' ? 'bg-gray-500' : 'bg-red-500'}`}
                                                                            style={{ width: `${total ? (partial / total) * 100 : 0}%` }}
                                                                        />
                                                                    </div>
                                                                    <div className="flex gap-4 text-xs font-mono text-gray-600">
                                                                        <span>{partial}/{total}</span>
                                                                        <span className="font-bold text-gray-600">{oddValue ? Number(oddValue).toFixed(2) : '-'}</span>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>

                                                    {matchPredictions[match.id] && matchPredictions[match.id].length > 0 && (
                                                        <div className="pt-4 border-t border-gray-100">
                                                            <h5 className="text-xs font-bold text-gray-400 uppercase mb-2">User Predictions</h5>
                                                            <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
                                                                {matchPredictions[match.id].map((p, idx) => (
                                                                    <div key={idx} className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded hover:bg-gray-100">
                                                                        <span className="font-medium text-gray-700">{p.displayName}</span>
                                                                        <span className={`font-bold px-2 py-0.5  text-xs 'bg-red-100 text-gray-700'`}>
                                                                            {p.prediction}
                                                                        </span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="text-center text-gray-400 text-xs py-2">No predictions yet</div>
                                            )}
                                        </>
                                    ) : (
                                        <div className="text-center text-gray-500 text-sm py-4 italic bg-gray-50 rounded border border-gray-100">
                                            Fai un pronostico per vedere cosa hanno votato gli altri
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}

                {filteredMatches.length === 0 && !loading && (
                    <div className="text-center py-10 text-gray-400 w-full">No matches scheduled for this matchday.</div>
                )}
            </div>

            <StandingModal
                isOpen={isStandingModalOpen}
                onClose={() => setIsStandingModalOpen(false)}
                matchday={currentMatchday}
            />
        </div >
    );
};
