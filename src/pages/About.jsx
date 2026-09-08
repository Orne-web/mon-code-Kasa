import bannerAbout from "../assets/banner-about.png";
import Collapse from "../components/Collapse";
import "./About.css";

function About() {
    return (
        <main className="about-page">

            {/* Bannière de la page À propos */}
            <div className="about-banner">
                <img
                    src={bannerAbout}
                    alt="Paysage de montagne"
                />
            </div>

            {/* Blocs d'informations de la page À propos */}
            <div className="about-collapses">
                <Collapse title="Fiabilité">
                    <p>
                      Les annonces postées sur Kasa garantissent une fiabilité totale.
                      Les photos sont conformes aux logements, et toutes les informations
                      sont régulièrement vérifiées par nos équipes.
                    </p>
                </Collapse>

                          {/* Respect */}
                   <Collapse title="Respect">
                     <p>
                     La bienveillance fait partie des valeurs fondatrices de Kasa.
                     Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.   
                     </p>
                   </Collapse>

                            {/* Service */}
                   <Collapse title="Service">
                         <p>
                         La qualité du service est au cœur de notre engagement chez Kasa.
                         Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
                         </p>
                   </Collapse>
                         {/* Sécurité */}
                   <Collapse title="Sécurité">
                           <p>
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité établis
        par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
        cela permet à nos équipes de vérifier que les standards sont bien respectés.
        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                          </p>
                  </Collapse>
            </div>

        </main>
    );
}


export default About;