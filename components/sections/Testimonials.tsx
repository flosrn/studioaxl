import React, { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";

type Props = {};

const items = [
  {
    id: 1,
    name: "Marie Hernandez",
    job: "Designer graphique, DA",
    picture:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    description:
      "J’ai travaillé avec Axelle sur plusieurs projets, en co-direction artistique. Nous avons grandit ensemble, pendant nos études. Minutieuse, rigoureuse, elle n’a pas peur d’être honnête quand cela est nécessaire.",
  },
  {
    id: 2,
    name: "Marie Hernandez",
    job: "Designer graphique, DA",
    picture:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    description:
      "J’ai travaillé avec Axelle sur plusieurs projets, en co-direction artistique. Nous avons grandit ensemble, pendant nos études. Minutieuse, rigoureuse, elle n’a pas peur d’être honnête quand cela est nécessaire.",
  },
  {
    id: 3,
    name: "Marie Hernandez",
    job: "Designer graphique, DA",
    picture:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    description:
      "J’ai travaillé avec Axelle sur plusieurs projets, en co-direction artistique. Nous avons grandit ensemble, pendant nos études. Minutieuse, rigoureuse, elle n’a pas peur d’être honnête quand cela est nécessaire.",
  },
  {
    id: 4,
    name: "Marie Hernandez",
    job: "Designer graphique, DA",
    picture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    description:
      "J’ai travaillé avec Axelle sur plusieurs projets, en co-direction artistique. Nous avons grandit ensemble, pendant nos études. Minutieuse, rigoureuse, elle n’a pas peur d’être honnête quand cela est nécessaire.",
  },
];

const Item = ({ name, job, picture, description }) => (
  <div className="md:grid relative z-10 md:grid-cols-2 p-4 min-w-full h-full text-white">
    <div className="flex -space-x-1">
      <img
        className="inline-block m-1 -mt-3 mr-10 w-14 h-14 rounded-full ring-2 ring-white"
        src={picture}
        alt=""
      />
      <div className="mb-8 md:mb-0">
        <div className="text-lg">{name}</div>
        <div className="mb-1 text-xs group-hover:text-gray-500">{job}</div>
        <div className="flex justify-center items-center">
          <div className="flex items-center mt-2 mb-4">
            <svg
              className="mx-1 w-4 h-4 text-yellow-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="mx-1 w-4 h-4 text-yellow-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="mx-1 w-4 h-4 text-yellow-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="mx-1 w-4 h-4 text-yellow-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="mx-1 w-4 h-4 text-gray-400 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="flex relative">
      <div className="text-2xl italic">{description}</div>
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
    <div className="flex relative flex-col justify-center items-center w-full max-w-4xl text-white">
      <div className="overflow-hidden w-full h-full" ref={viewportRef}>
        <div className="flex -ml-3 h-full select-none">
          {items.map((item) => (
            <div className="relative pl-3 min-w-full h-full" key={item.id}>
              <Item {...mediaByIndex(item.id)} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex md:absolute md:bottom-10 md:left-20 justify-center items-center text-white">
        <button className="mr-4 embla__prev" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next" onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
