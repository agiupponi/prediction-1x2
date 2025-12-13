import React from 'react';

export default function Matches() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1>Matches</h1>
                <button className="btn btn-primary">Add Match</button>
            </div>

            <div className="grid gap-4">
                {[1, 2, 3].map((match) => (
                    <div key={match} className="card flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="text-center">
                                <div className="font-bold text-lg">Home Team</div>
                            </div>
                            <div className="font-bold text-2xl text-[var(--text-secondary)]">VS</div>
                            <div className="text-center">
                                <div className="font-bold text-lg">Away Team</div>
                            </div>
                        </div>
                        <div>
                            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm font-medium">
                                Upcoming
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
