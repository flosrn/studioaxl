import React from "react";
import LayoutSection from "components/ui/layout-section";
import SvgSignage, { svgSignageAnimation } from "components/ui/animations/services/svg-signage";
import SvgBranding, { svgBrandingAnimation } from "components/ui/animations/services/svg-branding";
import SvgAdvertasing, {
  svgAdvertasingAnimation,
} from "components/ui/animations/services/svg-advertasing";
import SvgWeb, { svgWebAnimation } from "components/ui/animations/services/svg-web";
import Carousel from "components/ui/Carousel/carousel";
import Fade from "react-reveal/Fade";
import ButtonLink from "components/ui/ButtonLink";

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
  <LayoutSection sectionId={1} isDark isTitleLeft title="Prestations">
    <Fade>
      <Carousel items={items} />
    </Fade>
    <Fade>
      <div className="text-white">
        <h6 className="tracking-widest text-gold uppercase text-md">N'HÉSITEZ PAS...</h6>
        <p className="mt-3 max-w-2xl text-3xl italic leading-relaxed">
          Toutes vos demandes méritent mon attention, si votre projet ne répond pas à l'une des
          catégories, n'hésitez-pas à me contacter pour échanger.
        </p>
        <ButtonLink url="/" text="Une question ?" theme="dark" className="mt-5 max-w-max" />
      </div>
    </Fade>
  </LayoutSection>
);
export default Prestations;
