import React, { useEffect } from "react";
import { onHoverAnimation, onScrollAnimation } from "utils/anims";

const SvgEditorial: React.FC = () => {
  const circleEditorialValues = { y: 51, x: -27, scale: 0.6, fill: "#fdc594" };
  const lineEditorialLeft1Values = { x: -25, y: -6 };
  const lineEditorialLeft2Values = { x: -41, y: -6 };
  const lineEditorialLeft3Values = { x: -13, y: -6 };
  const lineEditorialRight1Values = { x: 25, y: -2 };
  const lineEditorialRight2Values = { x: 41, y: -2 };
  const lineEditorialRight3Values = { x: 13, y: -2 };

  useEffect(() => {
    onScrollAnimation("#circleEditorial", "#svgEditorial", circleEditorialValues);
    onScrollAnimation("#lineEditorialLeft1", "#svgEditorial", lineEditorialLeft1Values);
    onScrollAnimation("#lineEditorialLeft2", "#svgEditorial", lineEditorialLeft2Values);
    onScrollAnimation("#lineEditorialLeft3", "#svgEditorial", lineEditorialLeft3Values);
    onScrollAnimation("#lineEditorialRight1", "#svgEditorial", lineEditorialRight1Values);
    onScrollAnimation("#lineEditorialRight2", "#svgEditorial", lineEditorialRight2Values);
    onScrollAnimation("#lineEditorialRight3", "#svgEditorial", lineEditorialRight3Values);
  }, []);

  const handleMouseEnter = () => {
    onHoverAnimation("#circleEditorial", circleEditorialValues);
    onHoverAnimation("#lineEditorialLeft1", lineEditorialLeft1Values);
    onHoverAnimation("#lineEditorialLeft2", lineEditorialLeft2Values);
    onHoverAnimation("#lineEditorialLeft3", lineEditorialLeft3Values);
    onHoverAnimation("#lineEditorialRight1", lineEditorialRight1Values);
    onHoverAnimation("#lineEditorialRight2", lineEditorialRight2Values);
    onHoverAnimation("#lineEditorialRight3", lineEditorialRight3Values);
  };

  const handleMouseLeave = () => {
    onHoverAnimation("#circleEditorial", { y: 0, x: 0, scale: 1, fill: "#fde0e0" });
    onHoverAnimation("#lineEditorialLeft1", { x: 0, y: 0 });
    onHoverAnimation("#lineEditorialLeft2", { x: 0, y: 0 });
    onHoverAnimation("#lineEditorialLeft3", { x: 0, y: 0 });
    onHoverAnimation("#lineEditorialRight1", { x: 0, y: 0 });
    onHoverAnimation("#lineEditorialRight2", { x: 0, y: 0 });
    onHoverAnimation("#lineEditorialRight3", { x: 0, y: 0 });
  };

  return (
    <div className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <svg
        id="svgEditorial"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 180.08 172.18"
        width="185"
        height="185"
      >
        <rect
          x="49.74"
          y="77.68"
          width="74.39"
          height="46.92"
          fill="none"
          stroke="#161615"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          d="M87.26,75.79,59.39,71.35v44L87.26,120l26.82-4.43V71.35Z"
          fill="#fff"
          stroke="#161615"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path d="M87.27,75.92v44.39" fill="none" stroke="#161615" strokeWidth={2} />
        <circle id="circleEditorial" cx="133.26" cy="42.24" r="12.42" fill="#fde0e0" />
        <path
          id="lineEditorialLeft1"
          d="M66.57,100l13,1.93"
          fill="#161615"
          stroke="#161615"
          strokeLinecap="round"
          strokeWidth={2}
        />
        <path
          id="lineEditorialLeft2"
          d="M66.57,105l13,1.93"
          fill="#161615"
          stroke="#161615"
          strokeLinecap="round"
          strokeWidth={2}
        />
        <path
          id="lineEditorialLeft3"
          d="M66.57,110l13,1.93"
          fill="#161615"
          stroke="#161615"
          strokeLinecap="round"
          strokeWidth={2}
        />
        <path
          id="lineEditorialRight1"
          d="M107.65,89l-13,1.93"
          fill="#fde0e0"
          stroke="#fde0e0"
          strokeLinecap="round"
          strokeWidth={2}
        />
        <path
          id="lineEditorialRight2"
          d="M107.65,94l-13,1.93"
          fill="#fde0e0"
          stroke="#fde0e0"
          strokeLinecap="round"
          strokeWidth={2}
        />
        <path
          id="lineEditorialRight3"
          d="M107.65,99l-13,1.93"
          fill="#fde0e0"
          stroke="#fde0e0"
          strokeLinecap="round"
          strokeWidth={2}
        />
      </svg>
    </div>
  );
};

export default SvgEditorial;
