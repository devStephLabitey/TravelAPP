const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Fonction d'inscription (Sign Up)
exports.signup = async (req, res) => {
    try {
        const { nom_user, prenom_user, email, pass_word } = req.body;

        // Vérifier si l'utilisateur existe déjà
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).json({ message: "Cet email est déjà utilisé !" });
        }

        // Créer un nouvel utilisateur
        const newUser = await User.create({
            nom_user,
            prenom_user,
            email,
            pass_word 
        });

        res.status(201).json({ message: "Utilisateur créé avec succès !" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

// Fonction de connexion (Login)
exports.login = async (req, res) => {
    try {
        const { email, pass_word } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé !" });
        }

        const isMatch = await argon2.verify(user.pass_word, pass_word);
        if (!isMatch) {
            return res.status(400).json({ message: "Mot de passe incorrect !" });
        }

        // Générer le token JWT
        const token = jwt.sign(
            { id: user.id_user, email: user.email, type_user: user.type_user },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        res.status(200).json({
            message: "Connexion réussie",
            token,
            user: {
                id_user: user.id_user,
                nom_user: user.nom_user,
                prenom_user: user.prenom_user,
                email: user.email,
                type_user: user.type_user
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur", error });
    }
};
