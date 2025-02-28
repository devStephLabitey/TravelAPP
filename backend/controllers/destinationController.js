const Destination = require('../models/destination');

// Récupérer toutes les destinations
exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.findAll();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des destinations', error });
  }
};

// Récupérer une destination par son ID
exports.getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findByPk(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination non trouvée' });
    }
    res.status(200).json(destination);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la destination', error });
  }
};

// Créer une nouvelle destination
exports.createDestination = async (req, res) => {
  try {
    const destination = await Destination.create(req.body);
    res.status(201).json(destination);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création de la destination', error });
  }
};

// Mettre à jour une destination existante
exports.updateDestination = async (req, res) => {
  try {
    const destination = await Destination.findByPk(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination non trouvée' });
    }
    await destination.update(req.body);
    res.status(200).json(destination);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la mise à jour de la destination', error });
  }
};

// Supprimer une destination
exports.deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findByPk(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination non trouvée' });
    }
    await destination.destroy();
    res.status(204).json({ message: 'Destination supprimée' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la destination', error });
  }
};