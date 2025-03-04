const express = require('express');
const router = express.Router();
const compteUtilisateurController = require('../controllers/compteUtilisateurController');

/**
 * @swagger
 * tags:
 *   name: CompteUtilisateur
 *   description: Gestion des comptes utilisateurs
 */

/**
 * @swagger
 * /compte-utilisateur:
 *   post:
 *     summary: Créer un nouveau compte utilisateur
 *     tags: [CompteUtilisateur]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               mot_de_passe:
 *                 type: string
 *                 format: password
 *     responses:
 *       201:
 *         description: Compte utilisateur créé avec succès
 *       400:
 *         description: Erreur de validation
 *       500:
 *         description: Erreur serveur
 */
router.post('/', compteUtilisateurController.createCompteUtilisateur);

/**
 * @swagger
 * /compte-utilisateur/{id}:
 *   get:
 *     summary: Récupérer un compte utilisateur par ID
 *     tags: [CompteUtilisateur]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du compte utilisateur
 *     responses:
 *       200:
 *         description: Détails du compte utilisateur
 *       404:
 *         description: Compte utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', compteUtilisateurController.getCompteUtilisateur);

/**
 * @swagger
 * /compte-utilisateur/{id}:
 *   put:
 *     summary: Mettre à jour un compte utilisateur
 *     tags: [CompteUtilisateur]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du compte utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               mot_de_passe:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Compte utilisateur mis à jour avec succès
 *       400:
 *         description: Erreur de validation
 *       404:
 *         description: Compte utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', compteUtilisateurController.updateCompteUtilisateur);

/**
 * @swagger
 * /compte-utilisateur/{id}:
 *   delete:
 *     summary: Supprimer un compte utilisateur
 *     tags: [CompteUtilisateur]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du compte utilisateur
 *     responses:
 *       200:
 *         description: Compte utilisateur supprimé avec succès
 *       404:
 *         description: Compte utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', compteUtilisateurController.deleteCompteUtilisateur);

module.exports = router;
