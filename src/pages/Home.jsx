// Importe le composant Banner pour l'afficher sur la page d'accueil
import Banner from "../components/Banner";

// Composant React correspondant à la page d'accueil de Kasa
function Home() {

    // return définit ce que le composant doit afficher
    return (
        <main>
            {/* Affiche la bannière de la page d'accueil */}
             <Banner />
        </main>
    );
}

// Permet d'utiliser le composant Home dans un autre fichier
export default Home;