const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Reservation = sequelize.define('Reservation', {
  id_reservation: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_logement: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_vehicule: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  date_debut: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  date_fin: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  statut: {
    type: DataTypes.ENUM('en attente', 'confirmée', 'annulée'),
    defaultValue: 'en attente',
  },
  prix_total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  date_reservation: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'reservations',
  timestamps: false, 
});

module.exports = Reservation;