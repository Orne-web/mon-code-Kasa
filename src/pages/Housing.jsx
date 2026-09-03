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
        
                    <h1>{logement.title}</h1>
    
                    <p>{logement.location}</p>
    
                    <p>{logement.description}</p>
                </>
            )}

        </main>
    );
}

// Permet d'utiliser le composant Housing ailleurs dans l'application
export default Housing;