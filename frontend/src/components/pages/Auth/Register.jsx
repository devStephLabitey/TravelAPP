import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../layout/navbar/navbar";
import "./Auth.css";

function Register() {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Fonction pour mettre à jour les valeurs du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Vérification des champs avant soumission
  const validateForm = () => {
    let errors = {};
    if (!formData.lastname.trim()) errors.lastname = "Le nom est requis";
    if (!formData.firstname.trim()) errors.firstname = "Le prénom est requis";
    if (!formData.email.trim()) {
      errors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "L'email n'est pas valide";
    }
    if (!formData.password.trim()) {
      errors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 6) {
      errors.password = "Le mot de passe doit contenir au moins 6 caractères";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulaire valide :", formData);
      // Tu peux envoyer les données ici (ex: API)
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

            <div className="dual">
              <div>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Nom"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                {errors.lastname && <p className="error">{errors.lastname}</p>}
              </div>

              <div >
                <input
                  type="text"
                  name="firstname"
                  placeholder="Prénom(s)"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                {errors.firstname && <p className="error">{errors.firstname}</p>}
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
                name="password"
                placeholder="Mot de passe"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
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
