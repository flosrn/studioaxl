import React, { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";

type Props = {};

const items = [
  {
    id: 1,
    name: "Marie Hernandez",
    job: "Designer graphique, DA",
    picture: "",
    description:
      "J’ai travaillé avec Axelle sur plusieurs projets, en co-direction artistique. Nous avons grandit ensemble, pendant nos études. Minutieuse, rigoureuse, elle n’a pas peur d’être honnête quand cela est nécessaire.",
  },
  {
    id: 2,
    name: "Marie Hernandez",
    job: "Designer graphique, DA",
    picture: "",
    description:
      "J’ai travaillé avec Axelle sur plusieurs projets, en co-direction artistique. Nous avons grandit ensemble, pendant nos études. Minutieuse, rigoureuse, elle n’a pas peur d’être honnête quand cela est nécessaire.",
  },
  {
    id: 3,
    name: "Marie Hernandez",
    job: "Designer graphique, DA",
    picture: "",
    description:
      "J’ai travaillé avec Axelle sur plusieurs projets, en co-direction artistique. Nous avons grandit ensemble, pendant nos études. Minutieuse, rigoureuse, elle n’a pas peur d’être honnête quand cela est nécessaire.",
  },
  {
    id: 4,
    name: "Marie Hernandez",
    job: "Designer graphique, DA",
    picture: "",
    description:
      "J’ai travaillé avec Axelle sur plusieurs projets, en co-direction artistique. Nous avons grandit ensemble, pendant nos études. Minutieuse, rigoureuse, elle n’a pas peur d’être honnête quand cela est nécessaire.",
  },
  {
    id: 5,
    name: "Marie Hernandez",
    job: "Designer graphique, DA",
    picture: "",
    description:
      "J’ai travaillé avec Axelle sur plusieurs projets, en co-direction artistique. Nous avons grandit ensemble, pendant nos études. Minutieuse, rigoureuse, elle n’a pas peur d’être honnête quand cela est nécessaire.",
  },
];

const Item = ({ title, description, icon }) => (
  <div className="relative min-w-full h-full bg-white">
    <div className="relative flex-none px-12 pt-20 pb-12 h-full cursor-pointer">
      <div className="absolute -top-4 group-hover:-top-12 left-3">{icon}</div>
      <div className="mb-1 group-hover:text-gray-500">{title}</div>
      <div className="text-xs">{description}</div>
    </div>
  </div>
);

export const mediaByIndex = (index) => items[index % items.length];

const Testimonials: React.FC<Props> = (props) => {
  const [viewportRef, embla] = useEmblaCarousel({
    // containScroll: "keepSnaps",
    // dragFree: true,
    loop: true,
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
    <div className="flex relative flex-col justify-center items-center w-[600px] h-[320px] text-white">
      <div className="flex justify-center items-center text-white">
        <button className="mr-4 embla__prev" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next" onClick={scrollNext}>
          Next
        </button>
      </div>
      <div className="overflow-hidden w-full h-full" ref={viewportRef}>
        <div className="flex -ml-3 h-full select-none">
          {items.map((item) => (
            <div className="relative pl-3 min-w-full h-full" key={item.id}>
              <Item {...mediaByIndex(item.id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
