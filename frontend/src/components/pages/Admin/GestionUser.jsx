import { useEffect, useState } from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
import Sidebar from "../../layout/sidebar/Sidebar";
import axios from "axios";

function GestionUser() {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get("http://localhost:5001/api/users")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des utilisateurs :", error);
            });
    };

    // Ouvrir le modal avec l'utilisateur sélectionné
    const openModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    // Fermer le modal
    const closeModal = () => {
        setShowModal(false);
        setSelectedUser(null);
    };

    // Supprimer l'utilisateur après confirmation
    const handleDelete = () => {
        if (selectedUser) {
            axios.delete(`http://localhost:5001/api/users/${selectedUser.id_user}`)
                .then(() => {
                    setUsers(users.filter(user => user.id_user !== selectedUser.id_user));
                    closeModal();
                })
                .catch(error => {
                    console.error("Erreur lors de la suppression :", error);
                });
        }
    };

    return (
       <div className="Hole"> 
           <div className="HoleContent">
                <div className="side">
                    <Sidebar />
                </div>
                <div className="HoleBody">
                    <div className="pageName">Gestion Utilisateurs</div>

                    <div className="userInfo">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Email</th>
                                    <th>Type</th>
                                    <th>Date de création</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id_user}>
                                        <td>{user.id_user}</td>
                                        <td>{user.nom_user}</td>
                                        <td>{user.prenom_user}</td>
                                        <td>{user.email}</td>
                                        <td>{user.type_user}</td>
                                        <td>{new Date(user.date_creation).toLocaleDateString()}</td>
                                        <td>
                                            <button className="delete-btn" onClick={() => openModal(user)}><i className="fi fi-rr-close">x</i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Modal de confirmation */}
                    {showModal && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <h3>Confirmer la suppression</h3>
                                <p>Voulez-vous vraiment supprimer <strong>{selectedUser.nom_user} {selectedUser.prenom_user}</strong> ?</p>
                                <div className="modal-buttons">
                                    <button className="confirm-btn" onClick={handleDelete}>Oui, Supprimer</button>
                                    <button className="cancel-btn" onClick={closeModal}>Annuler</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
           </div>
       </div>
    );
}

export default GestionUser;
