// Importe notre composant qui gère toutes les routes de Kasa
import AppRouter from "./router/AppRouter";

// Composant principal de l'application
function App() {

    // Affiche le routeur de l'application
    return <AppRouter />;
}

// Permet à main.jsx d'utiliser le composant App
export default App;