import { Link, useLocation } from "react-router-dom";
import Logo from "/src/assets/images/logoOrange.png";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation(); // Permet de récupérer l'URL actuelle

  return (
    <div className="SideBar">
      <div className="sideContent">
        <div className="Links">
          <li>
            <Link to="/" className="liens">
              <img src={Logo} alt="Logo" />
            </Link>
          </li>

          <li>
            <Link
              to="/admin/dashboard"
              className={`liens ${location.pathname === "/admin/dashboard" ? "active" : ""}`}
            >
              DashBoard
            </Link>
          </li>

          <li>
            <Link
              to="/admin/GestionLogement"
              className={`liens ${location.pathname === "/admin/GestionLogement" ? "active" : ""}`}
            >
              Gestion Logement
            </Link>
          </li>

          <li>
            <Link
              to="/admin/reservations"
              className={`liens ${location.pathname === "/admin/reservations" ? "active" : ""}`}
            >
              Gestion Réservation
            </Link>
          </li>

          <li>
            <Link
              to="/admin/GestionUser"
              className={`liens ${location.pathname === "/admin/GestionUser" ? "active" : ""}`}
            >
              Utilisateurs
            </Link>
          </li>

          <li>
            <Link
              to="/admin/vehicules"
              className={`liens ${location.pathname === "/admin/vehicules" ? "active" : ""}`}
            >
              Gestion Véhicule
            </Link>
          </li>

          <li>
            <Link
              to="/admin/GestionDestination"
              className={`liens ${location.pathname === "/admin/GestionDestination" ? "active" : ""}`}
            >
              Gestion Destination
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
