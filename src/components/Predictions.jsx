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
            {/* NFL Style Header Strip */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-white border-b-4 border-blue-900 p-4 mb-6 shadow-sm">
                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
                    <h1 className="text-4xl font-black italic tracking-tighter uppercase text-gray-900 font-oswald">
                        Week <span className="text-red-600">{currentMatchday}</span>
                    </h1>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => navigateMatchday('prev')}
                            disabled={availableMatchdays.length > 0 ? currentMatchday === availableMatchdays[0] : currentMatchday <= 1}
                            className="p-2 hover:bg-gray-100 disabled:opacity-30 border border-gray-300 transition-colors"
                        >
                            <ChevronLeft size={24} strokeWidth={3} />
                        </button>
                        <button
                            onClick={() => navigateMatchday('next')}
                            disabled={availableMatchdays.length > 0 ? currentMatchday === availableMatchdays[availableMatchdays.length - 1] : false}
                            className="p-2 hover:bg-gray-100 disabled:opacity-30 border border-gray-300 transition-colors"
                        >
                            <ChevronRight size={24} strokeWidth={3} />
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4 md:mt-0 w-full md:w-auto justify-end">
                    {availableMatchdays.length > 0 && (
                        <select
                            value={currentMatchday}
                            onChange={(e) => setCurrentMatchday(Number(e.target.value))}
                            className="appearance-none bg-gray-100 font-bold uppercase text-sm px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-900 font-oswald"
                        >
                            {availableMatchdays.map(md => (
                                <option key={md} value={md}>Week {md}</option>
                            ))}
                        </select>
                    )}
                    <button
                        onClick={() => setIsStandingModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 transition-colors uppercase font-bold text-sm tracking-wider font-oswald"
                    >
                        <Trophy size={16} /> Standings
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 items-start">
                {filteredMatches.map(match => {
                    const home = getTeam(match.home_team_id);
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
                            className={`card match-card hover:shadow-lg transition-all cursor-pointer bg-white relative overflow-hidden group border-t-4 flex flex-col`}
                            onClick={(e) => {
                                if (e.target.tagName === 'BUTTON') return;
                                toggleMatchExpand(match.id);
                            }}
                        >
                            {/* Match Status Strip */}
                            <div className="bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-500 flex justify-between items-center border-b border-gray-200 font-oswald">
                                <span className="mt-neg-15 ml-0-1">{new Date(match.start_date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                                {match.status === 'FINISHED' ? (
                                    <span className="text-black mt-neg-15 mr-0-1">Final</span>
                                ) : (
                                    <span className="text-black mt-neg-15 mr-0-1">{new Date(match.start_date).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</span>
                                )}
                            </div>

                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-6 flex-1">
                                    {/* Home Team */}
                                    <div className="flex flex-col items-center gap-2 flex-1 w-0 px-4 pt-4">
                                        {home.crest_url ? (
                                            <img src={home.crest_url} alt={home.short_name} className="w-12 h-12 object-contain drop-shadow-sm w-full h-full" />
                                        ) : (
                                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-400">?</div>
                                        )}
                                        <span className="font-extrabold text-2xl uppercase tracking-tight text-gray-900 text-center leading-none font-oswald truncate w-full italic font-black">{home.short_name || home.name}</span>
                                    </div>

                                    {/* Score / VS */}
                                    <div className="flex flex-col items-center justify-center px-4">
                                        {match.status === 'FINISHED' ? (
                                            <div className="flex gap-3 items-center">
                                                <span className={`text-4xl font-black font-oswald ${match.score_home > match.score_away ? 'text-gray-900' : 'text-gray-500'}`}>
                                                    {match.score_home}
                                                </span>
                                                <span className="text-gray-300 text-2xl font-light">-</span>
                                                <span className={`text-4xl font-black font-oswald ${match.score_away > match.score_home ? 'text-gray-900' : 'text-gray-500'}`}>
                                                    {match.score_away}
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="text-xl font-bold text-gray-300 font-oswald italic">VS</span>
                                        )}
                                    </div>

                                    {/* Away Team */}
                                    <div className="flex flex-col items-center gap-2 flex-1 w-0 px-4 pt-4">
                                        {away.crest_url ? (
                                            <img src={away.crest_url} alt={away.short_name} className="w-12 h-12 object-contain drop-shadow-sm w-full h-full" />
                                        ) : (
                                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-400">?</div>
                                        )}
                                        <span className="font-extrabold text-2xl uppercase tracking-tight text-gray-900 text-center leading-none font-oswald truncate w-full italic font-black">{away.short_name || away.name}</span>
                                    </div>
                                </div>

                                {/* Prediction Strip */}
                                <div className="grid grid-cols-3 gap-0 border border-gray-200 bg-gray-50">
                                    {['1', 'X', '2'].map(type => {
                                        const isSelected = predictions[match.id] === type;
                                        // Re-calculate winner logic locally for display
                                        let computedWinner = match.winner;
                                        if (!computedWinner && match.status === 'FINISHED' && match.score_home !== null) {
                                            if (match.score_home > match.score_away) computedWinner = '1';
                                            else if (match.score_away > match.score_home) computedWinner = '2';
                                            else computedWinner = 'X';
                                        }

                                        const isCorrect = match.status === 'FINISHED' && isSelected && computedWinner === type;
                                        const isWrong = match.status === 'FINISHED' && isSelected && computedWinner !== type;
                                        const isActualWinner = match.status === 'FINISHED' && computedWinner === type;

                                        let bgClass = 'bg-gray-50 hover:bg-amber-500';
                                        let textClass = 'text-gray-500 hover:text-white';
                                        let borderClass = 'border-button';

                                        if (match.status === 'FINISHED') {
                                            if (isCorrect) {
                                                bgClass = 'bg-green-700';
                                                textClass = 'text-white';
                                            } else if (isWrong) {
                                                bgClass = 'bg-red-600';
                                                textClass = 'text-white';
                                            } else if (isActualWinner) {
                                                bgClass = 'bg-green-100';
                                                textClass = 'text-green-800';
                                            } else {
                                                bgClass = 'bg-gray-50 opacity-50';
                                                textClass = 'text-gray-500';
                                            }
                                        } else {
                                            if (isSelected) {
                                                bgClass = 'bg-amber-500';
                                                textClass = 'text-white';
                                            }
                                        }

                                        return (
                                            <button
                                                key={type}
                                                className={`py-3 text-sm font-bold uppercase transition-colors font-oswald ${bgClass} ${textClass} ${borderClass}`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (!isLocked) handleVote(match.id, type);
                                                }}
                                                disabled={isLocked && computedWinner !== type}
                                            >
                                                {type === '1' ? 'Home' : type === 'X' ? 'Draw' : 'Away'}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Details / Expanded */}
                            {expandedMatchId === match.id && (
                                <div className="bg-gray-50 border-t border-gray-200 p-4 animate-in fade-in slide-in-from-top-2 duration-200 cursor-default" onClick={(e) => e.stopPropagation()}>
                                    {isLocked || predictions[match.id] ? (
                                        <>
                                            <h4 className="text-xs font-bold text-gray-500 uppercase mb-1 tracking-wider font-oswald">Community Pick</h4>
                                            {oddsData[match.id] && oddsData[match.id].length > 0 ? (
                                                <div className="space-y-4">
                                                    <div className="space-y-1">
                                                        {oddsData[match.id].map(odd => {
                                                            const type = odd.prediction;
                                                            const partial = odd.partial_prediction;
                                                            const total = odd.total_predictions;
                                                            const oddValue = odd.odd; // Use odd value if needed, or remove
                                                            const percentage = total ? (partial / total) * 100 : 0;

                                                            return (
                                                                <div key={type} className="flex items-center text-xs font-medium">
                                                                    <div className="w-12 text-gray-500 font-bold">{type === '1' ? 'HOME' : type === 'X' ? 'DRAW' : 'AWAY'}</div>
                                                                    <div className="flex-1 h-3 bg-gray-200 mx-2 relative">
                                                                        <div
                                                                            className={`h-full absolute top-0 left-0 ${type === '1' ? 'bg-blue-600' : type === 'X' ? 'bg-gray-500' : 'bg-red-600'}`}
                                                                        ></div>
                                                                    </div>
                                                                    <div className="w-10 text-right font-bold text-gray-700">{percentage.toFixed(0)}%</div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>

                                                    {matchPredictions[match.id] && matchPredictions[match.id].length > 0 && (
                                                        <div className="pt-3 border-t border-gray-200">
                                                            <h4 className="text-xs font-bold text-gray-500 uppercase mb-1 tracking-wider font-oswald">Friends</h4>
                                                            <div className="space-y-4">
                                                                <div className="space-y-1">
                                                                    {matchPredictions[match.id].map((p, idx) => (
                                                                        <div key={p.displayName} className="flex items-center text-xs font-medium">
                                                                            <div className="w-12 text-gray-500 font-bold uppercase">{p.displayName}</div>
                                                                            <div className="flex-1 h-3 bg-gray-200 mx-2 relative">
                                                                                <div
                                                                                    className={`h-full absolute top-0 left-0`}
                                                                                ></div>
                                                                            </div>
                                                                            <div className="w-10 text-right font-bold text-gray-700">{p.prediction}</div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="text-center text-gray-400 text-xs py-2 italic">Loading stats...</div>
                                            )}
                                        </>
                                    ) : (
                                        <div className="text-center text-gray-500 text-sm py-4 italic">
                                            Make a pick to view stats
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
