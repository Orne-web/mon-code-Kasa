// Importe useState pour mémoriser si le Collapse est ouvert ou fermé
import { useState } from "react";

// Importe les styles du composant
import "./Collapse.css";

// Composant réutilisable pour afficher une section dépliable
function Collapse({ title, children }) {

    // false = fermé par défaut
    // true = ouvert
    const [isOpen, setIsOpen] = useState(false);

    // Fonction appelée lorsqu'on clique sur la flèche
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">

            {/* Barre contenant le titre et la flèche */}
            <div className="collapse-header">
                <span className="collapse-title">
                    {title}
                </span>

                <button
                   className={`collapse-button ${isOpen ? "open" : ""}`}
                      onClick={toggleCollapse}
                       >
                             ⌃
                </button>
            </div>

            {/* Le contenu apparaît uniquement lorsque le Collapse est ouvert */}
            {isOpen && (
                <div className="collapse-content">
                    {children}
                </div>
            )}

        </div>
    );
}

export default Collapse;