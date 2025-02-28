const Reservation = require('../models/reservations');

// Récupérer toutes les réservations
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.findAll();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des réservations', error });
  }
};

// Récupérer une réservation par son ID
exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation non trouvée' });
    }
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la réservation', error });
  }
};

// Créer une nouvelle réservation
exports.createReservation = async (req, res) => {
  try {
    const reservation = await Reservation.create(req.body);
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création de la réservation', error });
  }
};

// Mettre à jour une réservation existante
exports.updateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation non trouvée' });
    }
    await reservation.update(req.body);
    res.status(200).json(reservation);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la mise à jour de la réservation', error });
  }
};

// Supprimer une réservation
exports.deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation non trouvée' });
    }
    await reservation.destroy();
    res.status(204).json({ message: 'Réservation supprimée' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la réservation', error });
  }
};