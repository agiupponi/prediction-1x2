import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import toast from 'react-hot-toast';
import { Match, Team, Prediction, OddsDataMap, MatchPredictionsMap } from '../types';

export function usePredictions() {
    const { currentUser } = useAuth();
    const [matches, setMatches] = useState<Match[]>([]);
    const [predictions, setPredictions] = useState<Record<number, string>>({});
    const [loading, setLoading] = useState(true);
    const [currentMatchday, setCurrentMatchday] = useState<number | null>(null);
    const [teams, setTeams] = useState<Record<number, Team>>({});
    const [expandedMatchId, setExpandedMatchId] = useState<number | null>(null);
    const [oddsData, setOddsData] = useState<OddsDataMap>({});
    const [matchPredictions, setMatchPredictions] = useState<MatchPredictionsMap>({});
    const [availableMatchdays, setAvailableMatchdays] = useState<number[]>([]);

    const initializeView = async () => {
        try {
            // Fetch teams
            const teamsRes = await api.get<Team[]>('/teams');
            const teamsMap: Record<number, Team> = {};
            if (teamsRes.data) {
                teamsRes.data.forEach(t => teamsMap[t.id] = t);
            }
            setTeams(teamsMap);

            // Fetch available matchdays
            let mds: number[] = [];
            try {
                const mdRes = await api.get<number[]>('/matches/matchdays');
                mds = mdRes.data || [];
                setAvailableMatchdays(mds);
            } catch (err) {
                console.error("Failed to fetch matchdays", err);
            }

            // Fetch upcoming match to set matchday
            try {
                const upcomingRes = await api.get<Partial<Match>>('/matches/upcoming');
                if (upcomingRes.data && upcomingRes.data.matchday) {
                    setCurrentMatchday(upcomingRes.data.matchday);
                } else {
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

    const fetchMatchdayData = useCallback(async () => {
        if (currentMatchday === null) return;
        
        setLoading(true);
        try {
            const matchesRes = await api.get<Match[]>(`/matches?matchday=${currentMatchday}`);
            setMatches(matchesRes.data || []);

            if (currentUser) {
                const predsRes = await api.get<Prediction[]>('/predictions');
                const predsMap: Record<number, string> = {};
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
    }, [currentMatchday, currentUser]);

    useEffect(() => {
        initializeView();
    }, []);

    useEffect(() => {
        if (currentMatchday) {
            fetchMatchdayData();
        }
    }, [currentMatchday, currentUser, fetchMatchdayData]);

    const handleVote = async (matchId: number, value: '1' | 'X' | '2') => {
        if (!currentUser) {
            toast.error("Please log in to vote");
            return;
        }

        const oldPrediction = predictions[matchId];
        setPredictions(prev => ({ ...prev, [matchId]: value }));

        try {
            await api.post('/predictions', {
                matchId,
                prediction: value
            });
            toast.success("Prediction saved");

            if (expandedMatchId === matchId) {
                const res = await api.get<Prediction[]>(`/predictions/match/${matchId}/all`);
                setMatchPredictions(prev => ({ ...prev, [matchId]: res.data }));
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to save prediction");
            setPredictions(prev => ({ ...prev, [matchId]: oldPrediction }));
        }
    };

    const toggleMatchExpand = async (matchId: number) => {
        if (expandedMatchId === matchId) {
            setExpandedMatchId(null);
        } else {
            setExpandedMatchId(matchId);

            if (!oddsData[matchId]) {
                try {
                    const res = await api.get(`/matches/${matchId}/odds`);
                    setOddsData(prev => ({ ...prev, [matchId]: res.data }));
                } catch (error) {
                    console.error("Failed to fetch odds", error);
                }
            }

            try {
                const res = await api.get<Prediction[]>(`/predictions/match/${matchId}/all`);
                setMatchPredictions(prev => ({ ...prev, [matchId]: res.data }));
            } catch (error) {
                console.error("Failed to fetch match predictions", error);
            }
        }
    };

    const navigateMatchday = (direction: 'prev' | 'next') => {
        if (currentMatchday === null) return;
        
        if (availableMatchdays.length === 0) {
            setCurrentMatchday(prev => {
                if (prev === null) return 1;
                return direction === 'next' ? prev + 1 : Math.max(1, prev - 1);
            });
            return;
        }

        const currentIndex = availableMatchdays.indexOf(currentMatchday);
        if (currentIndex === -1) return;

        if (direction === 'prev' && currentIndex > 0) {
            setCurrentMatchday(availableMatchdays[currentIndex - 1]);
        } else if (direction === 'next' && currentIndex < availableMatchdays.length - 1) {
            setCurrentMatchday(availableMatchdays[currentIndex + 1]);
        }
    };

    const getTeam = (id: number): Team => teams[id] || { id: 0, name: 'Unknown', short_name: 'UNK', crest_url: '' };

    const filteredMatches = matches
        .filter(m => m.matchday === currentMatchday)
        .sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());

    return {
        matches: filteredMatches,
        predictions,
        loading,
        currentMatchday,
        setCurrentMatchday,
        availableMatchdays,
        expandedMatchId,
        oddsData,
        matchPredictions,
        handleVote,
        toggleMatchExpand,
        navigateMatchday,
        getTeam
    };
}
