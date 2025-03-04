const express = require("express");
const router = express.Router();
const paiementController = require("../controllers/paiementController");

/**
 * @swagger
 * tags:
 *   name: Paiement
 *   description: Gestion des paiements
 */

/**
 * @swagger
 * api/paiements:
 *   get:
 *     summary: Récupérer tous les paiements
 *     tags: [Paiement]
 *     responses:
 *       200:
 *         description: Liste de tous les paiements
 *       500:
 *         description: Erreur serveur
 */
router.get('/', paiementController.getAllPaiements);

/**
 * @swagger
 * api/paiements/{id}:
 *   get:
 *     summary: Récupérer un paiement par ID
 *     tags: [Paiement]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du paiement
 *     responses:
 *       200:
 *         description: Détails du paiement
 *       404:
 *         description: Paiement non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get("/:id", paiementController.getPaiementById);

/**
 * @swagger
 * api/paiements:
 *   post:
 *     summary: Effectuer un paiement
 *     tags: [Paiement]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               montant:
 *                 type: number
 *               moyenPaiement:
 *                 type: string
 *               utilisateurId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Paiement effectué avec succès
 *       400:
 *         description: Erreur de validation
 *       500:
 *         description: Erreur serveur
 */
router.post("/", paiementController.createPaiement);

/**
 * @swagger
 * api/paiements/{id}:
 *   put:
 *     summary: Mettre à jour un paiement
 *     tags: [Paiement]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du paiement
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               montant:
 *                 type: number
 *               moyenPaiement:
 *                 type: string
 *     responses:
 *       200:
 *         description: Paiement mis à jour avec succès
 *       400:
 *         description: Erreur de validation
 *       404:
 *         description: Paiement non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", paiementController.updatePaiement);

/**
 * @swagger
 * api/paiements/{id}:
 *   delete:
 *     summary: Supprimer un paiement
 *     tags: [Paiement]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du paiement
 *     responses:
 *       200:
 *         description: Paiement supprimé avec succès
 *       404:
 *         description: Paiement non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", paiementController.deletePaiement);

module.exports = router;
