import { Link } from "react-router";
import "./Error.css";
import "./Error.css";

function Error() {
    return (
        <main className="error-page">

            {/* Code de l'erreur */}
            <h1 className="error-code">
                404
            </h1>
            {/* Message d'erreur */}
            <p className="error-message">
                 Oups! La page que vous demandez n'existe pas.
            </p>
            {/* Lien permettant de retourner à la page d'accueil */}
            <Link to="/" className="error-link">
               Retourner sur la page d’accueil
            </Link>

        </main>
    );
}

export default Error;