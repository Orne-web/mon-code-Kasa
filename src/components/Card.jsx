// Importe Link pour naviguer vers la fiche du logement
import { Link } from "react-router";

// Importe les styles de la carte
import "./Card.css";


 // Composant réutilisable représentant une carte de logement
// Le composant reçoit le titre du logement grâce aux props
// Le composant reçoit le titre et l'image du logement grâce aux props
function Card({ id, title, cover }) {

    return (
        <Link to={`/logement/${id}`} className="card-link">
        <article className="card">

            {/* Affiche l'image principale du logement */}
          <img
              className="card-image"
              src={cover}
              alt={title}
          />
        {/* Affiche le titre du logement reçu grâce aux props */}
         <h2 className="card-title">{title}</h2>
        </article>
        </Link>
    );
}

// Permet d'utiliser le composant Card dans d'autres fichiers
export default Card;