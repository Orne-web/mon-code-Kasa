// Importe les styles de la galerie
import "./Gallery.css";

// Importe useState pour mémoriser l'image actuellement affichée
import { useState } from "react";

// Composant réutilisable qui affichera la galerie d'images d'un logement
function Gallery({ pictures, title }) {

       // Stocke l'index de l'image actuellement affichée
    const [currentIndex, setCurrentIndex] = useState(0);
    

    // Passe à l'image suivante
    const nextPicture = () => {
    setCurrentIndex((previousIndex) =>
        (previousIndex + 1) % pictures.length
        );
     };

         // Passe à l'image précédente
    const previousPicture = () => {
    setCurrentIndex((previousIndex) =>
        (previousIndex - 1 + pictures.length) % pictures.length
         );
      };

    return (
        <div className="gallery">

            {/* Bouton pour afficher l'image précédente */}
      {pictures.length > 1 && (
                <button
                   className="gallery-previous"
                   onClick={previousPicture}
                >
                 ❮
                </button>
        )}

            {/* Affiche pour l'instant la première image du logement */}
            <img
                className="gallery-image"
                src={pictures[currentIndex]}
                alt={title}
            />
            {/* Affiche la position de l'image actuelle dans la galerie */}
       {pictures.length > 1 && (
        <span
             key={currentIndex}
             className="gallery-counter"
         >
            {currentIndex + 1} / {pictures.length}
        </span>
             )}

            {/* Bouton pour afficher l'image suivante */}
      {pictures.length > 1 && (
         <button
              className="gallery-next"
              onClick={nextPicture}
          >
             ❯
         </button>
     )}

        </div>
    );
}
 


// Permet d'utiliser Gallery dans d'autres fichiers
export default Gallery;