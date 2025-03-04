import { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";
import Sidebar from "../../layout/sidebar/Sidebar";

function GestionDestination() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nom_destination: "",
    pays: "",
    description_destination: "",
  });
  const [error, setError] = useState("");
  const [destinations, setDestinations] = useState([]);

  // Charger les destinations existantes depuis l'API
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/destinations")
      .then((response) => setDestinations(response.data))
      .catch((error) => console.error("Erreur lors du chargement des destinations :", error));
  }, []);

  // Gestion du changement des champs du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nom_destination || !formData.pays || !formData.description_destination) {
      setError("Tous les champs sont obligatoires !");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/destinations", formData);
      console.log("Destination ajoutée :", response.data);

      setDestinations([...destinations, response.data]); // Ajouter à la liste
      setFormData({ nom_destination: "", pays: "", description_destination: "" }); // Réinitialiser le formulaire
      setError(""); // Réinitialiser les erreurs
      setShowForm(false); // Fermer le formulaire après soumission
    } catch (error) {
      console.error("Erreur lors de l'ajout de la destination :", error);
      setError("Erreur lors de l'ajout de la destination !");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/destinations")
      .then((response) => {
        console.log("Données API :", response.data);
        setDestinations(response.data);
      })
      .catch((error) => console.error("Erreur lors du chargement des destinations :", error));
  }, []);

  // Regrouper les destinations par pays
  const groupedDestinations = destinations.reduce((acc, dest) => {
    if (!acc[dest.pays]) {
      acc[dest.pays] = [];
    }
    acc[dest.pays].push(dest);
    return acc;
  }, {});

  return (
    <div className="Hole">
      <div className="HoleContent">
        <div className="side">
          <Sidebar />
        </div>
        <div className="HoleBody">
          <div className="pageName">Gestion Destination</div>

          <div className="Logement">
            <button className="btnFormUp" onClick={() => setShowForm(!showForm)}>
              {showForm ? "Fermer le formulaire" : "Ajouter une destination"}
            </button>

            {showForm && (
              <div className="LogementInputForm">
                {error && <p className="error">{error}</p>}
                <p className="text">Remplissez tous les champs</p>
                <form onSubmit={handleSubmit}>
                  <input type="text" name="nom_destination" placeholder="Nom de la destination" value={formData.nomDestination} onChange={handleChange} required />
                  <select name="pays" value={formData.pays} onChange={handleChange} required>
                    <option value="" disabled>Pays de destination</option>
                    <option value="Togo">Togo</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Brésil">Brésil</option>
                    <option value="Egypte">Egypte</option>
                    <option value="Sydney">Sydney</option>
                  </select>
                  <textarea name="description_destination" placeholder="Description de la destination" value={formData.description} onChange={handleChange} required></textarea>
                  <div className="submit">
                    <button type="submit" className="btnFormUp">Créer</button>
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="baseLogement">
            {Object.keys(groupedDestinations).length === 0 ? (
              <p>Aucune destination enregistrée.</p>
            ) : (
              Object.keys(groupedDestinations).map((pays) => (
                <div key={pays} className="paysSection">
                  <h2>{pays}</h2>
                  {groupedDestinations[pays].map((dest) => (
                    <div key={dest.id} className="logeContent">
                      <div className="logeInfo">
                        <h3>{dest.nom_destination}</h3>
                        <p>{dest.description_destination}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GestionDestination;
