import React from "react";
import LayoutSection from "components/ui/layout-section";
import Presentation from "components/ui/presentation";
import SvgSignage, { svgSignageAnimation } from "components/ui/animations/services/svg-signage";
import SvgWrite, { svgWriteAnimation } from "components/ui/animations/services/svg-write";
import SvgEditorial, {
  svgEditorialAnimation,
} from "components/ui/animations/services/svg-editorial";
import SvgBranding, { svgBrandingAnimation } from "components/ui/animations/services/svg-branding";
import SvgAdvertasing, {
  svgAdvertasingAnimation,
} from "components/ui/animations/services/svg-advertasing";
import SvgWeb, { svgWebAnimation } from "components/ui/animations/services/svg-web";
import Carousel from "components/ui/Carousel/carousel";

const items = [
  {
    id: 1,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner un sens personnel et singulier à votre projet ? Racontons ensemble votre histoire.",
    icon: <SvgSignage />,
    animation: svgSignageAnimation,
  },
  {
    id: 2,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner un sens personnel et singulier à votre projet ? Racontons ensemble votre histoire.",
    icon: <SvgBranding />,
    animation: svgBrandingAnimation,
  },
  {
    id: 3,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner un sens personnel et singulier à votre projet ? Racontons ensemble votre histoire.",
    icon: <SvgAdvertasing />,
    animation: svgAdvertasingAnimation,
  },
  {
    id: 4,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner un sens personnel et singulier à votre projet ? Racontons ensemble votre histoire.",
    icon: <SvgWeb />,
    animation: svgWebAnimation,
  },
  {
    id: 5,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner un sens personnel et singulier à votre projet ? Racontons ensemble votre histoire.",
    icon: <SvgWeb />,
    animation: svgWebAnimation,
  },
  {
    id: 6,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner un sens personnel et singulier à votre projet ? Racontons ensemble votre histoire.",
    icon: <SvgWeb />,
    animation: svgWebAnimation,
  },
  {
    id: 7,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner un sens personnel et singulier à votre projet ? Racontons ensemble votre histoire.",
    icon: <SvgWeb />,
    animation: svgWebAnimation,
  },
  {
    id: 8,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner un sens personnel et singulier à votre projet ? Racontons ensemble votre histoire.",
    icon: <SvgWeb />,
    animation: svgWebAnimation,
  },
];

const Prestations: React.FC = () => (
  <LayoutSection sectionId={1} title="axelle #Créative Freelance">
    <Carousel items={items} toto="test" />
  </LayoutSection>
);
export default Prestations;
