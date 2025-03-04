const express = require("express");
const router = express.Router();
const vehiculeController = require("../controllers/vehiculeController");

/**
 * @swagger
 * tags:
 *   name: Véhicules
 *   description: Gestion des véhicules
 */

/**
 * @swagger
 * /vehicules:
 *   get:
 *     summary: Récupérer tous les véhicules
 *     tags: [Véhicules]
 *     responses:
 *       200:
 *         description: Liste de tous les véhicules
 *       500:
 *         description: Erreur serveur
 */
router.get('/', vehiculeController.getAllVehicules);

/**
 * @swagger
 * /vehicules/{id}:
 *   get:
 *     summary: Récupérer un véhicule par ID
 *     tags: [Véhicules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du véhicule
 *     responses:
 *       200:
 *         description: Détails du véhicule
 *       404:
 *         description: Véhicule non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get("/:id", vehiculeController.getVehiculeById);

/**
 * @swagger
 * /vehicules:
 *   post:
 *     summary: Ajouter un nouveau véhicule
 *     tags: [Véhicules]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               marque:
 *                 type: string
 *               modele:
 *                 type: string
 *               annee:
 *                 type: integer
 *               prix:
 *                 type: number
 *     responses:
 *       201:
 *         description: Véhicule ajouté avec succès
 *       400:
 *         description: Erreur de validation
 *       500:
 *         description: Erreur serveur
 */
router.post("/", vehiculeController.createVehicule);

/**
 * @swagger
 * /vehicules/{id}:
 *   put:
 *     summary: Mettre à jour un véhicule
 *     tags: [Véhicules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du véhicule
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               marque:
 *                 type: string
 *               modele:
 *                 type: string
 *               annee:
 *                 type: integer
 *               prix:
 *                 type: number
 *     responses:
 *       200:
 *         description: Véhicule mis à jour avec succès
 *       400:
 *         description: Erreur de validation
 *       404:
 *         description: Véhicule non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", vehiculeController.updateVehicule);

/**
 * @swagger
 * /vehicules/{id}:
 *   delete:
 *     summary: Supprimer un véhicule
 *     tags: [Véhicules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du véhicule
 *     responses:
 *       200:
 *         description: Véhicule supprimé avec succès
 *       404:
 *         description: Véhicule non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", vehiculeController.deleteVehicule);

module.exports = router;
