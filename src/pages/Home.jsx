// Importe useEffect et useState depuis React
import { useEffect, useState } from "react";

// Importe la bannière
import Banner from "../components/Banner";

// Importe le composant Card
import Card from "../components/Card";

function Home() {

    // Stocke la liste des logements récupérés depuis l'API
    const [logements, setLogements] = useState([]);

    // useEffect permet d'exécuter le fetch au chargement de la page
    useEffect(() => {

        fetch("http://localhost:8080/api/properties")
            .then((response) => response.json())
            .then((data) => {
                setLogements(data);
            })
            .catch((error) => {
                console.error("Erreur lors du chargement des logements :", error);
            });

    }, []);

    return (
        <main>

            {/* Affiche la bannière */}
            <Banner />

            {/* Affiche une carte pour chaque logement */}
            <section className="housing-grid">
                {logements.map((logement) => (
                    <Card
                        key={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                        id={logement.id}
                    />
                ))}
            </section>

        </main>
    );
}

export default Home;
