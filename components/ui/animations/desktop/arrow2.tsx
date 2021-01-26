import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Link } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const Arrow: React.FC = () => {
  const handleActive = () => {
    gsap.to("#textPrecision", {
      opacity: 1,
    });
  };

  const handleInactive = () => {
    gsap.to("#textPrecision", {
      opacity: 0,
    });
  };

  return (
    <div className="relative">
      <Link activeClass="active" to="section1" smooth duration={1500} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 73.67 140.5"
          width="150"
          height="150"
          // onTapStart={handleActive}
          // onTapCancel={handleInactive}
          onMouseEnter={handleActive}
          onMouseLeave={handleInactive}
        >
          <path
            id="pathPrecision"
            d="M38.7,17.51v107L18,103.83"
            fill="none"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth="1.5"
          />
          <path
            d="M38.7,17.51v107L18"
            fill="none"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth="1.5"
          />
          <circle id="circlePrecision" cx="51.17" cy="20.47" r="4.5" />
        </svg>
      </Link>
      <div id="textPrecision" className="hidden md:block absolute bottom-3 -right-40 opacity-0">
        En quoi puis-je vous aider ?
      </div>
    </div>
  );
};

export default Arrow;
