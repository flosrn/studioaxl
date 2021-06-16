import React, { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";

type Props = {
  items: any;
};

const Item = ({ title, description, icon, animation }) => {
  const handleMouseEvent = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    animation("onHover", event.type);
    animation("onScroll");
  };
  return (
    <div
      className="relative z-10 bg-white transition-all duration-500 ease-in-out transform hover:-translate-y-5"
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      <div className="relative flex-none px-12 pt-20 pb-12 h-full cursor-pointer">
        <div className="absolute -top-4 group-hover:-top-12 left-3">{icon}</div>
        <div className="mb-1 text-xl group-hover:text-gray-500 font-classico">{title}</div>
        <div className="text-xs">{description}</div>
      </div>
    </div>
  );
};

const Carousel: React.FC<Props> = ({ items }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    loop: true,
    align: "start",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  console.log("prevBtnEnabled : ", prevBtnEnabled);
  console.log("nextBtnEnabled : ", nextBtnEnabled);

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

  const mediaByIndex = (index) => items[index % items.length];

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
          {items?.map((item) => (
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
