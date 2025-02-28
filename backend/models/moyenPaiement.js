const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const MoyenPaiement = sequelize.define('MoyenPaiement', {
  id_moyen_paiement: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom_moyen: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'moyens_paiement',
  timestamps: false,
});

module.exports = MoyenPaiement;