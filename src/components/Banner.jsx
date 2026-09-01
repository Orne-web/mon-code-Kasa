// Importe les styles de la bannière
import "./Banner.css";

// Importe l'image utilisée pour la bannière de la page d'accueil
import bannerHome from "../assets/banner-home.png";

// Composant réutilisable pour afficher une bannière
function Banner() {

    return (
        <section className="banner">
    {/* Image principale de la bannière */}
    <img
        className="banner-image"
        src={bannerHome}
        alt="Paysage de la bannière Kasa"
    />
        <h1 className="banner-title">
         Chez vous, partout et ailleurs
         </h1>

        </section>
    );
}

// Permet d'utiliser le composant Banner dans d'autres fichiers
export default Banner;