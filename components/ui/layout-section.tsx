import React from "react";
import cx from "classnames";
import Arrow from "components/ui/animations/svg-arrow";

interface Props {
  sectionId: number;
  title: string;
  subtitle?: string;
  isDark?: boolean;
  children?: React.ReactNode;
}

const LayoutSection: React.FC<Props> = ({ sectionId, title, subtitle, isDark, children }) => {
  return (
    <section id={`section${sectionId}`} className={cx("relative", { "bg-dark": isDark })}>
      <div className="flex justify-center items-center mx-6">
        <h2 className="max-w-xl text-center text-6xl md:text-7xl font-sage">{title}</h2>
      </div>
      {subtitle && (
        <div className="flex justify-center items-center mx-6 mt-10 md:mt-20">
          <span className="max-w-lg text-center font-alegreya">{subtitle}</span>
        </div>
      )}
      <div className="flex flex-col justify-center items-center pt-24">{children}</div>
      <div className="my-72 w-full flex justify-center items-start">
        <Arrow nextSectionId={sectionId + 1} />
      </div>
    </section>
  );
};

export default LayoutSection;
