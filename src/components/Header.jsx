// Importe Link pour naviguer sans recharger la page
import { Link, NavLink } from "react-router";

import logo from "../assets/logo.svg";

// Importe les styles du Header
 import "./Header.css";

// Composant réutilisable du header
function Header() {

    return (
        
         <header className="header">

            {/* Logo Kasa cliquable qui renvoie vers la page d'accueil */}
           <Link to="/">
           <img className="header-logo" src={logo} alt="Kasa" />
           </Link>

           <nav className="header-nav">

                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>

           </nav>

        </header>
    );
}

// Rend le composant disponible dans l'application
export default Header;