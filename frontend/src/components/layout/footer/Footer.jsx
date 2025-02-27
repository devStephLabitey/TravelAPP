import {Link} from 'react-router-dom';
import FaceBook from '/src/assets/images/facebook.png';
import Linkedin from '/src/assets/images/linkedin.png';
import Instagram from '/src/assets/images/instagram.png';
import './Footer.css'
function Footer(){
    return(
        <div className='footer'>
            <div className="iconLinks">
                <Link to=""><img src={FaceBook} alt=""  /></Link>
                <Link to=""><img src={Linkedin} alt=""  /></Link>
                <Link to=""><img src={Instagram} alt=""  /></Link>
            </div>

            <div className="terms">
                <p>&copy; 2025 TRAVEL APP. Tous Droits Réservés</p>
                <p>Termes et Conditions</p>
            </div>
        </div>
    );
};
export default Footer;