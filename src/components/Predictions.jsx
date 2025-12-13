import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, doc, setDoc, query, where, deleteDoc, orderBy, limit } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import { CheckCircle, XCircle, Clock, Calendar, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';

const Predictions = () => {
    const { currentUser } = useAuth();
    const [matches, setMatches] = useState([]);
    const [teams, setTeams] = useState([]);
    const [predictions, setPredictions] = useState({}); // Map matchId -> prediction value
    const [loading, setLoading] = useState(true);
    const [matchdays, setMatchdays] = useState([]);
    const [currentMatchday, setCurrentMatchday] = useState(1);

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
            // Fetch teams (needed for all matchdays)
            const teamsSnap = await getDocs(collection(db, 'teams'));
            const teamsMap = {};
            teamsSnap.docs.forEach(d => teamsMap[d.id] = d.data());
            setTeams(teamsMap);

            // Find the upcoming matchday based on today's date
            const todayStr = new Date().toISOString().split('T')[0];
            const q = query(
                collection(db, 'matches'),
                where('start_date', '>=', todayStr),
                orderBy('start_date', 'asc'),
                limit(1)
            );

            const matchSnap = await getDocs(q);

            if (!matchSnap.empty) {
                const upcomingMatch = matchSnap.docs[0].data();
                setCurrentMatchday(upcomingMatch.matchday);
            } else {
                // Determine the last available matchday if no future matches exist
                const allMatchesQ = query(collection(db, 'matches'), orderBy('matchday', 'desc'), limit(1));
                const lastMatchSnap = await getDocs(allMatchesQ);
                if (!lastMatchSnap.empty) {
                    setCurrentMatchday(lastMatchSnap.docs[0].data().matchday);
                } else {
                    setCurrentMatchday(1); // Default fall back
                }
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to load initial data");
        }
    };

    const fetchMatchdayData = async () => {
        setLoading(true);
        try {
            // Fetch only matches for the current matchday
            const matchesQuery = query(
                collection(db, 'matches'),
                where('matchday', '==', currentMatchday)
            );
            const matchesSnap = await getDocs(matchesQuery);
            const matchesData = matchesSnap.docs.map(d => ({ id: d.id, ...d.data() }));

            // Sort matches by date
            matchesData.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

            setMatches(matchesData);

            // Fetch user predictions only for matches in this matchday
            if (currentUser && matchesData.length > 0) {
                const matchIds = matchesData.map(m => m.id);
                const predsQuery = query(
                    collection(db, 'predictions'),
                    where('userId', '==', currentUser.uid),
                    where('matchId', 'in', matchIds)
                );
                const predsSnap = await getDocs(predsQuery);
                const predsMap = {};
                predsSnap.docs.forEach(d => {
                    predsMap[d.data().matchId] = d.data().prediction;
                });
                setPredictions(predsMap);
            } else if (!currentUser) {
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
        if (!currentUser) return;

        // Optimistic update
        setPredictions(prev => ({ ...prev, [matchId]: value }));

        try {
            // Upsert prediction: Use composite ID for easy overwrite: userId_matchId
            const predId = `${currentUser.uid}_${matchId}`;
            await setDoc(doc(db, 'predictions', predId), {
                userId: currentUser.uid,
                matchId: matchId,
                prediction: value,
                timestamp: new Date().toISOString()
            });
            toast.success("Prediction saved");
        } catch (error) {
            toast.error("Failed to save prediction");
            fetchMatchdayData(); // Revert
        }
    };

    const getTeam = (id) => teams[id] || { name: 'Unknown', short_name: 'UNK' };

    const filteredMatches = matches
        .filter(m => m.matchday === currentMatchday)
        .sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

    // Helper for styling
    const getBtnClass = (match, type) => {
        const isSelected = predictions[match.id] === type;
        const isWinner = match.status === 'FINISHED' && match.winner === type;
        const isCorrectPrediction = match.status === 'FINISHED' && isSelected && match.winner === type;
        const isWrongPrediction = match.status === 'FINISHED' && isSelected && match.winner !== type;
        const base = "flex-1 py-2 rounded-md text-sm font-bold transition-all border ";

        // Highlight the winning option in green for finished matches
        if (match.status === 'FINISHED') {
            // If user predicted correctly, show dark green
            if (isCorrectPrediction) {
                return base + " border-green-700 shadow-md cursor-default" + " " + "bg-green-700 text-black";
            }
            // If user predicted incorrectly, show red
            if (isWrongPrediction) {
                return base + " border-red-600 shadow-md cursor-default" + " " + "bg-red-600 text-white";
            }
            // If this is the winning option (but user didn't predict it), show light green
            if (isWinner) {
                return base + " border-green-300 shadow-md cursor-default" + " " + "bg-green-200 text-black";
            }
            // Non-winning options are grayed out
            return base + " opacity-50 cursor-not-allowed bg-gray-100 text-gray-400 border-gray-200";
        }

        // For ongoing matches, show user's selection
        if (isSelected) {
            if (type === '1') return base + " bg-blue-600 text-white border-blue-600 shadow-md";
            if (type === 'X') return base + " bg-yellow-500 text-white border-yellow-500 shadow-md";
            if (type === '2') return base + " bg-green-600 text-white border-green-600 shadow-md";
        }
        return base + " bg-white text-gray-700 hover:bg-gray-50 border-gray-200";
    };

    // Helper for card background class based on prediction result
    const getCardBackgroundClass = (match) => {
        // Only apply background for finished matches with user predictions
        if (match.status !== 'FINISHED' || !predictions[match.id]) {
            return ''; // No additional class (default white)
        }

        const userPrediction = predictions[match.id];
        const isCorrect = userPrediction === match.winner;

        return isCorrect ? 'match-card-correct' : 'match-card-incorrect';
    };

    if (loading) return <div className="p-8 text-center">Loading matches...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Make Predictions</h1>

                {/* Matchday Navigator */}
                <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-gray-200">
                    <button
                        onClick={() => setCurrentMatchday(p => Math.max(1, p - 1))}
                        disabled={currentMatchday <= 1}
                        className="p-1 hover:bg-gray-100 rounded disabled:opacity-30"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <span className="font-mono font-bold px-2">Matchday {currentMatchday}</span>
                    <button
                        onClick={() => setCurrentMatchday(p => p + 1)} // unlimited for now or max
                        className="p-1 hover:bg-gray-100 rounded"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                {filteredMatches.map(match => {
                    const home = getTeam(match.home_team);
                    const away = getTeam(match.away_team);
                    const isLocked = match.status === 'FINISHED'; // Or verify start date < now

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

                            {/* Referee */}
                            {match.referee && (
                                <div className="text-xs text-gray-500 mb-5 text-center">
                                    Referee: <span className="font-medium">{match.referee}</span>
                                </div>
                            )}

                            {/* Teams & Score */}
                            <div className="flex items-center justify-between mb-6 px-2">
                                <div className="flex flex-col items-center gap-1 w-1/3">
                                    {home.crest && <img src={home.crest} alt={home.short_name} className="w-8 h-8 object-contain" />}
                                    <span className="font-bold text-center leading-tight text-sm">{home.short_name}</span>
                                </div>

                                <div className="flex flex-col items-center justify-center w-1/3">
                                    {match.status === 'FINISHED' ? (
                                        <div className="text-2xl font-black text-gray-800 tracking-widest">
                                            {match.full_time_score_home} - {match.full_time_score_away}
                                        </div>
                                    ) : (
                                        <span className="text-sm font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">VS</span>
                                    )}
                                </div>

                                <div className="flex flex-col items-center gap-1 w-1/3">
                                    {away.crest && <img src={away.crest} alt={away.short_name} className="w-8 h-8 object-contain" />}
                                    <span className="font-bold text-center leading-tight text-sm">{away.short_name}</span>
                                </div>
                            </div>

                            {/* Voting Buttons */}
                            <div className="flex gap-2">
                                <button
                                    className={getBtnClass(match, '1')}
                                    onClick={() => !isLocked && handleVote(match.id, '1')}
                                    disabled={isLocked && match.winner !== '1'}
                                >
                                    1
                                </button>
                                <button
                                    className={getBtnClass(match, 'X')}
                                    onClick={() => !isLocked && handleVote(match.id, 'X')}
                                    disabled={isLocked && match.winner !== 'X'}
                                >
                                    X
                                </button>
                                <button
                                    className={getBtnClass(match, '2')}
                                    onClick={() => !isLocked && handleVote(match.id, '2')}
                                    disabled={isLocked && match.winner !== '2'}
                                >
                                    2
                                </button>
                            </div>

                            {/* Prediction Result Logic - Only show positive feedback */}
                            {isLocked && predictions[match.id] && predictions[match.id] === match.winner && (
                                <div className="mt-3 text-center text-sm font-bold p-2 rounded bg-green-100 text-green-700">
                                    Correct Prediction! (+1 Pt)
                                </div>
                            )}
                        </div>
                    );
                })}

                {filteredMatches.length === 0 && (
                    <div className="text-center py-10 text-gray-400">No matches scheduled for this matchday.</div>
                )}
            </div>
        </div>
    );
};

export default Predictions;
