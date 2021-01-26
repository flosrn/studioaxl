import React, { useEffect } from "react";
import { onHoverAnimation, onScrollAnimation } from "utils/anims";

const SvgSignage: React.FC = () => {
  const circleSignage1Values = { y: 36, x: -82 };
  const circleSignage2Values = { fill: "#fdc594" };
  const circleSignage3Values = { fill: "#161615" };
  const pathSignage1Values = { x: 30 };
  const pathSignage2Values = { x: 20 };
  const pathSignage3Values = { x: -20 };

  useEffect(() => {
    onScrollAnimation("#circleSignage1", "#svgSignage", circleSignage1Values);
    onScrollAnimation("#circleSignage2", "#svgSignage", circleSignage2Values);
    onScrollAnimation("#circleSignage3", "#svgSignage", circleSignage3Values);
    onScrollAnimation("#pathSignage1", "#svgSignage", pathSignage1Values);
    onScrollAnimation("#pathSignage2", "#svgSignage", pathSignage2Values);
    onScrollAnimation("#pathSignage3", "#svgSignage", pathSignage3Values);
  }, []);

  const handleMouseEnter = () => {
    onHoverAnimation("#circleSignage1", circleSignage1Values);
    onHoverAnimation("#circleSignage2", circleSignage2Values);
    onHoverAnimation("#circleSignage3", circleSignage3Values);
    onHoverAnimation("#pathSignage1", pathSignage1Values);
    onHoverAnimation("#pathSignage2", pathSignage2Values);
    onHoverAnimation("#pathSignage3", pathSignage3Values);
  };

  const handleMouseLeave = () => {
    onHoverAnimation("#circleSignage1", { y: 0, x: 0 });
    onHoverAnimation("#circleSignage2", { fill: "#fff" });
    onHoverAnimation("#circleSignage3", { fill: "#fff" });
    onHoverAnimation("#pathSignage1", { x: 0 });
    onHoverAnimation("#pathSignage2", { x: 0 });
    onHoverAnimation("#pathSignage3", { x: 0 });
  };

  return (
    <div className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <svg
        id="svgSignage"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 180.08 172.18"
        width="185"
        height="185"
      >
        <circle id="circleSignage1" cx="115.47" cy="63.23" r="12.72" fill="#fde0e0" />
        <circle id="circleSignage2" cx="50.35" cy="65.01" r="6.43" fill="#fff" />
        <circle id="circleSignage3" cx="123.35" cy="108.01" r="3.43" fill="#fff" />
        <rect
          x="84.51"
          y="68.6"
          width="4.51"
          height="57.18"
          fill="none"
          stroke="#161615"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          id="pathSignage1"
          d="M95.25,68.6V79.2h22.58l5.78-5.3-6.47-5.3Z"
          fill="none"
          stroke="#161615"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          id="pathSignage2"
          d="M95.25,84.71v10.6h22.58l5.78-5.3-6.47-5.3Z"
          fill="none"
          stroke="#161615"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          id="pathSignage3"
          d="M78.27,84.71v10.6H55.7L49.91,90l6.47-5.3Z"
          fill="none"
          stroke="#161615"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
      </svg>
    </div>
  );
};

export default SvgSignage;
