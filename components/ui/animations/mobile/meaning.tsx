import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MeaningMobile: React.FC = () => {
  useEffect(() => {
    gsap.to("#circleLeft", {
      scrollTrigger: {
        trigger: "#meaningSvg",
        start: "top center",
        toggleActions: "play none none reverse",
      },
      x: 15,
    });
    gsap.to("#circleRight", {
      scrollTrigger: {
        trigger: "#meaningSvg",
        start: "top center",
        toggleActions: "play none none reverse",
      },
      x: -15,
    });
    gsap.to("#dotMeaning", {
      scrollTrigger: {
        trigger: "#meaningSvg",
        start: "top center",
        toggleActions: "play none none reverse",
      },
      x: 31,
      y: -38,
    });
  }, []);

  return (
    <div className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 147.34 104.62"
        width="200"
        height="200"
        id="meaningSvg"
      >
        <circle
          id="circleLeft"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth="1.5"
          cx="44.76"
          cy="48.07"
          r="24.93"
        />
        <circle
          id="circleRight"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth="1.5"
          cx="105.22"
          cy="48.07"
          r="24.93"
        />
        <circle id="dotMeaning" fill="#fff" cx="44.92" cy="87.44" r="3.36" />
      </svg>
    </div>
  );
};

export default MeaningMobile;
