import React from "react";
import cx from "classnames";

type Props = {
  url: string;
  text: string;
  theme?: string;
  className?: string;
};

const ButtonLink: React.FC<Props> = ({ url, text, theme = "light", className }) => (
  <a
    href={url}
    className={cx(
      "py-4 px-8 text-sm text-black uppercase bg-transparent border border-black border-w-1 flex justify-center items-center tracking-widest",
      className,
      { "text-white border-white": theme === "dark" }
    )}
  >
    {text}
  </a>
);

export default ButtonLink;
