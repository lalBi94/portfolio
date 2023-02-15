import React, { useState } from "react";
import logo from "../../../assets/img/bilal-face.png";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
	const [isOpen, setIsOpen] = useState(true);

	function handleToggle() {
		setIsOpen(!isOpen);

		if(isOpen) {
			console.log("Ouverture")
			document.querySelector(".hide-menu").style.display = "flex"
		} else {
			document.querySelector(".hide-menu").style.display = "none"
		}
	};

	return (
		<nav className="navbar">
			{isOpen ? (
				<ul className="menu">
						<li>
							<Link className="atoms" to="/presentation">
								Presentation
							</Link>
						</li>

						<li>
							<Link className="atoms" to="/competances">
								Compétances
							</Link>
						</li>

					
						<li>
							<Link className="atoms-logo" to="/">
								<img
									src={ logo } 
									alt="Tete de Bilal"
								/>
							</Link>
						</li>

						<li>
							<Link className="atoms" to="/projets">
								Projets
							</Link>
						</li>

						<li>
							<Link className="atoms" to="/contact">
								Contactez-Moi
							</Link>
						</li>
				</ul>
			) : null}

			<nav className="hide-menu">
				<button 
					class="close-button"
					onClick={ handleToggle }
				>
					&times;
				</button>

				<ul className="hide-menu-container">
					<li>
						<Link 
							className="hide-menu-atoms" 
							to="/presentation" 
							onClick={ handleToggle }
						>
							Presentation
						</Link>
					</li>

					<li>
						<Link 
							className="hide-menu-atoms" 
							to="/competances" 
							onClick={ handleToggle }
						>
							Competances
						</Link>
					</li>

					<li>
						<Link 
							className="hide-menu-atoms" 
							to="/projets" 
							onClick={ handleToggle }
						>
							Projets
						</Link>
					</li>

					<li>
						<Link 
							className="hide-menu-atoms" 
							to="/contact" 
							onClick={ handleToggle }
						>
							Contactez-moi
						</Link>
					</li>
				</ul>
			</nav>

			<div className="burger-menu">
				<img 
					className="burger-logo"
					src={ logo } 
					alt="" 
				/>

				<button 
					onClick={ handleToggle } 
					className="burger-button"
				>
					&#9776;
				</button>
			</div>
		</nav>
	);
};

export default NavBar;