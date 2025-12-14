const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./config/db'); // Restore sequelize for sync
require('dotenv').config();
require('./config/firebase'); // Init firebase admin

// Import Models to ensure they are registered with Sequelize
require('./models/Team');
require('./models/Match');
require('./models/Prediction');
const teamRoutes = require('./routes/teams');
const matchRoutes = require('./routes/matches');
const predictionRoutes = require('./routes/predictions');

// Sync Database (ensure schema updates)
sequelize.sync({ alter: true })
    .then(() => console.log('Database & tables synced!'))
    .catch(err => console.error('Error syncing database:', err));

const app = express();

// Middleware
app.use(cors({ origin: true })); // Allow all origins for now, or specify
app.use(express.json());

// Routes
// Note: Function name will likely be 'api'.
// Deploying as: exports.api = ...
// URL: /api/...
// If we want the route to be /api/teams, we can keep the prefix.
app.use('/api/teams', teamRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/predictions', predictionRoutes);

app.get('/', (req, res) => {
    res.send('Prediction App API Running (Serverless)');
});

// Export Cloud Function
exports.api = functions.https.onRequest(app);
