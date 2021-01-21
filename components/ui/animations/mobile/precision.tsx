import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PrecisionMobile: React.FC = () => {
  useEffect(() => {
    gsap.to(".circle1", {
      scrollTrigger: {
        trigger: "#precisionSvg",
        start: "top center",
        toggleActions: "play none none reverse",
      },
      transformOrigin: "50% 50%",
      scale: 0.4,
    });
    gsap.to(".circle2", {
      scrollTrigger: {
        trigger: "#precisionSvg",
        start: "top center",
        toggleActions: "play none none reverse",
      },
      transformOrigin: "50% 50%",
      scale: 0.6,
    });
    gsap.to(".circle3", {
      scrollTrigger: {
        trigger: "#precisionSvg",
        start: "top center",
        toggleActions: "play none none reverse",
      },
      transformOrigin: "50% 50%",
      scale: 0.8,
    });
  }, []);

  return (
    <div className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 147.34 104.62"
        width="200"
        height="200"
        id="precisionSvg"
      >
        <circle
          className="circle1"
          cx="73.67"
          cy="51.71"
          r="24.93"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          strokeWidth="1.5"
        />
        <circle cx="73.67" cy="51.71" r="3.36" fill="#1d1d1b" />
        <circle
          className="circle2"
          cx="73.67"
          cy="51.71"
          r="24.93"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          strokeWidth="1.5"
        />
        <circle
          className="circle3"
          cx="73.67"
          cy="51.71"
          r="24.93"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          strokeWidth="1.5"
        />
        <circle
          cx="73.67"
          cy="51.71"
          r="24.93"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export default PrecisionMobile;
