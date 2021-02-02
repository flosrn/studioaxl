import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { onHoverAnimation, onScrollAnimation } from "utils/anims";

const Arrow: React.FC = () => {
  const arrowValues = { y: 30 };
  const circleArrowValues = { x: 23, y: -11 };
  const textArrowValues = { opacity: 1 };

  useEffect(() => {
    onScrollAnimation(".arrow", "#svgAdvertasing", arrowValues);
    onScrollAnimation("#circleArrow", "#svgAdvertasing", circleArrowValues);
    onScrollAnimation("#textArrow", "#svgAdvertasing", textArrowValues);
  }, []);

  const handleMouseEnter = () => {
    onHoverAnimation(".arrow", arrowValues);
    onHoverAnimation("#circleArrow", circleArrowValues);
    onHoverAnimation("#textArrow", textArrowValues);
  };

  const handleMouseLeave = () => {
    onHoverAnimation(".arrow", { y: 0 });
    onHoverAnimation("#circleArrow", { x: 0, y: 0 });
    onHoverAnimation("#textArrow", { opacity: 0 });
  };

  return (
    <div
      className="absolute -bottom-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link activeClass="active" to="section1" smooth duration={1500} className="cursor-pointer">
        <svg viewBox="0 0 219.23 177.55" width="250" height="250">
          <circle id="circleArrow" cx={104.2} cy={97.83} r={17.93} fill="#fde0e0" />
          <path
            className="arrow"
            d="M133 87.87l-10.39 10.34-10.34-10.34"
            fill="none"
            stroke="#161615"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
          <path
            className="arrow"
            fill="none"
            stroke="#161615"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M122.61 98.22L122.61 61.78"
          />
        </svg>
      </Link>
      <div id="textArrow" className="hidden sm:block absolute bottom-16 -right-36">
        En quoi puis-je vous aider ?
      </div>
    </div>
  );
};

export default Arrow;
