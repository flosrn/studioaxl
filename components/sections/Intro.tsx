import React from "react";
import LayoutSection from "components/ui/layout-section";
import Presentation from "components/ui/presentation";

const items = [
  {
    id: 1,
    subtitle: "Direction artistique & design graphique",
    description:
      "Choisir de faire confiance à un graphiste ainsi qu’à une direction artistique, c’est faire confiance à une expertise basée sur un apprentissage visuel du monde et de son ressenti. C’est travailler main dans la main avec une personne passionnée qui mettra son expertise, sa connaissance de la communication visuelle et son empathie au service de vos projets les plus audacieux.",
  },
  {
    id: 2,
    subtitle: "La recherche de sens",
    description:
      "Je suis une créative à la recherche d’histoires à raconter. Je crée pour toucher, pour interpeller/susciter. C’est ensemble que je nous invite à conter l’histoire de votre choix, que vous soyez une petite, une moyenne, une grande entreprise ou encore un particulier.",
  },
  
];

const Intro: React.FC = () => (
  <LayoutSection sectionId={1} title="Créative Freelance">
    <Presentation items={items} cta={{ url: "", text: "Contactez-moi" }} />
  </LayoutSection>
);
export default Intro;
