import { Link } from 'react-router-dom';
import { useState } from 'react';
import serviceImg1 from "/src/assets/images/service2.jpg";
import serviceImg2 from "/src/assets/images/service1.jpg";

import './Home.css';

function Home() {
    const [selectedLogement, setSelectedLogement] = useState(null);
    const [debut, setDebut] = useState("");
    const [fin, setFin] = useState("");
    const villes = ["Bali", "Londres", "Paris", "Miami", "Mozambique"];
    const [villeActive, setVilleActive] = useState("Bali");

    const logements = {
        "Bali": [
            { id: 1, name: "Nom_Villa", location: "Seymack, Bali", price: "100.00", img: "src/assets/images/image1.jpg" },
            { id: 2, name: "Nom_Villa", location: "Seymack, Bali", price: "100.00", img: "src/assets/images/image2.jpg" },
            { id: 3, name: "Nom_Villa", location: "Seymack, Bali", price: "100.00", img: "src/assets/images/image3.jpg" },
            { id: 8, name: "Nom_Villa", location: "Seymack, Bali", price: "100.00", img: "src/assets/images/image9.jpg" },
            { id: 9, name: "Nom_Villa", location: "Seymack, Bali", price: "100.00", img: "src/assets/images/image10.jpg" },
            { id: 10, name: "Nom_Villa", location: "Seymack, Bali", price: "100.00", img: "src/assets/images/image11.jpg" }
        ],
        "Londres": [
            { id: 4, name: "Nom_Villa", location: "Seymack, Londres", price: "120.00", img: "src/assets/images/image5.jpg" }
        ],
        "Paris": [
            { id: 5, name: "Nom_Villa", location: "Seymack, Paris", price: "150.00", img: "src/assets/images/image6.jpg" }
        ],
        "Miami": [
            { id: 6, name: "Nom_Villa", location: "Seymack, Miami", price: "200.00", img: "src/assets/images/image7.jpg" }
        ],
        "Mozambique": [
            { id: 7, name: "Nom_Villa", location: "Seymack, Mozambique", price: "90.00", img: "src/assets/images/image8.jpg" }
        ]
    };
    const openPopup = (logement) => {
        setSelectedLogement(logement);
    };

    const closePopup = () => {
        setSelectedLogement(null);
    };

    return (
        
        <div className="home-container">

                  {/* Image qui se touve à l'acceuil       */}
                <section className='headSection'></section>
                  {/* Image qui se touve à l'acceuil       */}

                {/* La bande de texte après l'image      */}
                <section className='infoBand'>
                    <div className="destination">
                        <p>Destination</p>
                        <div className='decoLine'></div>
                    </div>

                    <div className='searchPart'>
                        <div className="searchContent">
                            <div className="text">
                                OU VOULEZ-VOUS ALLER ?
                            </div>
                            <div className="searchBar">
                                <i className="fi fi-rr-search"></i>
                                <Link to="/Reservation" className='link'>Que Voulez-vous Faire ?</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* La bande de texte après l'image      */}


                {/* La partie de la tab-bar   "VIlle"   */}
                <section className="tabs-container">
                    <div className="tabs">
                        {villes.map((ville) => (
                            <button 
                                key={ville} 
                                className={`tab ${villeActive === ville ? 'active' : ''}`} 
                                onClick={() => setVilleActive(ville)}
                            >
                                {ville}
                            </button>
                        ))}
                    </div>

                </section>
                <div className="ligne">
                 <hr />
                </div>
                

                {/* La partie de la tab-bar   "Infrmations"   */}   
                <section className="logements-container">
                    {logements[villeActive]?.map((logement) => (
                        <div key={logement.id} className="logement-card">
                            <img src={logement.img} alt={logement.name} className="logement-img" />
                         
                          <div className='Log_infos'>
                                <div className="log">
                                   <h3>{logement.name}</h3>
                                   <p>{logement.location}</p>
                                </div>

                                <div className="price_btn">
                                   <p className="price">{logement.price} $</p>
                                  <button className="reserve-button" onClick={() => openPopup(logement)}><span><i className="fi fi-rr-key"></i></span> Réserver</button>
                                </div>
                          </div>
                          
                           
                        </div>
                    ))}
                </section>

                {selectedLogement && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="close-btn" onClick={closePopup}>&times;</div>
                       <div className="info">
                       <img src={selectedLogement.img} alt={selectedLogement.name} className="popup-img" />
                        <h3>{selectedLogement.name}</h3>
                        <p>{selectedLogement.location}</p>
                        <p>Prix : {selectedLogement.price} $</p>
                       </div>
                       <form action="">
                       <label>Début : </label>
                        <input type="date" value={debut} onChange={(e) => setDebut(e.target.value)} />
                        <label>Fin : </label>
                        <input type="date" value={fin} onChange={(e) => setFin(e.target.value)} />
                       <div className="reservBtn">
                        <button type='submit'> <span className='fi fi-rr-key'></span>Réserver</button>
                       </div>
                       </form>
                        
                        <div className="carLink">
                            <p className="total"><strong>Total :</strong> {selectedLogement.price * (debut && fin ? 1 : 0)} $</p>
                            <div><Link to="/VoituresDisponibles" className="car-button"><span><i className='fi fi-rr-car'></i></span> Voiture disponible</Link></div>
                        </div>
                    </div>
                </div>
            )}

                <section className='Navbuttons'>
                    <div className="navigateContent">
                        <i className="fi fi-rr-angle-left"></i>
                        <div className="numberNav active">1</div>
                        <div className="numberNav n-active">2</div>
                        <div className="numberNav n-active">3</div>
                        <i className="fi fi-rr-angle-right"></i>
                    </div>
                </section>

                <div className="infoBand">
                    <div className="destination">
                        <p>Services</p>
                        <div className='decoLine'></div>
                    </div>

                    <div className="motivText">
                        <p>Faites place à l'aventure. Voyagez sans limites, Explorez sans frontière votre aventure commence ici !</p>
                    </div>

                   <div className="serviceSection">
                   <div className="services">
                      <img src={serviceImg1} alt="" className='imgSer1'/>
                      <div className="serviceLinks">
                        <Link to="/Reservation" className='Reserv'>REFERENCEMENT DE LIEUX TOURISTIQUES</Link>
                        <Link to="/Reservation" className='Reserv'>LOCATION D'APPARTEMENT</Link>
                      </div>
                      <img src={serviceImg2} alt="" className='imgSer2'/>
                    </div>
                   </div>
                    <br />
                    <br />
                   <hr />
                   <br />
                    <br />
                </div>

        </div>
    );
}

export default Home;


{/*  */}


