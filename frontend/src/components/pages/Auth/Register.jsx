import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom_user: "",
    prenom_user: "",
    email: "",
    pass_word: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.nom_user.trim()) errors.nom_user = "Le nom est requis";
    if (!formData.prenom_user.trim()) errors.prenom_user = "Le prénom est requis";
    if (!formData.email.trim()) {
      errors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "L'email n'est pas valide";
    }
    if (!formData.pass_word.trim()) {
      errors.pass_word = "Le mot de passe est requis";
    } else if (formData.pass_word.length < 6) {
      errors.pass_word = "Le mot de passe doit contenir au moins 6 caractères";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post("http://localhost:5001/api/auths/signup", formData);
      console.log("Inscription réussie :", response.data);

      // Redirection vers la page de connexion après l'inscription
      navigate("/login");
    } catch (error) {
      console.error("Erreur API :", error);
      setApiError(error.response?.data?.message || "Échec de l'inscription");
    }
  };

  return (
    <div className="Register">
      <section className="sideOne">
        <div className="sideOneContent">
          <div className="titre">
            Explorez les plus <br />
            beaux endroits du <br />
            monde
          </div>

          <div className="sous_titre">
            Réservez vos endroits préférés <br />
            partout dans le monde et <br />
            commencez à explorer
          </div>

          <div className="links">
            <p>
              Avez-vous déjà un compte ?{" "}
              <span>
                <Link to="/Login" className="lien">Se connecter</Link>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="sideTwo">
        <div className="sectionTwoContent">
          <form id="formControl" onSubmit={handleSubmit}>
            <div className="title">Créer un Compte</div>

            {apiError && <p className="error">{apiError}</p>}

            <div className="dual">
              <div>
                <input
                  type="text"
                  name="nom_user"
                  placeholder="Nom"
                  value={formData.nom_user}
                  onChange={handleChange}
                />
                {errors.nom_user && <p className="error">{errors.nom_user}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="prenom_user"
                  placeholder="Prénom(s)"
                  value={formData.prenom_user}
                  onChange={handleChange}
                />
                {errors.prenom_user && <p className="error">{errors.prenom_user}</p>}
              </div>
            </div>

            <div className="inputDiv">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="inputDiv">
              <input
                type="password"
                name="pass_word"
                placeholder="Mot de passe"
                value={formData.pass_word}
                onChange={handleChange}
              />
              {errors.pass_word && <p className="error">{errors.pass_word}</p>}
            </div>

            <div className="submitBtn">
              <button type="submit">Créer un compte</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Register;
