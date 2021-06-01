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

type Props = {};

const items = [
  {
    id: 1,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner vie à vos espaces ? De la signalétique intérieur à extérieur à la création de supports promotionnels, audio ou vidéo, nous créerons ensemble le bon support.",
    icon: <SvgSignage />,
  },
  {
    id: 2,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner vie à vos espaces ? De la signalétique intérieur à extérieur à la création de supports promotionnels, audio ou vidéo, nous créerons ensemble le bon support.",
    icon: <SvgBranding />,
  },
  {
    id: 3,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner vie à vos espaces ? De la signalétique intérieur à extérieur à la création de supports promotionnels, audio ou vidéo, nous créerons ensemble le bon support.",
    icon: <SvgAdvertasing />,
  },
  {
    id: 4,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner vie à vos espaces ? De la signalétique intérieur à extérieur à la création de supports promotionnels, audio ou vidéo, nous créerons ensemble le bon support.",
    icon: <SvgWeb />,
  },
];

const Item = ({ title, description, icon }) => (
  <div className="w-[350px] mr-32">
    <div className="relative cursor-pointer w-[600px] flex-none max-w-full">
      <div className="">{icon}</div>
      <div className="">{title}</div>
      <div className="">{description}</div>
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
    <div className="w-full overflow-hidden mb-12" ref={emblaRef}>
      <div className="grid grid-flow-col auto-cols-[25%] -ml-96">
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
