import { useEffect, useRef, useState } from 'react';
import './Reservation.css';

function Reservation() {
    const inputRef = useRef(null);
    const [villeActive, setVilleActive] = useState("Bali");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, []);

    const villes = ["Bali", "Londres", "Paris", "Miami", "Mozambique"];

    const logements = {
        "Bali": [
            { id: 1, name: "Villa Bali", location: "Seymack, Bali", price: "100.00", img: "/assets/images/image1.jpg" },
            { id: 2, name: "Villa Luxe", location: "Seymack, Bali", price: "120.00", img: "/assets/images/image2.jpg" },
            { id: 3, name: "Appartement Zen", location: "Seymack, Bali", price: "80.00", img: "/assets/images/image3.jpg" }
        ],
        "Londres": [
            { id: 4, name: "London View", location: "Seymack, Londres", price: "150.00", img: "/assets/images/image5.jpg" }
        ],
        "Paris": [
            { id: 5, name: "Paris Chic", location: "Seymack, Paris", price: "200.00", img: "/assets/images/image6.jpg" }
        ],
        "Miami": [
            { id: 6, name: "Miami Sunset", location: "Seymack, Miami", price: "250.00", img: "/assets/images/image7.jpg" }
        ],
        "Mozambique": [
            { id: 7, name: "Mozambique Beach", location: "Seymack, Mozambique", price: "90.00", img: "/assets/images/image8.jpg" }
        ]
    };

    // Convertir tous les logements en une seule liste
    const tousLesLogements = Object.values(logements).flat();

    // Appliquer les filtres
    const logementsFiltres = searchTerm
        ? tousLesLogements.filter(logement =>
            logement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            logement.location.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : logements[villeActive];

    return (
        <div>
            {/* Barre de recherche */}
            <section className='searchReservationPart'>
                <form className="searchBar">
                    <div className="searchComponent">
                        <button type='submit'>
                            <i className='fi fi-rr-search'></i>
                        </button>
                        <input 
                            type="text" 
                            ref={inputRef} 
                            placeholder='Recherchez un logement ou une ville...' 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </form>
            </section>

            {/* Boutons des villes (désactivés si recherche active) */}
            <section className="tabs-container">
                {villes.map(ville => (
                    <button 
                       
                        key={ville} 
                        className={`tab ${villeActive === ville ? 'active' : ''}`} 
                        onClick={() => { 
                            setVilleActive(ville);
                            setSearchTerm(""); // Réinitialise la recherche quand on change de ville
                        }}
                        disabled={searchTerm.length > 0} // Désactive les boutons pendant la recherche
                    >
                        {ville}
                    </button>
                ))}
            </section>

            {/* Liste des logements filtrés */}
            <section className="logements-container">
                {logementsFiltres.length > 0 ? (
                    logementsFiltres.map((logement) => (
                        <div key={logement.id} className="logement-card">
                            <img src={logement.img} alt={logement.name} className="logement-img" />
                            <div className='Log_infos'>
                                <div className="log">
                                    <h3>{logement.name}</h3>
                                    <p>{logement.location}</p>
                                </div>
                                <div className="price_btn">
                                    <p className="price">{logement.price} $</p>
                                    <button className="reserve-button">
                                        <span><i className="fi fi-rr-key"></i></span> Réserver
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results">Aucun logement trouvé.</p>
                )}
            </section>
        </div>
    );
}

export default Reservation;
