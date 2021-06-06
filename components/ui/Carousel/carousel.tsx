import React, { useState, useEffect, useCallback } from "react";
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

type Props = {};

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

const Item = ({ title, description, icon, animation }) => {
  const handleMouseEvent = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    animation("onHover", event.type);
    animation("onScroll");
  };
  return (
    <div
      className="relative bg-white transition-all duration-500 ease-in-out transform hover:-translate-y-5"
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      <div className="relative flex-none px-12 pt-20 pb-12 h-full cursor-pointer">
        <div className="absolute -top-4 group-hover:-top-12 left-3">{icon}</div>
        <div className="mb-1 group-hover:text-gray-500">{title}</div>
        <div className="text-xs">{description}</div>
      </div>
    </div>
  );
};

export const mediaByIndex = (index) => items[index % items.length];

const Carousel: React.FC<Props> = (props) => {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    loop: true,
    align: "start",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="relative w-full h-[320px]">
      <div className="flex justify-end items-center text-white">
        <button className="mr-4 embla__prev" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next" onClick={scrollNext}>
          Next
        </button>
      </div>
      <div
        className="overflow-hidden absolute py-10 mx-auto max-w-screen-2xl h-full"
        ref={viewportRef}
      >
        <div className="flex -ml-3">
          {items.map((item) => (
            <div className="relative pl-3" key={item.id}>
              <div className="flex relative justify-center items-center w-[300px]">
                <Item {...mediaByIndex(item.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
