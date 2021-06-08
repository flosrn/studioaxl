import React from "react";
import cx from "classnames";
import ButtonLink from "components/ui/ButtonLink";
import Fade from "react-reveal/Fade";

type Props = {
  textAlignement?: string;
  items: any;
  cta?: {
    url: string;
    text: string;
  };
};

const Presentation: React.FC<Props> = ({ textAlignement = "right", items, cta }) => (
  <div className="flex justify-center">
    {/* <div className="absolute top-10 left-0 w-72 h-72 bg-rose rounded-full opacity-70 mix-blend-multiply filter blur-2xl animate-blob" />*/}
    {/* <div className="absolute top-20 -left-36 w-72 h-72 bg-red-200 rounded-full opacity-70 mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />*/}
    <Fade>
      <div
        className={cx(
          "flex justify-center items-stretch mt-20 max-w-4xl md:space-x-12 flex-col md:flex-row",
          {
            "flex-col-reverse md:flex-row-reverse md:space-x-reverse": textAlignement === "right",
          }
        )}
      >
        <div
          className={cx("flex flex-col md:w-1/2", {
            "md:text-right md:items-end": textAlignement === "left",
          })}
        >
          <div className="relative mb-12">
            {items.map((item: any) => (
              <div className="mb-3" key={item.id}>
                <div className="mb-2 text-xl">{item.subtitle}</div>
                <div className="text-xs whitespace-pre-wrap">{item.description}</div>
              </div>
            ))}
          </div>
          <ButtonLink url={cta.url} text={cta.text} className="w-[300px]" />
        </div>
        <div className="flex md:w-1/2 h-[400px] md:h-auto bg-green-200">
          <div>axl laplubel</div>
        </div>
      </div>
    </Fade>
  </div>
);

export default Presentation;
