const admin = require('../config/firebase');

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split('Bearer ')[1];

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken; // Contains uid, email, etc.
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') { // Check custom claim or DB role
        // Note: Firebase Custom Claims are best for this, but we might rely on client knowing or separate check
        // ideally we check claims. For now, assuming claim is set OR we check our Firestore user doc (but simpler to use claim)
        next();
    } else {
        // Fallback: If we don't have custom claims, we might need to fetch the user from Firestore or MySQL
        // For simplicity in this migration, let's assume if they migrated, they have claims? 
        // Or we just fetch from Firestore here? That slows it down.
        // Let's assume we can rely on email or a specific ID for the *initial* admin.
        // Or better: Let's fetch the user role from Firestore just to be safe if not in token.
        // Actually, the previous implementation checked Firestore doc.
        // We can use admin.firestore().collection('users').doc(req.user.uid).get()
        return admin.firestore().collection('users').doc(req.user.uid).get()
            .then(doc => {
                if (doc.exists && doc.data().role === 'admin') {
                    next();
                } else {
                    res.status(403).json({ message: 'Forbidden: Admin access required' });
                }
            })
            .catch(err => {
                res.status(500).json({ message: 'Error checking admin status' });
            });
    }
};

module.exports = { verifyToken, isAdmin };
