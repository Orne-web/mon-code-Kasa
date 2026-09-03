import Collapse from "../components/Collapse";

// Importe les styles de la fiche logement
import "./Housing.css";

// Importe le composant Gallery
import Gallery from "../components/Gallery";

// Importe les hooks nécessaires
import { useEffect, useState } from "react";

// Importe useParams pour récupérer l'identifiant présent dans l'URL
import { useParams } from "react-router";

// Composant React correspondant à la page d'un logement
function Housing() {
    // Récupère l'id du logement présent dans l'URL
        const { id } = useParams();

   // Stocke les informations du logement sélectionné
const [logement, setLogement] = useState(null);

// Récupère le logement correspondant à l'id présent dans l'URL
useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setLogement(data);
        })
        .catch((error) => {
            console.error("Erreur lors du chargement du logement :", error);
        });
}, [id]);

         console.log(logement);

    // return définit ce que la page doit afficher
    return (
        <main className="housing-page">
            {logement && (
                
                <>
                  <Gallery
                      pictures={logement.pictures}
                      title={logement.title}
                  />
        
                    {/* Informations principales du logement */}
       <div className="housing-info">

         {/* Partie gauche : titre, localisation et tags */}
       <div className="housing-info-left">
    <h1 className="housing-title">
        {logement.title}
    </h1>

    <p className="housing-location">
        {logement.location}
    </p>

    {/* Liste des tags du logement */}
    <div className="housing-tags">
        {logement.tags.map((tag) => (
            <span className="housing-tag" key={tag}>
                {tag}
            </span>
        ))}
    </div>
</div>

      {/* Partie droite : propriétaire et notation */}
<div className="housing-info-right">

{/* Informations sur le propriétaire */}
<div className="housing-host">
    <p className="housing-host-name">
        {logement.host.name}
    </p>

    <img
        className="housing-host-picture"
        src={logement.host.picture}
        alt={logement.host.name}
    />
</div>

      {/* Note du logement */}
     <div className="housing-rating">
    {[1, 2, 3, 4, 5].map((star) => (
        <span
            key={star}
            className={
                star <= Number(logement.rating)
                    ? "star star-active"
                    : "star star-inactive"
            }
        >
            ★
        </span>
    ))}
</div>

</div>
     </div>
    
                   {/* Bloc Description */}
          <div className="housing-collapses">
             <Collapse title="Description">
             <p>{logement.description}</p>
             </Collapse>
 </div>
                 </>
            )}

        </main>
    );
}

// Permet d'utiliser le composant Housing ailleurs dans l'application
export default Housing;