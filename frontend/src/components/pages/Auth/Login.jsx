import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", pass_word: "" });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.email.trim()) {
      validationErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Veuillez entrer un email valide";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post("http://localhost:5001/api/auths/login", {
        email: formData.email,
        pass_word: formData.pass_word,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/admin/dashboard"); // Redirection vers le tableau de bord
      } else {
        setApiError("Problème de connexion. Veuillez réessayer.");
      }
    } catch (error) {
      setApiError(error.response?.data?.message || "Échec de la connexion. Vérifiez vos identifiants.");
    }
  };

  return (
    <div className="Register">
      <section className="sideOne">
        <div className="sideOneContent">
          <h1 className="titre">
            Explorez les plus <br />
            beaux endroits du <br />
            monde
          </h1>
          <p className="sous_titre">
            Réservez vos endroits préférés <br />
            partout dans le monde et <br />
            commencez à explorer
          </p>
          <div className="links">
            <p>
              Vous n'avez pas de compte ?{" "}
              <span>
                <Link to="/register" className="lien">
                  S'inscrire
                </Link>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="sideTwo">
        <div className="sectionTwoContent">
          <form id="formControl" onSubmit={handleSubmit}>
            <h2 className="title">Se Connecter</h2>

            {apiError && <p className="error">{apiError}</p>}

            <div className="inputDiv">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
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
                autoComplete="off"
              />
            </div>

            <div className="submitBtn">
              <button type="submit">Se Connecter</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;