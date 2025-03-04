import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Navbar from "./components/layout/navbar/navbar";
import Footer from "./components/layout/footer/Footer";
import Reservation from "./components/pages/Reservations/Reservation";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import VoituresDisponibles from "./components/pages/voiture/VoituresDisponibles";
import DashBoard from "./components/pages/Admin/DashBoard";
import GestionLogement from "./components/pages/Admin/GestionLogement";
import GestionDestination from "./components/pages/Admin/GestionDestination";
function App() {
  return (
    <Router>
      <Routes>
        {/* Routes Client avec Navbar et Footer */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/reservation"
          element={
            <>
              <Navbar />
              <Reservation />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <Register />
              <Footer />
            </>
          }
        />
        <Route
          path="/VoituresDisponibles"
          element={
            <>
              <Navbar />
              <VoituresDisponibles />
              <Footer />
            </>
          }
        />

        {/* Routes Admin sans Navbar et Footer */}
        <Route path="/admin/dashboard" element={<DashBoard />} />
        <Route path="/admin/GestionLogement" element={<GestionLogement />} />
        <Route path="/admin/GestionDestination" element={<GestionDestination />} />

      </Routes>
    </Router>
  );
}

export default App;
