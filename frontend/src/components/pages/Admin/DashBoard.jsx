import "./Admin.css"
import { Link } from "react-router-dom";
import Sidebar from "../../layout/sidebar/Sidebar";
function DashBoard() {
    return (
       <div className="Hole"> 
       <div className="HoleContent">
            <div className="side">
                <Sidebar />
            </div>
            <div className="HoleBody">
                <div className="pageName">DashBoard Admin</div>

                <div className="infosPart">
                <div className="card">
                    <div className="cardName">
                     Nombres d'utilisateurs
                    </div>
                    <div className="cardInfos">
                        140
                    </div>
                </div>
                <div className="card">
                    <div className="cardName">
                    Logements
                    </div>
                    <div className="cardInfos">
                        140
                    </div>
                </div>
                <div className="card">
                <div className="cardName">
                     Nombres de Voitures
                    </div>
                    <div className="cardInfos">
                        140
                    </div>
                </div>
                <div className="card">
                    <div className="cardName">
                     Nombres de Transactions
                    </div>
                    <div className="cardInfos">
                        140
                    </div>
                </div>
                </div>
            </div>
       </div>
</div>
    );
}
export default DashBoard;