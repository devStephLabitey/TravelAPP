const Paiement = require('../models/paiement');

// Récupérer tous les paiements
exports.getAllPaiements = async (req, res) => {
  try {
    const paiements = await Paiement.findAll();
    res.status(200).json(paiements);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des paiements', error });
  }
};

// Récupérer un paiement par son ID
exports.getPaiementById = async (req, res) => {
  try {
    const paiement = await Paiement.findByPk(req.params.id);
    if (!paiement) {
      return res.status(404).json({ message: 'Paiement non trouvé' });
    }
    res.status(200).json(paiement);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du paiement', error });
  }
};

// Créer un nouveau paiement
exports.createPaiement = async (req, res) => {
  try {
    const paiement = await Paiement.create(req.body);
    res.status(201).json(paiement);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création du paiement', error });
  }
};

// Mettre à jour un paiement existant
exports.updatePaiement = async (req, res) => {
  try {
    const paiement = await Paiement.findByPk(req.params.id);
    if (!paiement) {
      return res.status(404).json({ message: 'Paiement non trouvé' });
    }
    await paiement.update(req.body);
    res.status(200).json(paiement);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la mise à jour du paiement', error });
  }
};

// Supprimer un paiement
exports.deletePaiement = async (req, res) => {
  try {
    const paiement = await Paiement.findByPk(req.params.id);
    if (!paiement) {
      return res.status(404).json({ message: 'Paiement non trouvé' });
    }
    await paiement.destroy();
    res.status(204).json({ message: 'Paiement supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du paiement', error });
  }
};