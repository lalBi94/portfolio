import "./Presentation.scss";
import NavBar from "../../components/NavBar/NavBar";

function Presentation() {
    return (
        <div id="presentation-main">
            <NavBar />
            
            <p id="salutation">Bonjour à tous !</p>

            <div id="presentation-container">
                <div className="card">
                    <div className="card-header">
                        <h3>Mon parcours</h3>
                    </div>

                    <div className="card-body">
                        <p>
                            Je suis Bilal Boudjemline et j'ai actuellement 20 ans.
                            J'ai commencé mon parcours dans l'informatique à 15 ans.
                            J'ai tout d'abord appris à comprendre la programmation 
                            avec le langage C. Il m'a permis de comprendre les 
                            fondamentaux pour pouvoir par la suite être plus à l'aise
                            dans d'autres langages.
                        </p>
                            
                        <p>
                            J'ai par la suite suivi un cursus en Baccalauréat Professionnel
                            en Systèmes Numériques option Réseaux informatiques et
                            Systèmes communiquants {"("}RISC{")"}. Je me suis senti tout de suite a ma place.
                            J'ai été jusqu'au bout de cette formation et j'ai eu mon BAC PRO SN
                            avec une mention très bien.
                        </p>

                        <p>
                            Par la suite, j'ai voulu étudier la programmation. C'est pour cela
                            que je me suis inscrit en Bachelor Universitaire en Technologie
                            à l'université Paris-Est Créteil {"("}UPEC{")"}. J'ai pu apprendre
                            de plusieurs langages tels que ceux du web {"("}HTML, CSS, JS, PHP{")"},
                            des langages de bas niveau {"("}C et BASH{")"} et le langage de
                            haut niveau {"("}Java{")"}.
                        </p>

                        <p>
                            Je suis un grand passioné d'informatique que ce soit niveau
                            du code ou niveau reseau. La facon d'agencer des 
                            suites d'instructions et tout le processus qui se passe
                            en arrière-plan me fascine de jour en jour. Je veux en faire
                            mon métier et y consacrer ma vie.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>Mes activités</h3>
                    </div>

                    <div className="card-body">
                        <p>
                            En dehors du cadre scolaire, je suis professeur particulier pour des débutants en programmation.
                            Les langages que j'enseigne sont ceux du web. J'enseigne à plusieurs élèves âgés entre
                            14 et 33 ans. Le programme est adapté à chacun et je prends tout le temps nécessaire
                            pour faire comprendre une notion à chacun d'eux.
                        </p>

                        <p>
                            Il m'arrive de temps en temps de créer des sites internet pour mon plaisir personnel. 
                            Ce portfolio écrit en ReactJS fait partie intégrante mes créations. Je ne les mets jamais
                            sur mon GitHub car ce n'est pas des projets voués à être mis en ligne. Je les fais uniquement
                            pour revoir certaines notions ou pour m'améliorer.
                        </p>

                        <p>
                            Mes activités ne s'arrêtent pas là, j'essaye constamment d'améliorer
                            mon niveau en programmation en faisant plus de recherches sur les
                            notions scolaires que j'étudie. Pour exemple, j'ai renforce mes connaissances
                            en Javascript en apprenant à utiliser les FrameWorks
                            ReactJS et NodeJS.
                        </p>

                        <p>
                            Pour finir, je suis développeur LUA indépendant pour les serveurs Five M tournant sur le jeu vidéo 
                            "GTA Rôle Play". Je m'occupe de créer / gérer des scripts cote client et serveur, régler des bugs et 
                            rendre compatible certains scripts avec la version courante du serveur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;