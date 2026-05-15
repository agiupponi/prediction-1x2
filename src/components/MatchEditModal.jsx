import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Save } from 'lucide-react';
import api from '../services/api';
import toast from 'react-hot-toast';

const MatchEditModal = ({ isOpen, onClose, match, teams, onSave }) => {
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
        if (isOpen) {
            if (match) {
                setFormData({
                    matchday: match.matchday,
                    homeTeamId: match.home_team_id,
                    awayTeamId: match.away_team_id,
                    referee: match.referee || '',
                    startDate: match.start_date ? match.start_date.slice(0, 16) : '',
                    status: match.status,
                    fullTimeScoreHome: match.score_home !== null ? match.score_home : '',
                    fullTimeScoreAway: match.score_away !== null ? match.score_away : '',
                    winner: match.winner || ''
                });
            } else {
                setFormData({
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
            }
        }
    }, [isOpen, match]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                matchday: parseInt(formData.matchday),
                home_team_id: formData.homeTeamId,
                away_team_id: formData.awayTeamId,
                referee: formData.referee,
                start_date: new Date(formData.startDate).toISOString(),
                status: formData.status,
                score_home: formData.fullTimeScoreHome !== '' ? parseInt(formData.fullTimeScoreHome) : null,
                score_away: formData.fullTimeScoreAway !== '' ? parseInt(formData.fullTimeScoreAway) : null,
            };

            if (match) {
                await api.put(`/matches/${match.id}`, payload);
                toast.success("Match updated");
            } else {
                await api.post('/matches', payload);
                toast.success("Match created");
            }
            onSave();
            onClose();
        } catch (err) {
            console.error(err);
            toast.error("Error saving match");
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center p-4">
            <div
                className="absolute top-0 left-0 w-full h-full bg-gray-900/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />
            <div className="card relative bg-white rounded-none shadow-2xl w-half max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-gray-200">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-primary-900 text-white border-b border-primary-800">
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl font-black uppercase tracking-wider font-oswald text-white m-0">
                            {match ? 'Edit Match' : 'Add New Match'}
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-white/10 rounded transition-colors text-white"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto bg-gray-50 flex-1">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Row 1: Matchday, Date, Status */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 uppercase font-oswald mb-1">Matchday</label>
                                <input className="input w-three-quarter font-bold text-lg" name="matchday" type="number" required value={formData.matchday} onChange={handleInputChange} />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 uppercase font-oswald mb-1">Date & Time</label>
                                <input className="input w-three-quarter font-bold text-lg" name="startDate" type="datetime-local" required value={formData.startDate} onChange={handleInputChange} />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 uppercase font-oswald mb-1">Status</label>
                                <select className="input w-three-quarter font-bold text-lg" name="status" value={formData.status} onChange={handleInputChange}>
                                    <option value="TIMED">Scheduled</option>
                                    <option value="FINISHED">Finished</option>
                                    <option value="IN_PLAY">In Play</option>
                                    <option value="PAUSED">Paused</option>
                                    <option value="POSTPONED">Postponed</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 2: Teams */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-primary-900 uppercase font-oswald mb-1">Home Team</label>
                                <select className="input w-full font-bold text-lg" name="homeTeamId" required value={formData.homeTeamId} onChange={handleInputChange}>
                                    <option value="">Select Team</option>
                                    {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-primary-900 uppercase font-oswald mb-1">Away Team</label>
                                <select className="input w-full font-bold text-lg" name="awayTeamId" required value={formData.awayTeamId} onChange={handleInputChange}>
                                    <option value="">Select Team</option>
                                    {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                                </select>
                            </div>
                        </div>

                        {/* Row 3: Scores (Conditional) */}
                        {['FINISHED', 'IN_PLAY', 'PAUSED'].includes(formData.status) && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 uppercase font-oswald mb-1">Home Score</label>
                                    <input className="input w-three-quarter text-lg font-bold" placeholder="0" name="fullTimeScoreHome" type="number" value={formData.fullTimeScoreHome} onChange={handleInputChange} />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 uppercase font-oswald mb-1">Away Score</label>
                                    <input className="input w-three-quarter text-lg font-bold" placeholder="0" name="fullTimeScoreAway" type="number" value={formData.fullTimeScoreAway} onChange={handleInputChange} />
                                </div>
                            </div>
                        )}

                        {/* Row 4: Winner (Conditional) */}
                        {formData.status === 'FINISHED' && (
                            <div>
                                <label className="block text-sm font-bold text-gray-700 uppercase font-oswald mb-1">Winner (1X2)</label>
                                <select className="input w-full font-bold text-lg" name="winner" value={formData.winner} onChange={handleInputChange}>
                                    <option value="">Auto-calculate / None</option>
                                    <option value="1">1 (Home Win)</option>
                                    <option value="X">X (Draw)</option>
                                    <option value="2">2 (Away Win)</option>
                                </select>
                            </div>
                        )}

                        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                            <button type="button" onClick={onClose} className="btn btn-secondary uppercase tracking-wider">Cancel</button>
                            <button type="submit" className="btn btn-primary flex items-center gap-2 uppercase tracking-wider px-6">
                                <Save size={18} /> Save Match
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default MatchEditModal;
