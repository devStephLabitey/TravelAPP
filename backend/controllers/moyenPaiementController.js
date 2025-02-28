const MoyenPaiement = require('../models/moyenPaiement');

// Récupérer tous les moyens de paiement
exports.getAllMoyensPaiement = async (req, res) => {
  try {
    const moyensPaiement = await MoyenPaiement.findAll();
    res.status(200).json(moyensPaiement);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des moyens de paiement', error });
  }
};

// Récupérer un moyen de paiement par son ID
exports.getMoyenPaiementById = async (req, res) => {
  try {
    const moyenPaiement = await MoyenPaiement.findByPk(req.params.id);
    if (!moyenPaiement) {
      return res.status(404).json({ message: 'Moyen de paiement non trouvé' });
    }
    res.status(200).json(moyenPaiement);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du moyen de paiement', error });
  }
};

// Créer un nouveau moyen de paiement
exports.createMoyenPaiement = async (req, res) => {
  try {
    const moyenPaiement = await MoyenPaiement.create(req.body);
    res.status(201).json(moyenPaiement);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création du moyen de paiement', error });
  }
};

// Mettre à jour un moyen de paiement existant
exports.updateMoyenPaiement = async (req, res) => {
  try {
    const moyenPaiement = await MoyenPaiement.findByPk(req.params.id);
    if (!moyenPaiement) {
      return res.status(404).json({ message: 'Moyen de paiement non trouvé' });
    }
    await moyenPaiement.update(req.body);
    res.status(200).json(moyenPaiement);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la mise à jour du moyen de paiement', error });
  }
};

// Supprimer un moyen de paiement
exports.deleteMoyenPaiement = async (req, res) => {
  try {
    const moyenPaiement = await MoyenPaiement.findByPk(req.params.id);
    if (!moyenPaiement) {
      return res.status(404).json({ message: 'Moyen de paiement non trouvé' });
    }
    await moyenPaiement.destroy();
    res.status(204).json({ message: 'Moyen de paiement supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du moyen de paiement', error });
  }
};