const Transaction = require('../models/transaction');

// Récupérer toutes les transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des transactions', error });
  }
};

// Récupérer une transaction par son ID
exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction non trouvée' });
    }
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la transaction', error });
  }
};

// Créer une nouvelle transaction
exports.createTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création de la transaction', error });
  }
};

// Mettre à jour une transaction existante
exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction non trouvée' });
    }
    await transaction.update(req.body);
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la mise à jour de la transaction', error });
  }
};

// Supprimer une transaction
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction non trouvée' });
    }
    await transaction.destroy();
    res.status(204).json({ message: 'Transaction supprimée' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la transaction', error });
  }
};