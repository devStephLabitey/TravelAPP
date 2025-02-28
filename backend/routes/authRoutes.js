const express = require('express');
const { signup, login } = require('../controllers/authController');

const router = express.Router();

//inscription
router.post('/signup', signup);

// connexion
router.post('/login', login);

module.exports = router;
