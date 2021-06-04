import React from "react";
import LayoutSection from "components/ui/layout-section";
import Presentation from "components/ui/presentation";

const items = [
  {
    id: 1,
    subtitle: "Directtioon artistiquwe et disgn graphique",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet nisl malesuada, euismod est et, faucibus sem. Etiam eu fermentum ligula.\n\nSed facilisis a est sed venenatis. Etiam pharetra ipsum id elementum tempor. Nam quam elit, suscipit in velit a, feugiat commodo enim. Vivamus pulvinar eu erat ut tincidunt. Nam efficitur nulla in sagittis viverra. Maecenas efficitur ac elit vel pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
  },
  {
    id: 2,
    subtitle: "Directtioon artistiquwe et disgn graphique",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet nisl malesuada, euismod est et, faucibus sem. Etiam eu fermentum ligula. Sed facilisis a est sed venenatis. Etiam pharetra ipsum id elementum tempor. Nam quam elit, suscipit in velit a, feugiat commodo enim. Vivamus pulvinar eu erat ut tincidunt. Nam efficitur nulla in sagittis viverra. Maecenas efficitur ac elit vel pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
  },
  {
    id: 3,
    subtitle: "Directtioon artistiquwe et disgn graphique",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet nisl malesuada, euismod est et, faucibus sem. Etiam eu fermentum ligula. Sed facilisis a est sed venenatis. Etiam pharetra ipsum id elementum tempor. Nam quam elit, suscipit in velit a, feugiat commodo enim. Vivamus pulvinar eu erat ut tincidunt. Nam efficitur nulla in sagittis viverra. Maecenas efficitur ac elit vel pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
  },
];

const WorkTogether: React.FC = () => (
  <LayoutSection sectionId={1} title="axelle #Créative Freelance">
    <Presentation
      items={items}
      textAlignement="left"
      cta={{ url: "", text: "En savoir plus sur axl" }}
    />
  </LayoutSection>
);
export default WorkTogether;
