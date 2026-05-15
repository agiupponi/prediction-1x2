export type UserRole = 'user' | 'manager' | 'admin';

export interface User {
    id: string;
    email: string;
    displayName?: string | null;
    photoURL?: string | null;
    role?: UserRole;
    first_name?: string | null;
    last_name?: string | null;
    createdAt?: string | number;
}

export interface Team {
    id: number;
    name: string;
    short_name: string;
    crest_url: string;
}

export interface Match {
    id: number;
    matchday: number;
    home_team_id: number;
    away_team_id: number;
    start_date: string;
    status: 'SCHEDULED' | 'TIMED' | 'IN_PLAY' | 'FINISHED' | 'POSTPONED';
    score_home: number;
    score_away: number;
}

export interface Prediction {
    id?: number;
    user_id: string;
    match_id: number;
    prediction: '1' | 'X' | '2';
    displayName?: string;
    photoURL?: string;
}

export interface Odd {
    prediction: '1' | 'X' | '2';
    partial_prediction: number;
    total_predictions: number;
}

export interface MatchPredictionsMap {
    [matchId: number]: Prediction[];
}

export interface OddsDataMap {
    [matchId: number]: Odd[];
}
