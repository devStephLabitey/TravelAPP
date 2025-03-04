const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

/**
 * @swagger
 * tags:
 *   name: Réservation
 *   description: Gestion des réservations
 */

/**
 * @swagger
 * /reservations:
 *   get:
 *     summary: Récupérer toutes les réservations
 *     tags: [Réservation]
 *     responses:
 *       200:
 *         description: Liste de toutes les réservations
 *       500:
 *         description: Erreur serveur
 */
router.get('/', reservationController.getAllReservations);

/**
 * @swagger
 * /reservations/{id}:
 *   get:
 *     summary: Récupérer une réservation par ID
 *     tags: [Réservation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la réservation
 *     responses:
 *       200:
 *         description: Détails de la réservation
 *       404:
 *         description: Réservation non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get("/:id", reservationController.getReservationById);

/**
 * @swagger
 * /reservations:
 *   post:
 *     summary: Créer une nouvelle réservation
 *     tags: [Réservation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               utilisateurId:
 *                 type: string
 *               logementId:
 *                 type: string
 *               dateDebut:
 *                 type: string
 *                 format: date
 *               dateFin:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Réservation créée avec succès
 *       400:
 *         description: Erreur de validation
 *       500:
 *         description: Erreur serveur
 */
router.post("/", reservationController.createReservation);

/**
 * @swagger
 * /reservations/{id}:
 *   put:
 *     summary: Mettre à jour une réservation
 *     tags: [Réservation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la réservation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dateDebut:
 *                 type: string
 *                 format: date
 *               dateFin:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Réservation mise à jour avec succès
 *       400:
 *         description: Erreur de validation
 *       404:
 *         description: Réservation non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", reservationController.updateReservation);

/**
 * @swagger
 * /reservations/{id}:
 *   delete:
 *     summary: Supprimer une réservation
 *     tags: [Réservation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la réservation
 *     responses:
 *       200:
 *         description: Réservation supprimée avec succès
 *       404:
 *         description: Réservation non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", reservationController.deleteReservation);

module.exports = router;
