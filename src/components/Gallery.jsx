// Composant réutilisable qui affichera la galerie d'images d'un logement
function Gallery({ pictures, title }) {

    return (
        <div className="gallery">

            {/* Affiche pour l'instant la première image du logement */}
            <img
                className="gallery-image"
                src={pictures[0]}
                alt={title}
            />

        </div>
    );
}

// Permet d'utiliser Gallery dans d'autres fichiers
export default Gallery;