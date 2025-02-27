import  './Navbar.css';
import { Link } from 'react-router-dom';
import logoOrange from '/src/assets/images/logoOrange.png';
import React from 'react';
function Navbar(){
    return(
        <div>
            <div className="navBar">
                <div className="navContent">
                    <Link to="/" className="logo">
                        <img src={logoOrange} alt="" />
                    </Link>
                    <ul className="">
                        <li><Link to="/" className='link'>Acceuil</Link></li>
                        <li><a>Services</a></li>
                        <li><a>Destinations</a></li>
                        <li><a>Contact</a></li>
                        <li><Link to="/Reservation" className='link'>Réservation</Link></li>
                    </ul>
                    <div className="auth">
                        <Link to="/Login" className="loginBtn">
                            Connexion
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;