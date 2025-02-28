const User = require('../models/user');

//recuperer tous les users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error });
  }
};


//recuperer user par son id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur', error });
  }
};

//creer  un nouvel user
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création de l\'utilisateur', error });
  }
};


//modifier user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    await user.update(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur', error });
  }
};

//supprimer user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    await user.destroy();
    res.status(204).json({ message: 'Utilisateur supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur', error });
  }
};