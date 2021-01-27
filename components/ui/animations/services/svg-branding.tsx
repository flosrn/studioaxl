import React from "react";
import { handleAnimation } from "utils/anims";

export const circleBrandingValues = { y: -22, x: 34, scale: 0.5 };
export const pathBranding1Values = { rotate: 180, transformOrigin: "50% 50%" };

export const svgBrandingAnimation = (animationType: string, mouseEvent?: string) => {
  handleAnimation(
    "#circleBranding",
    "#svgBranding",
    circleBrandingValues,
    animationType,
    mouseEvent
  );
  handleAnimation("#pathBranding1", "#svgBranding", pathBranding1Values, animationType, mouseEvent);
};

const SvgBranding: React.FC = () => {
  return (
    <div className="cursor-pointer">
      <svg
        id="svgBranding"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 107.72 107.72"
        width="185"
        height="185"
      >
        <circle id="circleBranding" cx="44.54" cy="55.7" r="10.53" fill="#fde0e0" />
        <path
          id="pathBranding1"
          d="M56.34 71.33L45.49 59.49V36.38h21.9v23.11zM46.67 59l9.68 10.6L66.22 59V37.56H46.67z"
          fill="#161615"
        />
        <path
          d="M56.44 65.43a2.35 2.35 0 112.35-2.35 2.35 2.35 0 01-2.35 2.35zm0-3.52a1.17 1.17 0 100 2.34 1.17 1.17 0 000-2.34z"
          fill="#161615"
        />
      </svg>
    </div>
  );
};

export default SvgBranding;
