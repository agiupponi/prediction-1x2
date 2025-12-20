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
                <div className="flex items-center justify-between px-6 pt-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-gray-800">
                        <Trophy className="text-amber-500" size={24} />
                        <h2 className="text-xl font-bold">Matchday {matchday} Standings</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body - Side by Side Layout */}
                <div className="flex-1 overflow-auto px-6 pb-4">
                    {loading ? (
                        <div className="flex justify-center items-center h-48">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">

                            {/* Weekly Standing Column */}
                            <div className="flex flex-col h-full">
                                <h3 className="text-lg font-bold mb-4 text-center text-gray-700 bg-gray-50 p-2 rounded-lg">
                                    Weekly Points
                                </h3>
                                <div className="flex-1 overflow-y-auto pr-2">
                                    {weeklyStanding.length > 0 ? (
                                        <table className="w-full text-sm">
                                            <thead className="bg-white sticky top-0 z-10">
                                                <tr className="border-b border-gray-200">
                                                    <th className="py-2 text-center w-12 text-gray-400 font-medium">#</th>
                                                    <th className="py-2 text-left text-gray-400 font-medium">User</th>
                                                    <th className="py-2 text-right text-gray-400 font-medium">Pts</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {weeklyStanding.map((entry, idx) => (
                                                    <tr key={entry.rank} className="border-b border-gray-50 hover:bg-amber-50/30 transition-colors">
                                                        <td className="py-3 text-center font-mono text-gray-500">
                                                            {idx + 1}
                                                        </td>
                                                        <td className="py-3 font-medium text-gray-800">
                                                            {entry.displayName}
                                                        </td>
                                                        <td className="py-3 text-right font-bold text-amber-600">
                                                            {entry.points}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <div className="text-center text-gray-400 py-8">No points yet</div>
                                    )}
                                </div>
                            </div>

                            {/* Odd Standing Column */}
                            <div className="flex flex-col h-full border-l md:border-l border-gray-100 md:pl-8">
                                <h3 className="text-lg font-bold mb-4 text-center text-gray-700 bg-gray-50 p-2 rounded-lg">
                                    Odd Points
                                </h3>
                                <div className="flex-1 overflow-y-auto pr-2">
                                    {oddStanding.length > 0 ? (
                                        <table className="w-full text-sm">
                                            <thead className="bg-white sticky top-0 z-10">
                                                <tr className="border-b border-gray-200">
                                                    <th className="py-2 text-center w-12 text-gray-400 font-medium">#</th>
                                                    <th className="py-2 text-left text-gray-400 font-medium">User</th>
                                                    <th className="py-2 text-right text-gray-400 font-medium">Pts</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {oddStanding.map((entry, idx) => (
                                                    <tr key={entry.rank} className="border-b border-gray-50 hover:bg-amber-50/30 transition-colors">
                                                        <td className="py-3 text-center font-mono text-gray-500">
                                                            {idx + 1}
                                                        </td>
                                                        <td className="py-3 font-medium text-gray-800">
                                                            {entry.displayName}
                                                        </td>
                                                        <td className="py-3 text-right font-bold text-blue-600">
                                                            {entry.points}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <div className="text-center text-gray-400 py-8">No odd points yet</div>
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
