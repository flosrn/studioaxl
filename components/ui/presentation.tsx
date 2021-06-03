import React from "react";
import cx from "classnames";

type Props = {
  textAlignement: string;
  items: any;
  cta: React.ReactNode;
};

const Presentation: React.FC<Props> = ({ textAlignement = "right", items, cta }) => (
  <div className={cx("grid grid-cols-2 grid-gap-4 mt-20")}>
    <div className={cx("col-start-2 col-span-1", textAlignement)}>
      <div>
        {items.map((item: any) => (
          <>
            <div>{item.subtitle}</div>
            <div>{item.description}</div>
          </>
        ))}
      </div>
      <button className="py-4 px-8 mt-6 text-sm text-black uppercase bg-transparent border border-black border-w-1">
        Une questions ?
      </button>
    </div>
    <div className="col-span-1 col-start-1 w-full h-full bg-purple-200" />
  </div>
);

export default Presentation;
