const express = require("express");
const router = express.Router();
const logementController = require("../controllers/logementController");

/**
 * @swagger
 * tags:
 *   name: Logement
 *   description: Gestion des logements
 */

/**
 * @swagger
 * api/logements:
 *   get:
 *     summary: Récupérer tous les logements
 *     tags: [Logement]
 *     responses:
 *       200:
 *         description: Liste de tous les logements
 *       500:
 *         description: Erreur serveur
 */
router.get("/", logementController.getAllLogements);

/**
 * @swagger
 *api /logements/{id}:
 *   get:
 *     summary: Récupérer un logement par ID
 *     tags: [Logement]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du logement
 *     responses:
 *       200:
 *         description: Détails du logement
 *       404:
 *         description: Logement non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get("/:id", logementController.getLogementById);

/**
 * @swagger
 * api/logements:
 *   post:
 *     summary: Ajouter un nouveau logement
 *     tags: [Logement]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               adresse:
 *                 type: string
 *               prix:
 *                 type: number
 *     responses:
 *       201:
 *         description: Logement créé avec succès
 *       400:
 *         description: Erreur de validation
 *       500:
 *         description: Erreur serveur
 */
router.post("/", logementController.createLogement);

/**
 * @swagger
 * api/logements/{id}:
 *   put:
 *     summary: Mettre à jour un logement
 *     tags: [Logement]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du logement
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               adresse:
 *                 type: string
 *               prix:
 *                 type: number
 *     responses:
 *       200:
 *         description: Logement mis à jour avec succès
 *       400:
 *         description: Erreur de validation
 *       404:
 *         description: Logement non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", logementController.updateLogement);

/**
 * @swagger
 * api/logements/{id}:
 *   delete:
 *     summary: Supprimer un logement
 *     tags: [Logement]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du logement
 *     responses:
 *       200:
 *         description: Logement supprimé avec succès
 *       404:
 *         description: Logement non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", logementController.deleteLogement);

module.exports = router;
