// Importe le logo Kasa
import logo from "../assets/logo.svg";

// Importe les styles du Footer
import "./Footer.css";

// Composant Footer affiché en bas des pages
function Footer() {
    return (
        <footer className="footer">

            <img
                className="footer-logo"
                src={logo}
                alt="Kasa"
            />

            <p className="footer-text">
                © 2020 Kasa. All rights reserved
            </p>

        </footer>
    );
}

export default Footer;