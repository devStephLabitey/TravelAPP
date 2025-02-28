const express = require('express');
const router = express.Router();
const compteUtilisateurController = require('../controllers/compteUtilisateurController');

router.post('/', compteUtilisateurController.createCompteUtilisateur);

router.get('/:id', compteUtilisateurController.getCompteUtilisateur);

router.put('/:id', compteUtilisateurController.updateCompteUtilisateur);

router.delete('/:id', compteUtilisateurController.deleteCompteUtilisateur);

module.exports = router;
