import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { usePredictions } from '../hooks/usePredictions';
import { CheckCircle, XCircle, Clock, Calendar, ChevronLeft, ChevronRight, AlertCircle, Trophy } from 'lucide-react';
import StandingModal from './StandingModal';
import { getMatchWinner } from '../utils/matchUtils';

export default function Predictions() {
    const { currentUser } = useAuth();
    const {
        matches,
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
    } = usePredictions();

    const [isStandingModalOpen, setIsStandingModalOpen] = useState(false);

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
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 transition-colors uppercase font-bold text-sm tracking-wider font-oswald"
                    >
                        <Trophy size={16} /> Standings
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 items-start">
                {matches.map(match => {
                    const home = getTeam(match.home_team_id);
                    const away = getTeam(match.away_team_id);
                    const isLocked = match.status === 'FINISHED' || new Date(match.start_date) < new Date();

                    const winner = getMatchWinner(match);

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
                                        const computedWinner = getMatchWinner(match);

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
                                    {isLocked ? (
                                        <>
                                            <h4 className="text-xs font-bold text-gray-500 uppercase mb-1 tracking-wider font-oswald">Community Pick</h4>
                                            {oddsData[match.id] && oddsData[match.id].length > 0 ? (
                                                <div className="space-y-4">
                                                    <div className="space-y-1">
                                                        {oddsData[match.id].map(odd => {
                                                            const type = odd.prediction;
                                                            const partial = odd.partial_prediction;
                                                            const total = odd.total_predictions;
                                                            const percentage = total ? (partial / total) * 100 : 0;

                                                            return (
                                                                <div key={type} className="flex items-center text-xs font-medium">
                                                                    <div className="w-12 text-gray-500 font-bold">{type === '1' ? 'HOME' : type === 'X' ? 'DRAW' : 'AWAY'}</div>
                                                                    <div className="flex-1 h-3 bg-gray-200 mx-2 relative rounded overflow-hidden">
                                                                        <div
                                                                            className={`h-full absolute top-0 left-0 transition-all duration-500 ${type === '1' ? 'bg-blue-600' : type === 'X' ? 'bg-gray-500' : 'bg-red-600'}`}
                                                                            style={{ width: `${percentage}%` }}
                                                                        ></div>
                                                                    </div>
                                                                    <div className="w-10 text-right font-bold text-gray-700">{percentage.toFixed(0)}%</div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>

                                                    {matchPredictions[match.id] && matchPredictions[match.id].length > 0 && (
                                                        <div className="pt-3 border-t border-gray-200">
                                                            <h4 className="text-xs font-bold text-gray-500 uppercase mb-2 tracking-wider font-oswald">Friends</h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {matchPredictions[match.id].map(p => {
                                                                    const pickColor = p.prediction === '1' ? 'bg-blue-100 text-blue-800 border-blue-300' : p.prediction === 'X' ? 'bg-gray-100 text-gray-800 border-gray-300' : 'bg-red-100 text-red-800 border-red-300';
                                                                    return (
                                                                        <div key={p.user_id || p.displayName} className={`flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs font-bold ${pickColor}`}>
                                                                            <div className="w-4 h-4 rounded-full bg-primary-600 flex items-center justify-center overflow-hidden shrink-0 text-[8px] text-white font-bold" style={{ backgroundColor: "var(--primary-600)" }}>
                                                                                {p.photoURL ? (
                                                                                    <img 
                                                                                        src={p.photoURL} 
                                                                                        alt="" 
                                                                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                                                        onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                                                                                    />
                                                                                ) : (p.displayName ? p.displayName.charAt(0).toUpperCase() : 'U')}
                                                                            </div>
                                                                            <span className="max-w-[100px] truncate uppercase">{p.displayName}</span>
                                                                            <span className="px-1.5 py-0.5 rounded bg-white text-black font-black text-[10px] shadow-sm">{p.prediction}</span>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="text-center text-gray-400 text-xs py-2 italic">Loading stats...</div>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {predictions[match.id] ? (
                                                <div className="text-center text-gray-500 text-sm py-4 italic">
                                                    Predictions revealed at kickoff
                                                </div>
                                            ) : (
                                                <div className="text-center text-gray-500 text-sm py-4 italic">
                                                    Make a pick (Results revealed at kickoff)
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}

                {matches.length === 0 && !loading && (
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
