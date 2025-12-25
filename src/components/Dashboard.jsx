import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';

export default function Dashboard() {
    const { currentUser } = useAuth();
    const [leaderboard, setLeaderboard] = useState([]);
    const [oddLeaderboard, setOddLeaderboard] = useState([]);
    const [headToHeadLeaderboard, setHeadToHeadLeaderboard] = useState([]);
    const [stats, setStats] = useState({
        total: 0,
        correct: 0,
        points: 0,
        successRate: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            const results = await Promise.allSettled([
                api.get('/predictions/stats'),
                api.get('/predictions/leaderboard'),
                api.get('/predictions/odd-leaderboard'),
                api.get('/predictions/head-to-head-leaderboard')
            ]);

            const [statsRes, leaderboardRes, oddLeaderboardRes, headToHeadRes] = results;

            if (statsRes.status === 'fulfilled') {
                setStats(statsRes.value.data);
            } else {
                console.error("Failed to fetch stats:", statsRes.reason);
            }

            if (leaderboardRes.status === 'fulfilled') {
                setLeaderboard(leaderboardRes.value.data);
            } else {
                console.error("Failed to fetch leaderboard:", leaderboardRes.reason);
            }

            if (oddLeaderboardRes.status === 'fulfilled') {
                setOddLeaderboard(oddLeaderboardRes.value.data);
            } else {
                console.error("Failed to fetch odds leaderboard:", oddLeaderboardRes.reason);
            }

            if (headToHeadRes.status === 'fulfilled') {
                setHeadToHeadLeaderboard(headToHeadRes.value.data);
            } else {
                console.error("Failed to fetch head-to-head leaderboard:", headToHeadRes.reason);
            }
        };

        if (currentUser) {
            fetchData();
        }
    }, [currentUser]);

    return (
        <div>
            <h1>Dashboard</h1>
            <p className="text-[var(--text-secondary)] mt-2">Welcome back, {currentUser?.displayName || (currentUser?.first_name && currentUser?.last_name ? `${currentUser.first_name} ${currentUser.last_name}` : "User")}!</p>
            <div className="mt-8 space-y-6">
                {/* Stats Section - Full Width */}
                {/* Stats Section - Full Width */}
                <div className="card p-6 flex flex-row justify-space-evenly items-start">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gray-600">Total Predictions</h3>
                        <p className="text-4xl font-bold mt-2 text-blue-600">{stats.total}</p>
                    </div>
                    <div className="block w-px h-16 bg-gray-200 mx-6"></div>
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gray-600">Success Rate</h3>
                        <p className="text-4xl font-bold mt-2 text-amber-500">{stats.successRate}%</p>
                        <div className="text-xs text-gray-400 mt-1">{stats.correct} correct</div>
                    </div>
                </div>

                {/* Leaderboards Grid - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    <div className="card p-0 overflow-hidden flex flex-col" style={{ maxHeight: '400px' }}>
                        <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-600">Leaderboard</h3>
                            <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Top Users</span>
                        </div>
                        <div className="overflow-y-auto flex-1">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-gray-500 uppercase bg-gray-50 sticky top-0">
                                    <tr>
                                        <th className="px-4 py-2">Rank</th>
                                        <th className="px-4 py-2">User</th>
                                        <th className="px-4 py-2 text-right">Pts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leaderboard.map((entry) => (
                                        <tr
                                            key={entry.user_id}
                                            className={`border-b last:border-0 ${entry.user_id === currentUser.uid ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                                        >
                                            <td className="px-4 py-3 font-medium text-gray-900">
                                                {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : `#${entry.rank}`}
                                            </td>
                                            <td className={`px-4 py-3 ${entry.user_id === currentUser.uid ? 'font-bold text-blue-700' : 'text-gray-700'}`}>
                                                {entry.displayName} {entry.user_id === currentUser.uid && '(You)'}
                                            </td>
                                            <td className="px-4 py-3 text-right font-bold text-green-600">
                                                {entry.points}
                                            </td>
                                        </tr>
                                    ))}
                                    {leaderboard.length === 0 && (
                                        <tr>
                                            <td colSpan="3" className="px-4 py-4 text-center text-gray-500">No rankings yet</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card p-0 overflow-hidden flex flex-col" style={{ maxHeight: '400px' }}>
                        <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-600">Odds</h3>
                            <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Top Predictors</span>
                        </div>
                        <div className="overflow-y-auto flex-1">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-gray-500 uppercase bg-gray-50 sticky top-0">
                                    <tr>
                                        <th className="px-4 py-2">Rank</th>
                                        <th className="px-4 py-2">User</th>
                                        <th className="px-4 py-2 text-right">Pts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {oddLeaderboard.map((entry) => (
                                        <tr
                                            key={entry.user_id}
                                            className={`border-b last:border-0 ${entry.user_id === currentUser.uid ? 'bg-amber-50' : 'hover:bg-gray-50'}`}
                                        >
                                            <td className="px-4 py-3 font-medium text-gray-900">
                                                {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : `#${entry.rank}`}
                                            </td>
                                            <td className={`px-4 py-3 ${entry.user_id === currentUser.uid ? 'font-bold text-amber-700' : 'text-gray-700'}`}>
                                                {entry.displayName} {entry.user_id === currentUser.uid && '(You)'}
                                            </td>
                                            <td className="px-4 py-3 text-right font-bold text-green-600">
                                                {entry.points}
                                            </td>
                                        </tr>
                                    ))}
                                    {oddLeaderboard.length === 0 && (
                                        <tr>
                                            <td colSpan="3" className="px-4 py-4 text-center text-gray-500">No rankings yet</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card p-0 overflow-hidden flex flex-col" style={{ maxHeight: '400px' }}>
                        <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-600">Head to Head</h3>
                            <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Top H2H</span>
                        </div>
                        <div className="overflow-y-auto flex-1">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-gray-500 uppercase bg-gray-50 sticky top-0">
                                    <tr>
                                        <th className="px-4 py-2">Rank</th>
                                        <th className="px-4 py-2">User</th>
                                        <th className="px-4 py-2 text-right">W-D-L</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {headToHeadLeaderboard.map((entry) => (
                                        <tr
                                            key={entry.user_id}
                                            className={`border-b last:border-0 ${entry.user_id === currentUser.uid ? 'bg-purple-50' : 'hover:bg-gray-50'}`}
                                        >
                                            <td className="px-4 py-3 font-medium text-gray-900">
                                                {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : `#${entry.rank}`}
                                            </td>
                                            <td className={`px-4 py-3 ${entry.user_id === currentUser.uid ? 'font-bold text-purple-700' : 'text-gray-700'}`}>
                                                {entry.displayName} {entry.user_id === currentUser.uid && '(You)'}
                                            </td>
                                            <td className="px-4 py-3 text-right font-bold text-green-600">
                                                {entry.win}-{entry.draw}-{entry.loss}
                                            </td>
                                        </tr>
                                    ))}
                                    {headToHeadLeaderboard.length === 0 && (
                                        <tr>
                                            <td colSpan="3" className="px-4 py-4 text-center text-gray-500">No rankings yet</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
