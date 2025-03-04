const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const argon2 = require("argon2");

const User = sequelize.define('User', {
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom_user: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  prenom_user: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(200),
    allowNull: false,
    unique: true,
  },
  pass_word: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  type_user: {
    type: DataTypes.ENUM('user', 'admin', 'superadmin'),
    defaultValue: 'user',
  },
  date_creation: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'users',
  timestamps: false,
});

module.exports = User;
