import "./Projets.scss"
import NavBar from "../../../modules/components/NavBar/NavBar"
import hardsystem from "../../../assets/img/hardsystem.PNG"
import jsonviewer from "../../../assets/img/jsonviewer.PNG"
import fivem from "../../../assets/img/five_m.jpg"
import dbexplorer from "../../../assets/img/dbexplorer.PNG"

function Projets() {
    return(
        <div id="projets-main">
            <NavBar/>

            <p id="github-p">
                Retrouvez mes réalisations&nbsp;&nbsp;
                <a 
                    rel="noreferrer" 
                    target="_blank" 
                    href="https://github.com/lalBi94"
                >
                        &nbsp;ici&nbsp;
                </a>
            </p>

            <div id="projets-container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            <a class="link-repo" href="https://github.com/lalBi94/_HardSystem" target="_blank" rel="noreferrer">
                                Hard System
                            </a>
                        </h3>
                    </div>

                    <div className="card-body">
                        <p>
                            Hard System est un projet scolaire visant à créer un site internet de vente de composants électroniques.
                            Ce site a été code en HTML, CSS, JS et PHP.
                        </p>

                        <p>
                            Le site devait pouvoir: créer un espace client, mettre en place une boutique avec un panier,
                            renvoyer des anciens composants pour obtenir des reductions sur le site et collecter tous les
                            éléments de fabrication de chaque appareil pour avoir des bons d'achat.
                        </p>

                        <p>
                            Ce site m'a permis de travailler mes notions de client / serveur web. J'ai beaucoup apprécié de le faire,
                            c'était amusant.
                        </p>

                        <img 
                            className="img-proj"
                            src={hardsystem} 
                            alt="logo hard system"
                        />
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>
                            <a class="link-repo" href="https://github.com/lalBi94/JSONViewer" target="_blank" rel="noreferrer">
                                JSONViewer
                            </a>
                        </h3>
                    </div>

                    <div className="card-body">
                        <p>
                            Ce projet avait pour but de pouvoir reformatter une ligne venant du langage JSON en Java.
                        </p>

                        <p>
                            Plusieurs missions pour ce projet, construction d'un AST pour pouvoir y stocker les clés / valeurs sous
                            forme de noeuds, ajouter une fonctionnalité pour pouvoir replier / déplier les tableaux et objets, pour finir, 
                            la dernière consigne était de traduire l'affiche JSON en affichage de tableau PHP.
                        </p>

                        <img 
                            className="img-proj"
                            src={jsonviewer} 
                            alt="logo json viewer"
                        />
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>
                            <a class="link-repo" href="https://github.com/lalBi94?tab=repositories&q=krp&type=&language=&sort=" target="_blank" rel="noreferrer">
                                La Suite Krypton
                            </a>
                        </h3>
                    </div>

                    <div className="card-body">
                        <p>
                            Ce projet a débuté il y a maintenant un an de cela. Je voulais chercher un moyen d'être rémunérer
                            tout en faisant ce que j'aime. Je me suis donc tourné vers le LUA et j'ai lancé 
                            ma boutique de prestation de services.
                        </p>

                        <p>
                            Le but de cette suite est simple, créer un maximum de script de qualité permettant d'ajouter
                            des fonctionnalités à des serveurs Five M {"("}GTA RolePlay{")"}. Les add-ons pouvait etre facilement implenté
                            que ce soit coté client ou serveur.
                        </p>

                        <p>
                            Le projet a ete un peu mis en stand-by cette année mais je continue néanmoins à vendre mes services de temps en temps
                            par le bias de formations.
                        </p>

                        <img 
                            className="img-proj"
                            src={ fivem } 
                            alt="logo five m"
                        />
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>
                            <a class="link-repo" href="https://github.com/lalBi94/DBExplorer" target="_blank" rel="noreferrer">
                                DBExplorer
                            </a>
                        </h3>
                    </div>

                    <div className="card-body">
                        <p>
                            Ce projet a ete fait pour tester la méthode PDO de PHP. J'ai eu l'idée de faire cette interface
                            suite a une question que je me suis pose "Comment puis-je accéder à mes données stockées sans passer
                            par phpmyadmin ?" {"("}question dont j'ai la réponse aujourd'hui{")"}.
                        </p>

                        <p>
                            Cette interface est sympa mais son manque de responsivité l'empêche d'être utilisé par d'autres utilisateurs.
                        </p>

                        <img 
                            className="img-proj"
                            src={ dbexplorer } 
                            alt="plateforme dbexplorer"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projets