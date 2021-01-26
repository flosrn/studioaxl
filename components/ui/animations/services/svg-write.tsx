import React, { useEffect } from "react";
import { onHoverAnimation, onScrollAnimation } from "utils/anims";

const SvgWrite: React.FC = () => {
  const circleWrite1Values = { y: 23, x: -10, scale: 0.4 };
  const circleWrite2Values = { fill: "#fdc594" };
  const circleWrite3Values = { fill: "#161615" };
  const lineWrite1Values = { x: -48 };
  const lineWrite2Values = { x: 40 };
  const lineWrite3Values = { x: -20 };

  useEffect(() => {
    onScrollAnimation("#circleWrite1", "#svgWrite", circleWrite1Values);
    onScrollAnimation("#circleWrite2", "#svgWrite", circleWrite2Values);
    onScrollAnimation("#circleWrite3", "#svgWrite", circleWrite3Values);
    onScrollAnimation("#lineWrite1", "#svgWrite", lineWrite1Values);
    onScrollAnimation("#lineWrite2", "#svgWrite", lineWrite2Values);
    onScrollAnimation("#lineWrite3", "#svgWrite", lineWrite3Values);
  }, []);

  const handleMouseEnter = () => {
    onHoverAnimation("#circleWrite1", circleWrite1Values);
    onHoverAnimation("#circleWrite2", circleWrite2Values);
    onHoverAnimation("#circleWrite3", circleWrite3Values);
    onHoverAnimation("#lineWrite1", lineWrite1Values);
    onHoverAnimation("#lineWrite2", lineWrite2Values);
    onHoverAnimation("#lineWrite3", lineWrite3Values);
  };

  const handleMouseLeave = () => {
    onHoverAnimation("#circleWrite1", { y: 0, x: 0, scale: 1 });
    onHoverAnimation("#circleWrite2", { fill: "#fff" });
    onHoverAnimation("#circleWrite3", { fill: "#fff" });
    onHoverAnimation("#lineWrite1", { x: 0 });
    onHoverAnimation("#lineWrite2", { x: 0 });
    onHoverAnimation("#lineWrite3", { x: 0 });
  };

  return (
    <div className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <svg id="svgWrite" viewBox="0 0 180.08 172.18" width="185" height="185">
        <circle id="circleWrite1" cx={109.49} cy={61.43} r={15.4} fill="#fde0e0" />
        <circle id="circleWrite2" cx={129.65} cy={85.23} r={3.86} fill="#fff" />
        <circle id="circleWrite3" cx={41.65} cy={106.23} r={3.86} fill="#fff" />
        <path
          fill="none"
          stroke="#161615"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M69.49 64.35H109.49V114.6H69.49z"
        />
        <path
          id="lineWrite1"
          fill="none"
          stroke="#161615"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M78.88 91.09L100.11 91.09"
        />
        <path
          id="lineWrite2"
          fill="none"
          stroke="#161615"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M78.88 97.8L100.11 97.8"
        />
        <path
          id="lineWrite3"
          fill="none"
          stroke="#161615"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M78.88 104.51L100.11 104.51"
        />
      </svg>
    </div>
  );
};

export default SvgWrite;
