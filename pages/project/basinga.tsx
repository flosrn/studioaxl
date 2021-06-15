import React from "react";
import ProjectTemplate from "components/ui/ProjectTemplate";
import BasingaSvg from "components/ui/svg/projects/basinga";
import basingaImg from "../../public/images/projects/basinga.jpg";

const props = {
  title: "",
  subtitle: "",
  logo: <BasingaSvg />,
  hero: basingaImg,
  content:
    "Ce projet fut la belle rencontre avec une compagnie funambule traversant le monde pour y accrocher leur fil.\n\nDésireux de mettre en lumière leur équipe et pas uniquement le ou la funambule, la compagnie a fait appel à ma direction artistique pour répondre à ses attentes. C’est en développant un projet plein de sens autour du balancier que nous avons crée l’équilibre de Basinga.\n\nEn passant de supports imprimés aux supports digitaux et audiovisuels, ce projet fut une très belle expérience 360, à la fois humaine et professionnelle. Je tiens à remercier Tatiana-Mosio Bongonga & Jan Naets pour leur implication et tout le coeur mis avec nous dans ce projet.",
  url: "ciebasinga.com",
  credits: "Crédits photo © Valérie Frossard . © Axelle Malard",
};

const Basinga: React.FC = () => <ProjectTemplate {...props} />;

export default Basinga;
