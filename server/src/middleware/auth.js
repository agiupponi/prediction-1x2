const admin = require('../config/firebase');
const userService = require('../services/userService');

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
        // Fallback: If we don't have custom claims, we fetch the user role from optimized in-memory cache
        return userService.getCachedUserRole(req.user.uid)
            .then(role => {
                if (role === 'admin') {
                    next();
                } else {
                    res.status(403).json({ message: 'Forbidden: Admin access required' });
                }
            })
            .catch(err => {
                console.error('Error checking admin status:', err);
                res.status(500).json({ message: 'Error checking admin status' });
            });
    }
};

module.exports = { verifyToken, isAdmin };
