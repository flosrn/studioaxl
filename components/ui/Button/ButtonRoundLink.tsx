import React from "react";
import cx from "classnames";

type Props = {
  url: string;
  text: string;
  theme?: string;
  className?: string;
};

const ButtonRoundLink: React.FC<Props> = ({ url, text, theme = "light", className }) => (
  <a
    href={url}
    className={cx(
      "relative z-10 py-5 px-6 text-lg font-tajawal text-black border border-black border-w-1 flex justify-center items-center tracking-widest",
      "rounded-full hover:bg-black hover:text-white transition duration-500 ease-in-out",
      className,
      { "text-white border-white": theme === "dark", "bg-white": theme === "light" }
    )}
  >
    {text}
  </a>
);

export default ButtonRoundLink;
