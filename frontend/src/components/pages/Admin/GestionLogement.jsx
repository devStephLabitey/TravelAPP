import { useState, useEffect } from "react";
import Sidebar from "../../layout/sidebar/Sidebar";
import axios from "axios";
import "./Admin.css";
import img1 from "/src/assets/images/image7.jpg";

function GestionLogement() {
  const [formData, setFormData] = useState({
    nom_logement: "",
    type_logement: "",
    description: "",
    prix_logement: "",
    img_logement: null,
    id_destination: "",
  });

  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/destinations")
      .then((response) => setDestinations(response.data))
      .catch((error) => console.error("Erreur lors du chargement des destinations :", error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/logements")
      .then((response) => setLogements(response.data))
      .catch((error) => console.error("Erreur lors du chargement des logements :", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "prix_logement" && value < 100) {
      setFormData({ ...formData, [name]: 100 });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, img_logement: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nom_logement || !formData.type_logement || !formData.description || !formData.prix_logement || !formData.img_logement || !formData.id_destination) {
      setError("Tous les champs sont obligatoires !");
      return;
    }

    const data = new FormData();
    data.append("nom", formData.nom_logement);
    data.append("type", formData.type_logement);
    data.append("description", formData.description);
    data.append("prix", formData.prix_logement);
    data.append("image", formData.img_logement);
    data.append("destinationId", formData.id_destination);

    try {
      const response = await axios.post("http://localhost:5000/api/logements", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Logement ajouté :", response.data);
      setError("");
      setShowForm(false);
    } catch (error) {
      console.error("Erreur lors de l'ajout du logement :", error);
      setError("Erreur lors de l'ajout du logement !");
    }
  };

  return (
    <div className="Hole">
      <div className="HoleContent">
        <div className="side">
          <Sidebar />
        </div>
        <div className="HoleBody">
          <div className="pageName">Gestion Logement</div>
          <div className="Logement">
            <button className="btnFormUp" onClick={() => setShowForm(!showForm)}>
              {showForm ? "Fermer le formulaire" : "Ajouter Les Logements"}
            </button>
            {showForm && (
              <div className="LogementInputForm">
                {error && <p className="error">{error}</p>}
                <p className="text">Remplissez tous les champs</p>
                <form onSubmit={handleSubmit}>
                  <input type="text" name="nom_logement" placeholder="Nom du Logement" value={formData.nom_logement} onChange={handleChange} required />
                  <select name="type_logement" value={formData.type_logement} onChange={handleChange} required>
                    <option value="" disabled>Type de logement</option>
                    <option value="hotel">Hôtel</option>
                    <option value="villa">Villa</option>
                    <option value="appartement">Appartement</option>
                  </select>
                  <textarea name="description" placeholder="Description du logement" value={formData.description} onChange={handleChange} required></textarea>
                  <input type="number" name="prix_logement" placeholder="Prix du Logement" value={formData.prix_logement} onChange={handleChange} required min="100" step="1" />
                  <input type="file" name="img_logement" onChange={handleFileChange} required />
                  <select name="id_destination" value={formData.id_destination} onChange={handleChange} required>
                    <option value="" disabled>Choisir une destination</option>
                    {destinations.map((dest) => (
                      <option key={dest.id_destination} value={dest.id_destination}>{dest.nom_destination}</option>
                    ))}
                  </select>
                  <div className="submit">
                    <button type="submit" className="btnFormUp">Créer</button>
                  </div>
                </form>
              </div>
            )}
          </div>
          <div className="baseLogement">
            {logements.length === 0 ? (
              <p>Aucun logement enregistré.</p>
            ) : (
              logements.map((logement) => (
                <div key={logement.id_logement} className="logeContent">
                  <div className="logImg">
                    <img src={`http://localhost:5000/uploads/${logement.img_logement}`} alt={logement.nom_logement} />
                  </div>
                  <div className="logeInfo">
                    <h3>{logement.nom_logement}</h3>
                    <p><strong>Type :</strong> {logement.type_logement}</p>
                    <p><strong>Description :</strong> {logement.description}</p>
                    <p><strong>Prix :</strong> {logement.prix_logement} FCFA</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GestionLogement;
