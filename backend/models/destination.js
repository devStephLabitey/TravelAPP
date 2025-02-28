const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Destination = sequelize.define('Destination', {
  id_destination: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom_destination: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  pays: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  description_destination: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'destination',
  timestamps: false,
});

module.exports = Destination;