const { CompteUtilisateur } = require('../models/compteUtilisateur');  // Assurez-vous que votre modèle est bien importé

// Créer un compte utilisateur
exports.createCompteUtilisateur = async (req, res) => {
  try {
    const { id_user, solde } = req.body;
    
    const compte = await CompteUtilisateur.create({
      id_user,
      solde,  
    });

    return res.status(201).json(compte);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la création du compte utilisateur' });
  }
};

// Récupérer un compte utilisateur par ID
exports.getCompteUtilisateur = async (req, res) => {
  try {
    const compte = await CompteUtilisateur.findOne({
      where: { id_compte: req.params.id },
    });

    if (!compte) {
      return res.status(404).json({ message: 'Compte utilisateur non trouvé' });
    }

    return res.status(200).json(compte);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la récupération du compte utilisateur' });
  }
};

// Mettre à jour un compte utilisateur
exports.updateCompteUtilisateur = async (req, res) => {
  try {
    const { id_user, solde } = req.body;
    
    const compte = await CompteUtilisateur.findOne({
      where: { id_compte: req.params.id },
    });

    if (!compte) {
      return res.status(404).json({ message: 'Compte utilisateur non trouvé' });
    }

    compte.id_user = id_user || compte.id_user;
    compte.solde = solde || compte.solde;

    await compte.save();
    return res.status(200).json(compte);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la mise à jour du compte utilisateur' });
  }
};

// Supprimer un compte utilisateur
exports.deleteCompteUtilisateur = async (req, res) => {
  try {
    const compte = await CompteUtilisateur.findOne({
      where: { id_compte: req.params.id },
    });

    if (!compte) {
      return res.status(404).json({ message: 'Compte utilisateur non trouvé' });
    }

    await compte.destroy();
    return res.status(200).json({ message: 'Compte utilisateur supprimé avec succès' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la suppression du compte utilisateur' });
  }
};
