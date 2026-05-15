const admin = require('../config/firebase');

class UserService {
    constructor() {
        this.usersCache = null; // Map of id -> { displayName, role, ... }
        this.lastFetchTime = null;
        this.ttl = 10 * 60 * 1000; // 10 minutes Time-To-Live
        this.fetchPromise = null;
    }

    /**
     * Garantisce che la cache sia popolata e valida.
     * Implementa la gestione della concorrenza (se un fetch è in corso, le altre richieste lo attendono).
     */
    async ensureCache() {
        const now = Date.now();
        if (this.usersCache && this.lastFetchTime && (now - this.lastFetchTime < this.ttl)) {
            return;
        }

        // Se un fetch è già in corso, attendiamo la stessa promessa per evitare hit multipli a Firestore
        if (this.fetchPromise) {
            await this.fetchPromise;
            return;
        }

        this.fetchPromise = (async () => {
            try {
                const snapshot = await admin.firestore().collection('users').get();
                const newCache = new Map();
                snapshot.forEach(doc => {
                    const data = doc.data();
                    const displayName = data.displayName || (data.first_name && data.last_name ? `${data.first_name} ${data.last_name}` : 'Unknown');
                    newCache.set(doc.id, {
                        id: doc.id,
                        displayName,
                        role: data.role || 'user',
                        ...data
                    });
                });
                this.usersCache = newCache;
                this.lastFetchTime = Date.now();
                console.log(`[Cache] Anagrafiche utenti prelevate da Firestore e messe in cache (${newCache.size} utenti).`);
            } catch (error) {
                console.error("[Cache] Errore durante il fetch degli utenti da Firestore:", error);
                // Se abbiamo una cache precedente seppur scaduta, continuiamo a usarla per resilienza
                if (!this.usersCache) {
                    throw error;
                }
            } finally {
                this.fetchPromise = null;
            }
        })();

        await this.fetchPromise;
    }

    /**
     * Restituisce la mappa strutturata { user_id: { displayName, photoURL } } ottimizzata per il frontend/classifiche.
     */
    async getCachedUsersMap() {
        await this.ensureCache();
        const usersMap = {};
        if (this.usersCache) {
            this.usersCache.forEach((user, id) => {
                usersMap[id] = {
                    displayName: user.displayName,
                    photoURL: user.photoURL || null
                };
            });
        }
        return usersMap;
    }

    /**
     * Restituisce il ruolo di un utente specifico per l'autorizzazione stateless.
     */
    async getCachedUserRole(userId) {
        await this.ensureCache();
        if (this.usersCache && this.usersCache.has(userId)) {
            return this.usersCache.get(userId).role;
        }
        
        // Fallback: se l'utente non è in cache (es. appena registrato), lo cerchiamo su Firestore
        try {
            const doc = await admin.firestore().collection('users').doc(userId).get();
            if (doc.exists) {
                const data = doc.data();
                const role = data.role || 'user';
                const displayName = data.displayName || (data.first_name && data.last_name ? `${data.first_name} ${data.last_name}` : 'Unknown');
                
                // Aggiorniamo localmente la cache
                if (this.usersCache) {
                    this.usersCache.set(userId, { id: userId, displayName, role, ...data });
                }
                return role;
            }
        } catch (error) {
            console.error(`[Cache] Errore nel recupero del ruolo per l'utente singolo ${userId}:`, error);
        }
        return 'user';
    }

    /**
     * Invalida esplicitamente la cache (utile dopo modifiche amministrative).
     */
    invalidateCache() {
        this.usersCache = null;
        this.lastFetchTime = null;
        console.log("[Cache] Cache anagrafiche utenti invalidata manualmente.");
    }
}

module.exports = new UserService();
