 // Importe le Header commun aux différentes pages
import Header from "../components/Header";
 
 // Importe les outils nécessaires pour gérer les routes
import { BrowserRouter, Routes, Route } from "react-router";

// Importe les pages de l'application
import Home from "../pages/Home";
import About from "../pages/About";
import Housing from "../pages/Housing";
import Error from "../pages/Error";

// Composant qui contient toutes les routes de l'application
function AppRouter() {

    return (
        <BrowserRouter>
            <Header />
            {/* Regroupe toutes les routes */}
            <Routes>

                {/* Route de la page d'accueil */}
                <Route path="/" element={<Home />} />

                {/* Route de la page À propos */}
                <Route path="/about" element={<About />} />

                {/* Route dynamique pour afficher un logement selon son id */}
                <Route path="/logement/:id" element={<Housing />} />

                {/* Route utilisée si aucune autre route ne correspond */}
                <Route path="*" element={<Error />} />

            </Routes>

        </BrowserRouter>
    );
}
































// Permet d'utiliser AppRouter dans un autre fichier
export default AppRouter;