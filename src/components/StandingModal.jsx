import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Trophy } from 'lucide-react';
import api from '../services/api';

export default function StandingModal({ isOpen, onClose, matchday }) {
    const [weeklyStanding, setWeeklyStanding] = useState([]);
    const [oddStanding, setOddStanding] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isOpen && matchday) {
            fetchStandings();
        }
    }, [isOpen, matchday]);

    const fetchStandings = async () => {
        setLoading(true);
        try {
            const [weeklyRes, oddRes] = await Promise.all([
                api.get(`/predictions/leaderboard?matchday=${matchday}`),
                api.get(`/predictions/odd-leaderboard?matchday=${matchday}`)
            ]);
            setWeeklyStanding(weeklyRes.data || []);
            setOddStanding(oddRes.data || []);
        } catch (error) {
            console.error("Failed to fetch standings", error);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center p-4">
            {/* Backdrop with blur and overlay */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-gray-900/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="card relative bg-white rounded-xl shadow-2xl w-half max-w-4xl max-h-[80vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-4 border-b border-gray-100 bg-gray-50">
                    <div className="flex items-center gap-2 text-gray-900">
                        <Trophy className="text-gray-900" size={24} />
                        <h2 className="text-2xl font-black uppercase tracking-tight font-oswald">Week {matchday} Standings</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-200 transition-colors text-gray-900"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Body - Side by Side Layout */}
                <div className="flex-1 overflow-auto px-6 pb-4 pt-4">
                    {loading ? (
                        <div className="flex justify-center items-center h-48">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">

                            {/* Weekly Standing Column */}
                            <div className="flex flex-col h-full">
                                <h3 className="text-xl font-bold text-center text-black bg-blue-900 uppercase m-0 tracking-wider font-oswald shadow-sm">
                                    Weekly Points
                                </h3>
                                <div className="flex-1 overflow-y-auto pr-2">
                                    {weeklyStanding.length > 0 ? (
                                        <table className="w-full text-sm">
                                            <thead className="bg-white sticky top-0 z-10">
                                                <tr className="border-b-2 border-gray-900 text-gray-900 uppercase">
                                                    <th className="py-2 text-center w-12 font-black font-oswald text-lg">#</th>
                                                    <th className="py-2 text-left font-black font-oswald text-lg">User</th>
                                                    <th className="py-2 text-right font-black font-oswald text-lg">Pts</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {weeklyStanding.map((entry, idx) => (
                                                    <tr key={entry.rank} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                                        <td className="py-3 text-center font-bold font-oswald text-gray-500 text-lg">
                                                            {idx + 1}
                                                        </td>
                                                        <td className="py-3 font-bold text-gray-900 uppercase">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center overflow-hidden shrink-0 text-[10px] text-white font-bold" style={{ backgroundColor: "var(--primary-600)" }}>
                                                                    {entry.photoURL ? (
                                                                        <img 
                                                                            src={entry.photoURL} 
                                                                            alt="" 
                                                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                                            onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                                                                        />
                                                                    ) : (entry.displayName ? entry.displayName.charAt(0).toUpperCase() : 'U')}
                                                                </div>
                                                                <span className="truncate max-w-[120px] sm:max-w-[160px]">{entry.displayName}</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 text-right font-black text-blue-900 text-xl font-oswald">
                                                            {entry.points}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <div className="text-center text-gray-400 py-8 italic">No points yet</div>
                                    )}
                                </div>
                            </div>

                            {/* Odd Standing Column */}
                            <div className="flex flex-col h-full border-l-0 md:border-l md:border-gray-200 md:pl-8">
                                <h3 className="text-xl font-bold text-center text-black bg-red-700 m-0 uppercase tracking-wider font-oswald shadow-sm">
                                    Odd Points
                                </h3>
                                <div className="flex-1 overflow-y-auto pr-2">
                                    {oddStanding.length > 0 ? (
                                        <table className="w-full text-sm">
                                            <thead className="bg-white sticky top-0 z-10">
                                                <tr className="border-b-2 border-gray-900 text-gray-900 uppercase">
                                                    <th className="py-2 text-center w-12 font-black font-oswald text-lg">#</th>
                                                    <th className="py-2 text-left font-black font-oswald text-lg">User</th>
                                                    <th className="py-2 text-right font-black font-oswald text-lg">Pts</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {oddStanding.map((entry, idx) => (
                                                    <tr key={entry.rank} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                                        <td className="py-3 text-center font-bold font-oswald text-gray-500 text-lg">
                                                            {idx + 1}
                                                        </td>
                                                        <td className="py-3 font-bold text-gray-900 uppercase">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center overflow-hidden shrink-0 text-[10px] text-white font-bold" style={{ backgroundColor: "var(--primary-600)" }}>
                                                                    {entry.photoURL ? (
                                                                        <img 
                                                                            src={entry.photoURL} 
                                                                            alt="" 
                                                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                                            onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                                                                        />
                                                                    ) : (entry.displayName ? entry.displayName.charAt(0).toUpperCase() : 'U')}
                                                                </div>
                                                                <span className="truncate max-w-[120px] sm:max-w-[160px]">{entry.displayName}</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 text-right font-black text-red-700 text-xl font-oswald">
                                                            {entry.points}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <div className="text-center text-gray-400 py-8 italic">No odd points yet</div>
                                    )}
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}
