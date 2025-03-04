const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: Gestion des transactions financières
 */

/**
 * @swagger
 * api/transactions:
 *   get:
 *     summary: Récupérer toutes les transactions
 *     tags: [Transactions]
 *     responses:
 *       200:
 *         description: Liste de toutes les transactions
 *       500:
 *         description: Erreur serveur
 */
router.get('/', transactionController.getAllTransactions);

/**
 * @swagger
 * api/transactions/{id}:
 *   get:
 *     summary: Récupérer une transaction par ID
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la transaction
 *     responses:
 *       200:
 *         description: Détails de la transaction
 *       404:
 *         description: Transaction non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get("/:id", transactionController.getTransactionById);

/**
 * @swagger
 *api /transactions:
 *   post:
 *     summary: Créer une nouvelle transaction
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               montant:
 *                 type: number
 *               utilisateurId:
 *                 type: string
 *               moyenPaiementId:
 *                 type: string
 *               statut:
 *                 type: string
 *     responses:
 *       201:
 *         description: Transaction créée avec succès
 *       400:
 *         description: Erreur de validation
 *       500:
 *         description: Erreur serveur
 */
router.post("/", transactionController.createTransaction);

/**
 * @swagger
 * api/transactions/{id}:
 *   put:
 *     summary: Mettre à jour une transaction
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la transaction
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               statut:
 *                 type: string
 *     responses:
 *       200:
 *         description: Transaction mise à jour avec succès
 *       400:
 *         description: Erreur de validation
 *       404:
 *         description: Transaction non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", transactionController.updateTransaction);

/**
 * @swagger
 * api/transactions/{id}:
 *   delete:
 *     summary: Supprimer une transaction
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la transaction
 *     responses:
 *       200:
 *         description: Transaction supprimée avec succès
 *       404:
 *         description: Transaction non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", transactionController.deleteTransaction);

module.exports = router;
