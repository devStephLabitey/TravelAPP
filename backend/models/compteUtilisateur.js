const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const CompteUtilisateur = sequelize.define('CompteUtilisateur', {
  id_compte: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  solde: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.0,
  },
  date_creation: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'comptes_utilisateurs',
  timestamps: false, 
});

module.exports = CompteUtilisateur;