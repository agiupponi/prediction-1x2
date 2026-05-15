/**
 * Calcola il vincitore effettivo di una partita in base al punteggio.
 * Restituisce '1' (vittoria in casa), '2' (vittoria in trasferta), 'X' (pareggio), oppure null.
 * 
 * @param {Object} match Oggetto della partita contenente status, winner, score_home, score_away
 * @returns {string|null}
 */
export function getMatchWinner(match) {
    if (!match) return null;
    
    // Se la proprietà winner è già fornita o calcolata, la restituiamo direttamente
    if (match.winner) return match.winner;

    // Calcolo a partire dai punteggi se la partita è terminata
    if (match.status === 'FINISHED' && match.score_home !== null && match.score_away !== null && match.score_home !== undefined) {
        const home = Number(match.score_home);
        const away = Number(match.score_away);
        if (home > away) return '1';
        if (away > home) return '2';
        return 'X';
    }

    return null;
}
