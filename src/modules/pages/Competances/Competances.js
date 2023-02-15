import "./Competances.scss";
import NavBar from "../../components/NavBar/NavBar";
import logo_js from "../../../assets/img/js_lan.png"
import logo_react from "../../../assets/img/react_lan.png"
import logo_java from "../../../assets/img/java_lan.png"
import logo_css from "../../../assets/img/css_lan.png"
import logo_html from "../../../assets/img/html_lan.png"
import logo_scss from "../../../assets/img/scss_lan.png"
import logo_c from "../../../assets/img/c_lan.png"
import logo_php from "../../../assets/img/php_lan.png"
import logo_mariadb from "../../../assets/img/mariadb_lan.png"
import logo_mysql from "../../../assets/img/mysql_lan.png"

import cv from "./cv_bilal_boudjemline.pdf"

function Competances() {
    return (
        <div id="competances-main">
            <NavBar />

            <p id="cv-p">
                Retrouvez mon Curriculum Vitae&nbsp;&nbsp;
                <a 
                    rel="noreferrer" 
                    target="_blank" 
                    href={ cv }
                >
                        &nbsp;ici&nbsp;
                </a>
            </p>

            <div id="competances-container">
                <div className="card">
                    <div className="card-header">
                        <h3>Front-End : HTML, {"("}S{")"}CSS, ReactJS</h3>

                        <div className="logos">
                            <img 
                                src={ logo_js }
                                className="logo_lan"
                                alt="logo js"
                            /> 

                            <img
                                src={ logo_react }
                                className="logo_lan"
                                alt="logo react js"
                            />

                            <img 
                                src={ logo_html }
                                className="logo_lan"
                                alt="logo html"
                            /> 

                            <img 
                                src={ logo_css }
                                className="logo_lan"
                                alt="logo css"
                            />

                            <img 
                                src={ logo_scss }
                                className="logo_lan"
                                alt="logo scss"
                            />
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="note">
                            <span className="note-black"></span>
                            <span className="note-black"></span>
                            <span className="note-black"></span>
                            <span className="note-black"></span>
                            <span className="note-grey"></span>
                            <span className="note-grey"></span>
                        </div><br/>

                        <p>
                            HTML, CSS et JavaScript natif sont des langages dans lesquelles 
                            je me débrouille très bien. Je suis à l'aise avec la responsivité
                            et je mobilise toutes mes compétences pour faire une belle interface UX.
                        </p>

                        <p>
                            Le DOM est une notion que j'ai comprise. Pour en dire plus sur mes compétences en JavaScript, 
                            je suis apte à faire réagir le DOM grace au JS pour lui faire faire toutes sortes de choses.
                            Je connais la programmation objet de ce langage et je m'en sers régulièrement dans un modèle MVC.
                        </p>

                        <p>
                            Le ReactJS est un langage dans lequel je suis encore débutant mais j'en apprends
                            de jour en jour pour enfin pouvoir le maitriser et être à l'aise dedans. J'ai pris
                            l'habitude d'abandonner le CSS classique pour ce FrameWork pour laisser place au SCSS.
                        </p>

                        <p>
                            Pour finir, j'ai des notions en pratiques CEO comme l'attribut HMTL alt, 
                            un mode d'affichage pour daltonien etc...
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>Back-End : PHP, MySQL, MariaDB</h3>

                        <div className="logos">
                            <img 
                                src={ logo_php } 
                                alt="logo php" 
                                className="logo_lan"
                            />

                            <img 
                                src={ logo_mariadb } 
                                alt="logo php" 
                                className="logo_lan"
                            />

                            <img 
                                src={ logo_mysql } 
                                alt="logo php" 
                                className="logo_lan"
                            />
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="note">
                            <span className="note-black"></span>
                            <span className="note-black"></span>
                            <span className="note-black"></span>
                            <span className="note-black"></span>
                            <span className="note-grey"></span>
                            <span className="note-grey"></span>
                        </div><br/>

                        <p>
                            Le Back-End est pour moi la meilleure partie du web.
                            N'étant pas un très grand artiste, j'aime bien fournir
                            un modèle de données récupérer via une api / base de données.
                        </p>

                        <p>
                            J'ai les notions de bases en PHP et certaines notions
                            du côté base de données qui sont qui la méthode PDO et son ancêtre
                            mysqli.
                        </p>

                        <p>
                            Étant en train d'apprendre le NodeJS, je n'ai pas eu le temps de
                            réellement exploite la partie objet de PHP.
                        </p>

                        <p>
                            Pour ce qui est des bases de données, je sais manier les requêtes SQL
                            pour récupérer toutes sortes d'informations.
                        </p>

                        <p>
                            Pour finir, comme dit plus haut, je suis actuellement entrain d'apprendre le
                            NodeJS pour pouvoir devenir développeur Full-Stack JavaScript.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>Java</h3>

                        <div className="logos">
                            <img 
                                src={ logo_java }
                                className="logo_lan"
                                alt="logo java"
                            />
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="note">
                            <span className="note-black"></span>
                            <span className="note-black"></span>
                            <span className="note-black"></span>
                            <span className="note-black"></span>
                            <span className="note-grey"></span>
                            <span className="note-grey"></span>
                        </div><br/>

                        <p>
                            Un de mes coups de coeur dans le développement d'applications, ce
                            langage qui m'a permis de comprendre la programmation oriente objet {"("}POO{")"}.
                        </p>

                        <p>
                            Tout d'abord, pour les interfaces graphiques, je manie bien la librairie javax.swing.
                            Je suis en mesure de pouvoir créer des interfaces lisses et stylise grace à tout type de
                            layout.
                        </p>

                        <p>
                            Pour ce qui est du stockage de données, je suis à l'aise avec les listes telles que l'interface
                            List{"<"}{">"}{"("}{")"}, mais aussi avec les dictionnaires comme l'interface Map{"<"}{">"}{"("}{")"}.
                        </p>

                        <p>
                            Pour ce qui est des design patterns, je sais appliquer le Modèle Vue Contrôleur {"("}MVC{")"}.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>C</h3>

                        <div className="logos">
                            <img 
                                src={ logo_c }
                                className="logo_lan"
                                alt="logo c"
                            />
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="note">
                            <span className="note-black"></span>
                            <span className="note-black"></span>
                            <span className="note-black"></span>
                            <span className="note-grey"></span>
                            <span className="note-grey"></span>
                            <span className="note-grey"></span>
                        </div><br/>

                        <p>
                            C'est le langage de programmation qui m'a fait découvrir le code et tout son fonctionnement.
                        </p>

                        <p>
                            Niveau pointeurs, je sais en utiliser plusieurs types tels que le pointeur générique void*,
                            les chaines de caractères char* et les pointeurs basiques.
                        </p>

                        <p>
                            Niveau stockage de données, je suis à l'aise avec la notion de liste chainée. Ce qui
                            implique que je sais aussi manier des structures et des enumerations.
                        </p>

                        <p>
                            Niveau processus, je sais uniquement créer des processus et tout le fonctionnement
                            qui va avec pour pouvoir délègue certaines taches à des processus fils.
                        </p>

                        <p>
                            Niveau fichier, je sais interagir avec eux pour les modifiers, les créer etc...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Competances;