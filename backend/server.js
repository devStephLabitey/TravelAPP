const express = require('express');
const db = require('./config/db');
const cors = require("cors");
const fs = require('fs');
const path = require('path');

const { swaggerUi, swaggerDocs } = require("./config/swagger");

const app = express();
const PORT = 5001;

// Assurer que le dossier 'uploads/' existe
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Documentation Swagger accessible sur `/api-docs`
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middlewares
app.use(express.json());
app.use(cors());

// Rendre le dossier 'uploads/' accessible publiquement
app.use('/uploads', express.static('uploads'));

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
app.use('/api/auths', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/logements', logementRoutes);
app.use('/api/vehicules', vehiculeRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/paiements', paiementRoutes);
app.use('/api/moyens-paiement', moyenPaiementRoutes);
app.use('/api/comptes-utilisateurs', compteUtilisateurRoutes);

// Synchroniser les modèles avec la base de données
db.sync()
  .then(() => console.log('Base de données synchronisée'))
  .catch(error => console.error('Erreur de synchronisation :', error));

// Middleware gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Une erreur est survenue', error: err.message });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(` Serveur démarré sur le port ${PORT}`);
});
