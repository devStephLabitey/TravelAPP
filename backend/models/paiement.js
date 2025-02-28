const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Paiement = sequelize.define('Paiement', {
  id_paiement: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_reservation: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_transaction: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  montant: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  statut: {
    type: DataTypes.ENUM('en attente', 'effectué', 'échoué'),
    defaultValue: 'en attente',
  },
  date_paiement: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'paiements',
  timestamps: false,
});

module.exports = Paiement;