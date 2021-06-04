import React from "react";
import cx from "classnames";
import Arrow from "components/ui/animations/svg-arrow";

interface Props {
  sectionId: number;
  title: string;
  subtitle?: string;
  isDark?: boolean;
  isTitleLeft?: boolean;
  isArrow?: boolean;
  children?: React.ReactNode;
}

const LayoutSection: React.FC<Props> = ({
  sectionId,
  title,
  subtitle,
  isDark,
  isTitleLeft,
  isArrow,
  children,
}) => (
  <section id={`section${sectionId}`} className={cx("relative py-24", { "bg-dark": isDark })}>
    <div className="mx-auto max-w-container">
      <div className="mx-8 sm:mx-8 md:mx-12 lg:mx-24">
        <div className={cx("flex items-center", { "justify-center": !isTitleLeft })}>
          <h2
            className={cx("max-w-xl text-2xl md:text-3xl text-center uppercase", {
              "text-white": isDark,
            })}
          >
            {title}
          </h2>
        </div>
        {subtitle && (
          <div className="flex justify-center items-center mx-6 mt-10 md:mt-20">
            <span className={cx("max-w-lg font-alegreya text-center", { "text-white": isDark })}>
              {subtitle}
            </span>
          </div>
        )}
        <div className="">{children}</div>
        {isArrow && (
          <div className="flex justify-center items-start my-72 w-full">
            <Arrow nextSectionId={sectionId + 1} />
          </div>
        )}
      </div>
    </div>
  </section>
);

export default LayoutSection;
