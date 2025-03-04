const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config(); 

// Fonction d'inscription (Sign Up)
exports.signup = async (req, res) => {
    try {
        const { nom_user, prenom_user, email, pass_word } = req.body;

        if (!nom_user || !prenom_user || !email || !pass_word) {
            return res.status(400).json({ message: "Tous les champs sont obligatoires." });
        }

        // Vérifier si l'email est valide
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Email invalide." });
        }

        // Vérifier si l'utilisateur existe déjà
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).json({ message: "Cet email est déjà utilisé !" });
        }

        console.log("Type de pass_word reçu:", typeof pass_word, pass_word); // DEBUG

        //  Conversion du mot de passe en string avant le hachage 
        const hashedPassword = await argon2.hash(String(pass_word));

        // Création du nouvel utilisateur
        const newUser = await User.create({
            nom_user,
            prenom_user,
            email,
            pass_word: hashedPassword 
        });

        res.status(201).json({ message: "Utilisateur créé avec succès !" });
    } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

// Fonction de connexion (Login)
exports.login = async (req, res) => {
    try {
        const { email, pass_word } = req.body;

        if (!email || !pass_word) {
            return res.status(400).json({ message: "Email et mot de passe requis." });
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé !" });
        }

        console.log("Type de pass_word reçu pour login:", typeof pass_word, pass_word); // DEBUG

        const isMatch = await argon2.verify(user.pass_word, String(pass_word));
        if (!isMatch) {
            return res.status(400).json({ message: "Mot de passe incorrect !" });
        }

        if (!process.env.JWT_SECRET) {
            console.error("Erreur: JWT_SECRET non défini dans les variables d'environnement.");
            return res.status(500).json({ message: "Erreur interne du serveur" });
        }

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
        console.error("Erreur lors de la connexion :", error);
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};
