const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Logement = sequelize.define('Logement', {
  id_logement: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_destination: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nom_logement: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  type_logement: {
    type: DataTypes.ENUM('appartement', 'hotel', 'villa'),
    allowNull: false,
  },
  logement_dispo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  prix_logement: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  img_logement: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
}, {
  tableName: 'logement',
  timestamps: false,

});

module.exports = Logement;