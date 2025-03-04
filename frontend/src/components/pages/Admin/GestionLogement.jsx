import { useState, useEffect } from "react";
import Sidebar from "../../layout/sidebar/Sidebar";
import axios from "axios";
import "./Admin.css";

function GestionLogement() {
  const [formData, setFormData] = useState({
    nom_logement: "",
    type_logement: "",
    description: "",
    prix_logement: "",
    img_logement: "",
    id_destination: "",
  });

  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [logements, setLogements] = useState([]);
  const [errors, setErrors] = useState({});

  // Charger les destinations au montage du composant
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/destinations")
      .then((response) => setDestinations(response.data))
      .catch((error) => console.error("Erreur lors du chargement des destinations :", error));
  }, []);

  // Charger les logements au montage du composant
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/logements")
      .then((response) => setLogements(response.data))
      .catch((error) => console.error("Erreur lors du chargement des logements :", error));
  }, []);

  // Gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "prix_logement" && value < 100) {
      setFormData({ ...formData, [name]: 100 }); // Forcer un prix minimum de 100
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Gérer le changement de fichier (image)
  const handleFileChange = (e) => {
    setFormData({ ...formData, img_logement: e.target.files[0] });
  };

  // Valider le formulaire avant soumission
  const validateForm = () => {
    let validationErrors = {};

    if (!formData.nom_logement.trim()) {
      validationErrors.nom_logement = "Le nom du logement est requis";
    }
    if (!formData.type_logement.trim()) {
      validationErrors.type_logement = "Le type de logement est requis";
    }
    if (!formData.description.trim()) {
      validationErrors.description = "La description du logement est requise";
    }
    if (!formData.prix_logement || isNaN(formData.prix_logement)) {
      validationErrors.prix_logement = "Le prix doit être un nombre valide";
    }
    if (!formData.img_logement) {
      validationErrors.img_logement = "L'image du logement est requise";
    }
    if (!formData.id_destination) {
      validationErrors.id_destination = "La destination est requise";
    }

    setErrors(validationErrors); // Mettre à jour les erreurs
    return Object.keys(validationErrors).length === 0; // Retourne true si aucune erreur
  };

  // Soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Valider le formulaire avant de soumettre
    if (!validateForm()) {
      console.error("Erreurs de validation :", errors);
      return; // Arrêter si la validation échoue
    }

    // Créer un objet FormData pour envoyer les données
    const data = new FormData();
    data.append("nom", formData.nom_logement);
    data.append("type", formData.type_logement);
    data.append("description", formData.description);
    data.append("prix", formData.prix_logement);
    data.append("image", formData.img_logement);
    data.append("destinationId", formData.id_destination);

    try {
      // Envoyer la requête POST au serveur
      const response = await axios.post(
        "http://localhost:5001/api/logements",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Logement ajouté avec succès :", response.data);
      setError("");
      setShowForm(false);
      // Recharger les logements après l'ajout
      const updatedLogements = await axios.get("http://localhost:5001/api/logements");
      setLogements(updatedLogements.data);
    } catch (error) {
      console.error("Erreur lors de l'ajout du logement :", error);
      if (error.response) {
        console.error("Réponse du serveur :", error.response.data);
        setError(error.response.data.message || "Erreur lors de l'ajout du logement !");
      }
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
                  <input
                    type="text"
                    name="nom_logement"
                    placeholder="Nom du Logement"
                    value={formData.nom_logement}
                    onChange={handleChange}
                    required
                  />
                  {errors.nom_logement && <p className="error">{errors.nom_logement}</p>}

                  <select
                    name="type_logement"
                    value={formData.type_logement}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Type de logement</option>
                    <option value="hotel">Hôtel</option>
                    <option value="villa">Villa</option>
                    <option value="appartement">Appartement</option>
                  </select>
                  {errors.type_logement && <p className="error">{errors.type_logement}</p>}

                  <textarea
                    name="description"
                    placeholder="Description du logement"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {errors.description && <p className="error">{errors.description}</p>}

                  <input
                    type="number"
                    name="prix_logement"
                    placeholder="Prix du Logement"
                    value={formData.prix_logement}
                    onChange={handleChange}
                    required
                    min="100"
                    step="1"
                  />
                  {errors.prix_logement && <p className="error">{errors.prix_logement}</p>}

                  <input
                    type="file"
                    name="img_logement"
                    onChange={handleFileChange}
                    required
                  />
                  {errors.img_logement && <p className="error">{errors.img_logement}</p>}

                  <select
                    name="id_destination"
                    value={formData.id_destination}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Choisir une destination</option>
                    {destinations.map((dest) => (
                      <option key={dest.id_destination} value={dest.id_destination}>
                        {dest.nom_destination}
                      </option>
                    ))}
                  </select>
                  {errors.id_destination && <p className="error">{errors.id_destination}</p>}

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
                    <img
                      src={`http://localhost:5001/uploads/${logement.img_logement}`} // URL de l'image stockée dans le dossier uploads
                      alt={logement.nom_logement}
                    />
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