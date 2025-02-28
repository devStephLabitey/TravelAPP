const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('', process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
});


const createDatabaseIfNotExists = async () => {
  try {
    await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};`);
    console.log(`Base de données "${process.env.DB_NAME}" créée ou déjà existante.`);
  } catch (error) {
    console.error('Erreur lors de la création de la base de données :', error);
  }
};

createDatabaseIfNotExists();




const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  }
);

module.exports = db;