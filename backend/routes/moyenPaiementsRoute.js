const express = require("express");
const router = express.Router();
const moyenPaiementController = require("../controllers/moyenPaiementController");

/**
 * @swagger
 * tags:
 *   name: MoyenPaiement
 *   description: Gestion des moyens de paiement
 */

/**
 * @swagger
 * /moyens-paiement:
 *   get:
 *     summary: Récupérer tous les moyens de paiement
 *     tags: [MoyenPaiement]
 *     responses:
 *       200:
 *         description: Liste de tous les moyens de paiement
 *       500:
 *         description: Erreur serveur
 */
router.get('/', moyenPaiementController.getAllMoyensPaiement);

/**
 * @swagger
 * /moyens-paiement/{id}:
 *   get:
 *     summary: Récupérer un moyen de paiement par ID
 *     tags: [MoyenPaiement]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du moyen de paiement
 *     responses:
 *       200:
 *         description: Détails du moyen de paiement
 *       404:
 *         description: Moyen de paiement non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get("/:id", moyenPaiementController.getMoyenPaiementById);

/**
 * @swagger
 * /moyens-paiement:
 *   post:
 *     summary: Ajouter un nouveau moyen de paiement
 *     tags: [MoyenPaiement]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               details:
 *                 type: string
 *     responses:
 *       201:
 *         description: Moyen de paiement créé avec succès
 *       400:
 *         description: Erreur de validation
 *       500:
 *         description: Erreur serveur
 */
router.post("/", moyenPaiementController.createMoyenPaiement);

/**
 * @swagger
 * /moyens-paiement/{id}:
 *   put:
 *     summary: Mettre à jour un moyen de paiement
 *     tags: [MoyenPaiement]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du moyen de paiement
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               details:
 *                 type: string
 *     responses:
 *       200:
 *         description: Moyen de paiement mis à jour avec succès
 *       400:
 *         description: Erreur de validation
 *       404:
 *         description: Moyen de paiement non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", moyenPaiementController.updateMoyenPaiement);

/**
 * @swagger
 * /moyens-paiement/{id}:
 *   delete:
 *     summary: Supprimer un moyen de paiement
 *     tags: [MoyenPaiement]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du moyen de paiement
 *     responses:
 *       200:
 *         description: Moyen de paiement supprimé avec succès
 *       404:
 *         description: Moyen de paiement non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", moyenPaiementController.deleteMoyenPaiement);

module.exports = router;
