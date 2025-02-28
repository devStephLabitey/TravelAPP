const Vehicule = require('../models/vehicule');

// Récupérer tous les véhicules
exports.getAllVehicules = async (req, res) => {
  try {
    const vehicules = await Vehicule.findAll({});
    res.status(200).json(vehicules);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des véhicules', error });
  }
};

// Récupérer un véhicule par son ID
exports.getVehiculeById = async (req, res) => {
  try {
    const vehicule = await Vehicule.findByPk(req.params.id);
    if (!vehicule) {
      return res.status(404).json({ message: 'Véhicule non trouvé' });
    }
    res.status(200).json(vehicule);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du véhicule', error });
  }
};

// Créer un nouveau véhicule
exports.createVehicule = async (req, res) => {
  try {
    const vehicule = await Vehicule.create(req.body);
    res.status(201).json(vehicule);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création du véhicule', error });
  }
};

// Mettre à jour un véhicule existant
exports.updateVehicule = async (req, res) => {
  try {
    const vehicule = await Vehicule.findByPk(req.params.id);
    if (!vehicule) {
      return res.status(404).json({ message: 'Véhicule non trouvé' });
    }
    await vehicule.update(req.body);
    res.status(200).json(vehicule);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la mise à jour du véhicule', error });
  }
};

// Supprimer un véhicule
exports.deleteVehicule = async (req, res) => {
  try {
    const vehicule = await Vehicule.findByPk(req.params.id);
    if (!vehicule) {
      return res.status(404).json({ message: 'Véhicule non trouvé' });
    }
    await vehicule.destroy();
    res.status(204).json({ message: 'Véhicule supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du véhicule', error });
  }
};