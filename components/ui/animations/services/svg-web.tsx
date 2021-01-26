import React, { useEffect } from "react";
import { onHoverAnimation, onScrollAnimation } from "utils/anims";

const SvgWeb: React.FC = () => {
  const circleWeb1Values = { y: 16, x: -26, scale: 7 };
  const circleWeb2Values = { y: 17, x: 8, scale: 5, fill: "#fdc594" };
  const circleWeb3Values = { y: -26, x: 3, scale: 12, fill: "#fde0e0" };

  useEffect(() => {
    onScrollAnimation("#circleWeb1", "#svgWeb", circleWeb1Values);
    onScrollAnimation("#circleWeb2", "#svgWeb", circleWeb2Values);
    onScrollAnimation("#circleWeb3", "#svgWeb", circleWeb3Values);
  }, []);

  const handleMouseEnter = () => {
    onHoverAnimation("#circleWeb1", circleWeb1Values);
    onHoverAnimation("#circleWeb2", circleWeb2Values);
    onHoverAnimation("#circleWeb3", circleWeb3Values);
  };

  const handleMouseLeave = () => {
    onHoverAnimation("#circleWeb1", { y: 0, x: 0, scale: 1 });
    onHoverAnimation("#circleWeb2", { y: 0, x: 0, scale: 1, fill: "#161615" });
    onHoverAnimation("#circleWeb3", { y: 0, x: 0, scale: 1, fill: "#161615" });
  };

  return (
    <div className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <svg
        id="svgWeb"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 107.72 107.72"
        width="185"
        height="185"
      >
        <path d="M78.17 68.06H29.54v-31.7h48.63zm-47.45-1.17H77V37.54H30.72z" fill="#161615" />
        <path fill="#161615" d="M30.13 41.51h47.46v1.17H30.13z" />
        <circle id="circleWeb1" cx="33.27" cy="39.65" r=".67" fill="#161615" />
        <circle id="circleWeb2" cx="35.47" cy="39.65" r=".67" fill="#161615" />
        <circle id="circleWeb3" cx="37.67" cy="39.65" r=".67" fill="#161615" />
        <path fill="#161615" d="M51.3 67.48h1.17v8.54H51.3zM55.24 67.48h1.17v8.54h-1.17z" />
        <path fill="#161615" d="M47.25 75.43h13.22v1.17H47.25z" />
      </svg>
    </div>
  );
};

export default SvgWeb;
