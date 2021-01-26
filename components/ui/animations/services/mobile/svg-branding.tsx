import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SvgAdvertasing: React.FC = () => {
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
      <svg viewBox="0 0 107.72 107.72" width="100" height="100">
        <path
          d="M29.57 55.46L57.55 30l14.64 47.92L35 73.1zm-8.07 3.037l4.351-1.33 5.094 16.659-4.352 1.33z"
          fill="none"
          stroke="#161615"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <circle cx={73.3} cy={35.08} r={5.28} fill="#161615" />
        <circle cx={86.58} cy={46.06} r={5.28} fill="#161615" />
        <circle cx={81.71} cy={62.6} r={5.28} fill="#fde0e0" />
      </svg>
    </div>
  );
};

export default SvgAdvertasing;
