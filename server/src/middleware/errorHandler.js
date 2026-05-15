const AppError = require('../utils/AppError');

const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    // Gestione di errori specifici comuni se necessario (es. Sequelize o JWT)
    let error = Object.assign(Object.create(Object.getPrototypeOf(err)), err);
    error.message = err.message;

    // Log dell'errore per il debug interno (solo se non è operativo o in dev)
    if (process.env.NODE_ENV !== 'production' || !error.isOperational) {
        console.error('ERROR 💥:', err);
    }

    // Risposta standardizzata al client
    if (error.isOperational) {
        res.status(error.statusCode).json({
            status: error.status,
            statusCode: error.statusCode,
            message: error.message
        });
    } else {
        // Errore di programmazione o sconosciuto: non mostrare dettagli sensibili al client in produzione
        res.status(500).json({
            status: 'error',
            statusCode: 500,
            message: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : error.message
        });
    }
};

module.exports = errorHandler;
