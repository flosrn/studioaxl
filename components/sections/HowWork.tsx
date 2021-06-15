import React from "react";
import LayoutSection from "components/ui/layout-section";
import Fade from "react-reveal/Fade";
import Testimonials from "./Testimonials";

const items = [
  {
    id: 1,
    step: "Étape 01",
    title: "Premier contact",
    description:
      "Via le formulaire de contact, je prends connaissance de votre besoin et vous recontacte pour prévoir un temps d’échange.",
  },
  {
    id: 2,
    step: "Étape 02",
    title: "Vous, votre projet",
    description:
      "Nous faisons connaissance et posons des mots précis sur vos besoins et attentes.",
  },
  {
    id: 3,
    step: "Étape 03",
    title: "Plan d'action",
    description:
      "Je vous propose un planning ainsi que les détails de notre collaboration afin de pouvoir débuter le projet.",
  },
  {
    id: 4,
    step: "Étape 04",
    title: "L'histoire commence",
    description:
      "A l’issue de la phase créative, je vous proposerai une ou plusieurs solutions répondant à votre besoin afin d’échanger autour d’elle.",
  },
  {
    id: 5,
    step: "Étape 05",
    title: "Quelques retouches",
    description:
      "Suite à nos échanges, nous ajusterons la piste choisie jusqu’à ce qu’elle satisfasse votre objectif.",
  },
  {
    id: 6,
    step: "Étape 06",
    title: "Votre projet voit le jour",
    description:
      "Les fichiers adaptés à votre besoin vous serons fournis. J’offre un suivi client d’un mois après la fin du projet.",
  },
];

const Item = ({ step, title, description }) => (
  <div className="py-6 px-6 w-full">
    <div>{step}</div>
    <div className="relative">
      <div className="absolute bottom-0 -left-4 w-[2px] h-[60px] bg-rose rotate-90" />
      <div className="mb-1 text-xl">{title}</div>
      <div className="text-sm">{description}</div>
    </div>
  </div>
);

const HowWork: React.FC = () => (
  <LayoutSection
    sectionId={5}
    isDark
    title="Comment travailler ensemble ?"
    subtitle="Je serai là pour vous apporter mon expertise, vous orienter au mieux et faire de vos projets une réussite collective. La création est un travail d’équipe, d’échange et de partage. Je répondrai donc à votre besoin de la façon la plus sensée et pertinente pour vous permettre d’atteindre votre objectif."
  >
    <div className="relative z-10 py-5 md:py-12 px-4 md:px-12 lg:px-20 mt-20 w-full bg-white">
      <Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
          {items.map((item: any) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      </Fade>
    </div>
    <div className="absolute bottom-0 left-0 z-0 w-full h-1/2 bg-[#2F2F2F]" />
    <div className="flex justify-center mt-20">
      <Fade>
        <Testimonials />
      </Fade>
    </div>
  </LayoutSection>
);
export default HowWork;
