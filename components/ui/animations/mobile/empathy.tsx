import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EmpathyMobile: React.FC = () => {
  useEffect(() => {
    gsap.to("#dotEmpathy", {
      scrollTrigger: {
        trigger: "#empathySvg",
        start: "top center",
        toggleActions: "play none none reverse",
      },
      y: 32,
      x: 30,
    });
  }, []);

  return (
    <div className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 147.34 104.62"
        width="200"
        height="200"
        id="empathySvg"
      >
        <circle
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth="1.5"
          cx="73.67"
          cy="51.71"
          r="24.93"
        />
        <circle id="dotEmpathy" fill="#fff" cx="44.76" cy="20.91" r="3.36" />
      </svg>
    </div>
  );
};

export default EmpathyMobile;
