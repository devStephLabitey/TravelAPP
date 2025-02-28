const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');



const Vehicule = sequelize.define('Vehicule', {
  id_vehicule: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_destination: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  marque: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  modele: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  couleur: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  plaque_imm: {
    type: DataTypes.STRING(200),
    allowNull: false,
    unique: true,
  },
  img_vehicule: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  prix_vehicule: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  vehicule_dispo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'vehicule',
  timestamps: false,
});

module.exports = Vehicule;