import React, { useEffect } from "react";
import { onHoverAnimation, onScrollAnimation } from "utils/anims";

const SvgEditorial: React.FC = () => {
  const circleEditorialValues = { y: 50, x: -52, scale: 0.35 };
  const lineEditorialLeftValues = { fill: "#161615", stroke: "#161615" };
  const lineEditorialRightValues = { fill: "#fde0e0", stroke: "#fde0e0" };

  useEffect(() => {
    onScrollAnimation("#circleEditorial", "#svgEditorial", circleEditorialValues);
    onScrollAnimation(".lineEditorialLeft", "#svgEditorial", lineEditorialLeftValues);
    onScrollAnimation(".lineEditorialRight", "#svgEditorial", lineEditorialRightValues);
  }, []);

  const handleMouseEnter = () => {
    onHoverAnimation("#circleEditorial", circleEditorialValues);
    onHoverAnimation(".lineEditorialLeft", lineEditorialLeftValues);
    onHoverAnimation(".lineEditorialRight", lineEditorialRightValues);
  };

  const handleMouseLeave = () => {
    onHoverAnimation("#circleEditorial", { y: 0, x: 0, scale: 1 });
    onHoverAnimation(".lineEditorialLeft", { fill: "#fff", stroke: "#fff" });
    onHoverAnimation(".lineEditorialRight", { fill: "#fff", stroke: "#fff" });
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
          className="lineEditorialLeft"
          d="M66.57,100l13,1.93"
          fill="#fff"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2}
        />
        <path
          className="lineEditorialLeft"
          d="M66.57,105l13,1.93"
          fill="#fff"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2}
        />
        <path
          className="lineEditorialLeft"
          d="M66.57,110l13,1.93"
          fill="#fff"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2}
        />
        <path
          className="lineEditorialRight"
          d="M107.65,89l-13,1.93"
          fill="#fff"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2}
        />
        <path
          className="lineEditorialRight"
          d="M107.65,94l-13,1.93"
          fill="#fff"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2}
        />
        <path
          className="lineEditorialRight"
          d="M107.65,99l-13,1.93"
          fill="#fff"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2}
        />
      </svg>
    </div>
  );
};

export default SvgEditorial;
