const express = require("express");
const router = express.Router();
const destinationController = require("../controllers/destinationController");

/**
 * @swagger
 * tags:
 *   name: Destination
 *   description: Gestion des destinations
 */

/**
 * @swagger
 * /destinations:
 *   get:
 *     summary: Récupérer toutes les destinations
 *     tags: [Destination]
 *     responses:
 *       200:
 *         description: Liste de toutes les destinations
 *       500:
 *         description: Erreur serveur
 */
router.get("/", destinationController.getAllDestinations);

/**
 * @swagger
 * /destinations/{id}:
 *   get:
 *     summary: Récupérer une destination par ID
 *     tags: [Destination]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la destination
 *     responses:
 *       200:
 *         description: Détails de la destination
 *       404:
 *         description: Destination non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get("/:id", destinationController.getDestinationById);

/**
 * @swagger
 * /destinations:
 *   post:
 *     summary: Créer une nouvelle destination
 *     tags: [Destination]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               description:
 *                 type: string
 *               localisation:
 *                 type: string
 *     responses:
 *       201:
 *         description: Destination créée avec succès
 *       400:
 *         description: Erreur de validation
 *       500:
 *         description: Erreur serveur
 */
router.post("/", destinationController.createDestination);

/**
 * @swagger
 * /destinations/{id}:
 *   put:
 *     summary: Mettre à jour une destination
 *     tags: [Destination]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la destination
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               description:
 *                 type: string
 *               localisation:
 *                 type: string
 *     responses:
 *       200:
 *         description: Destination mise à jour avec succès
 *       400:
 *         description: Erreur de validation
 *       404:
 *         description: Destination non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", destinationController.updateDestination);

/**
 * @swagger
 * /destinations/{id}:
 *   delete:
 *     summary: Supprimer une destination
 *     tags: [Destination]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la destination
 *     responses:
 *       200:
 *         description: Destination supprimée avec succès
 *       404:
 *         description: Destination non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", destinationController.deleteDestination);

module.exports = router;
