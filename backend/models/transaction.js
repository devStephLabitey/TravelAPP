const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Transaction = sequelize.define('Transaction', {
  id_transaction: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type_transaction: {
    type: DataTypes.ENUM('recharge', 'retrait', 'paiement', 'transfert'),
    allowNull: false,
  },
  montant: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  id_moyen_paiement: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  statut: {
    type: DataTypes.ENUM('en attente', 'effectuée', 'échouée'),
    defaultValue: 'en attente',
  },
  date_transaction: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'transactions',
  timestamps: false, 
});

module.exports = Transaction;