const Logement = require('../models/logement');

// Récupérer tous les logements
exports.getAllLogements = async (req, res) => {
  try {
    const logements = await Logement.findAll();
    res.status(200).json(logements);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des logements', error });
  }
};

// Récupérer un logement par son ID
exports.getLogementById = async (req, res) => {
  try {
    const logement = await Logement.findByPk(req.params.id);
    if (!logement) {
      return res.status(404).json({ message: 'Logement non trouvé' });
    }
    res.status(200).json(logement);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du logement', error });
  }
};

// Créer un nouveau logement
exports.createLogement = async (req, res) => {
  try {
    const logement = await Logement.create(req.body);
    res.status(201).json(logement);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création du logement', error });
  }
};

// Mettre à jour un logement existant
exports.updateLogement = async (req, res) => {
  try {
    const logement = await Logement.findByPk(req.params.id);
    if (!logement) {
      return res.status(404).json({ message: 'Logement non trouvé' });
    }
    await logement.update(req.body);
    res.status(200).json(logement);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la mise à jour du logement', error });
  }
};

// Supprimer un logement
exports.deleteLogement = async (req, res) => {
  try {
    const logement = await Logement.findByPk(req.params.id);
    if (!logement) {
      return res.status(404).json({ message: 'Logement non trouvé' });
    }
    await logement.destroy();
    res.status(204).json({ message: 'Logement supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du logement', error });
  }
};