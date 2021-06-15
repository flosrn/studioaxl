import React from "react";
import LayoutSection from "components/ui/layout-section";
import Presentation from "components/ui/presentation";

const items = [
  {
    id: 1,
    subtitle: "Singulière",
    description:
      "Une approche souple et plurielle qui apprend, au fil des expériences et du temps, à déployer ses solutions avec adaptabilité pertinence grâce à un réseau approprié.",
  },
  {
    id: 2,
    subtitle: "Empathique",
    description:
      "Cette caractéristique me permet de mieux sentir et ressentir mon travail, mes clients, ainsi que leur cible « l’empathie utilisateur ». Se mettre à la place de l’autre fait partie intégrante de ma mission.",
  },
  {
    id: 3,
    subtitle: "Sensée & passionnée",
    description:
      "Ma recherche de fond fera de vos projets de vrais univers uniques, dont une histoire se dégagera, devant alors un véritable outil porteur de sens.",
  },
];

const WorkTogether: React.FC = () => (
  <LayoutSection sectionId={1} title="Une approche…">
    <Presentation
      items={items}
      textAlignement="left"
      cta={{ url: "", text: "En savoir plus sur axl" }}
    />
  </LayoutSection>
);
export default WorkTogether;
