const Logement = require('../models/logement');
const multer = require("multer");
const path = require("path");

// Configuration de multer pour le téléchargement des fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

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
exports.createLogement = [upload.single("image"), async (req, res) => {
  try {
    const { nom, type, description, prix, destinationId } = req.body;
    const image = req.file ? req.file.filename : null;

    // Validation des champs requis
    if (!nom || !type || !description || !prix || !image || !destinationId) {
      return res.status(400).json({ message: "Tous les champs sont obligatoires." });
    }

    const logement = await Logement.create({
      nom,
      type,
      description,
      prix,
      image,
      destinationId,
    });

    res.status(201).json(logement);
  } catch (error) {
    console.error("Erreur lors de la création du logement :", error);
    res.status(400).json({ message: "Erreur lors de la création du logement", error: error.errors });
  }
}];

// Mettre à jour un logement existant
exports.updateLogement = [upload.single("image"), async (req, res) => {
  try {
    const logement = await Logement.findByPk(req.params.id);
    if (!logement) {
      return res.status(404).json({ message: 'Logement non trouvé' });
    }

    const { nom, type, description, prix, destinationId } = req.body;
    const image = req.file ? req.file.filename : logement.image;

    // Validation des champs requis
    if (!nom || !type || !description || !prix || !image || !destinationId) {
      return res.status(400).json({ message: "Tous les champs sont obligatoires." });
    }

    await logement.update({
      nom,
      type,
      description,
      prix,
      image,
      destinationId,
    });

    res.status(200).json(logement);
  } catch (error) {
    console.error("Erreur lors de la mise à jour du logement :", error);
    res.status(400).json({ message: "Erreur lors de la mise à jour du logement", error: error.errors });
  }
}];

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