const express = require('express');
const db = require('./config/db');
const app = express();
const cors = require("cors");
const PORT = 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Importer les routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoute');
const destinationRoutes = require('./routes/destinationsRoute');
const logementRoutes = require('./routes/logementsRoute');
const vehiculeRoutes = require('./routes/vehiculesRoute');
const reservationRoutes = require('./routes/reservationsRoute');
const transactionRoutes = require('./routes/transactionsRoute');
const paiementRoutes = require('./routes/paiementsRoute');
const moyenPaiementRoutes = require('./routes/moyenPaiementsRoute');
const compteUtilisateurRoutes = require('./routes/compteUtilisateursRoute');

// Utiliser les routes
app.use('/api/users', userRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/logements', logementRoutes);
app.use('/api/vehicules', vehiculeRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/paiements', paiementRoutes);
app.use('/api/moyens-paiement', moyenPaiementRoutes);
app.use('/api/comptes-utilisateurs', compteUtilisateurRoutes);
app.use('/api/auths', authRoutes);



// Synchroniser les modèles avec la base de données ? creer automatiquement les tables
db.sync()
  .then(() => console.log('Base de données synchronisée'))
  .catch(error => console.error('Erreur de synchronisation :', error));


// Middleware gestion des err
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Une erreur est survenue', error: err.message });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});