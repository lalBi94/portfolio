import "./Contact.scss"
import NavBar from "../../components/NavBar/NavBar"
import linkedin from "../../../assets/img/linkedin.png"
import github from "../../../assets/img/github.png"
import mail from "../../../assets/img/mail.png"

function Contact() {
    return(
        <div id="contact-main">
            <NavBar />

            <p id="stage-p">
                Je suis actuellement à la recherche d'un stage dans le developpement Web de 8 semaines à compte du 10 avril 2023.<br/>
                Je reste disponible sur ma boîte mail pour toute offre.
            </p>

            <div id="contact-container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            <a class="link-repo" href="https://www.linkedin.com/in/bilal-boudjemline-54365b228/" target="_blank" rel="noreferrer">
                                Linkedin :
                            </a>

                            &nbsp;&nbsp;<span className="pseudo">Bilal Boudjemline</span>
                        </h3>
                    </div>

                    <div className="card-body">
                        <a class="img-link" href="https://www.linkedin.com/in/bilal-boudjemline-54365b228/" target="_blank" rel="noreferrer">
                            <img 
                                className="img-contact"
                                src={ linkedin }
                                alt="linkedin"
                            />
                        </a>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>
                            <a class="link-repo" href="https://github.com/lalBi94" target="_blank" rel="noreferrer">
                                GitHub :
                            </a>

                            &nbsp;&nbsp;<span className="pseudo">lalBi94</span>
                        </h3>
                    </div>

                    <div className="card-body">
                        <a class="img-link" href="https://github.com/lalBi94" target="_blank" rel="noreferrer">
                            <img 
                                className="img-contact"
                                src={ github }
                                alt="github"
                            />
                        </a>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>
                            <a class="link-repo" href="mailto:bilal@boudjemline.fr" target="_blank" rel="noreferrer">
                                E-Mail :
                            </a>

                            &nbsp;&nbsp;<span className="pseudo">bilal@boudjemline.fr</span>
                        </h3>
                    </div>

                    <div className="card-body">
                        <a class="img-link" href="mailto:bilal@boudjemline.fr" target="_blank" rel="noreferrer">
                            <img 
                                className="img-contact"
                                src={ mail }
                                alt="email"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact