import { Link } from "react-router-dom";
import Navbar from "../../layout/navbar/navbar";
import { useState } from "react";
import "./Auth.css"
function Login(){
    const [formData, setFormData] = useState({
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
                  Vous n'avez pas de compte ?{" "}
                  <span>
                    <Link to="/Register" className="lien">S'inscrire</Link>
                  </span>
                </p>
              </div>
            </div>
          </section>
    
          <section className="sideTwo">
            <div className="sectionTwoContent">
              <form id="formControl" onSubmit={handleSubmit}>
                <div className="title">Se Connecter</div>
    
    
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
                  <button type="submit">Se Connecter</button>
                </div>
              </form>
            </div>
          </section>
        </div>
      );
};
export default Login;