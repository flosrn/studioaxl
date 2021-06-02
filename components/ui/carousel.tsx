import React, { useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import SvgWeb, { svgWebAnimation } from "components/ui/animations/services/svg-web";
import SvgWrite, { svgWriteAnimation } from "components/ui/animations/services/svg-write";
import SvgSignage, { svgSignageAnimation } from "components/ui/animations/services/svg-signage";
import SvgBranding, { svgBrandingAnimation } from "components/ui/animations/services/svg-branding";
import SvgEditorial, {
  svgEditorialAnimation,
} from "components/ui/animations/services/svg-editorial";
import SvgAdvertasing, {
  svgAdvertasingAnimation,
} from "components/ui/animations/services/svg-advertasing";
import ServiceItem from "components/ui/service-item";

type Props = {};

const items = [
  {
    id: 1,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner un sens personnel et singulier à votre projet ? Racontons ensemble votre histoire.",
    icon: <SvgSignage />,
    hoverHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
      svgSignageAnimation("onHover", event.type),
    scrollHandler: () => svgSignageAnimation("onScroll"),
  },
  {
    id: 2,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner un sens personnel et singulier à votre projet ? Racontons ensemble votre histoire.",
    icon: <SvgBranding />,
    hoverHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
      svgBrandingAnimation("onHover", event.type),
    scrollHandler: () => svgBrandingAnimation("onScroll"),
  },
  {
    id: 3,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner un sens personnel et singulier à votre projet ? Racontons ensemble votre histoire.",
    icon: <SvgAdvertasing />,
    hoverHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
      svgAdvertasingAnimation("onHover", event.type),
    scrollHandler: () => svgAdvertasingAnimation("onScroll"),
  },
  {
    id: 4,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner un sens personnel et singulier à votre projet ? Racontons ensemble votre histoire.",
    icon: <SvgWeb />,
    hoverHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
      svgWebAnimation("onHover", event.type),
    scrollHandler: () => svgWebAnimation("onScroll"),
  },
];

const Item = ({ title, description, icon, hoverHandler }) => (
  <div
    className="relative bg-white transition-all duration-500 ease-in-out transform hover:-translate-y-5"
    onMouseEnter={hoverHandler}
    onMouseLeave={hoverHandler}
  >
    <div className="relative flex-none px-12 pt-20 pb-12 w-[417px] max-w-full cursor-pointer">
      <div className="absolute -top-4 group-hover:-top-12 left-3">{icon}</div>
      <div className="group-hover:text-gray-500">{title}</div>
      <div className="text-xs">{description}</div>
    </div>
  </div>
);

const Carousel: React.FC<Props> = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="mb-12 w-full" ref={emblaRef}>
      <div className="grid grid-flow-col auto-cols-[20%] gap-[20px] -ml-96">
        {items.map((item: any) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        {" "}
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        {" "}
        Next
      </button>
    </div>
  );
};

export default Carousel;
