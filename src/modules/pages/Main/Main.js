import logo from "../../../assets/img/bilal-face.png";
import style from './Main.scss';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div id={style.main}>
            <div className="main-container">
                <img
                    src={ logo }
                    className="bilou-face" alt="Tete de Bilal Boudjemline"
                />

                <p class="portfolio-title">
                    <span id="title">
                        Bienvenue sur le Portfolio de Bilal Boudjemline
                    </span><br/>
                    
                    <span id="subtitle">
                        {"{ "} Etudiant Developpeur Full-Stack {" }"}
                    </span><br/>
                </p>

                <Link to="/presentation">
                    <button id="discover-btn">Me decouvrir</button>
                </Link>
            </div>
        </div>
    );
}

export default Main;