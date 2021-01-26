import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
}

const Reveal: React.FC<RevealProps> = ({ children }) => {
  // const animateFrom = (el: HTMLElement, direction?: number) => {
  //   const dir = direction || 1;
  //   const y = dir * 100;
  //
  //   gsap.fromTo(
  //     el,
  //     { y, autoAlpha: 0 },
  //     {
  //       duration: 1.5,
  //       y: 0,
  //       autoAlpha: 1,
  //       ease: "expo",
  //       overwrite: "auto",
  //     }
  //   );
  // };
  //
  // const hide = (el: HTMLElement) => {
  //   gsap.set(el, { autoAlpha: 0 });
  // };

  useEffect(() => {
    // gsap.utils.toArray(".reveal").forEach((el: HTMLElement) => {
    //   // hide(el);
    //   // ScrollTrigger.create({
    //   //   trigger: el,
    //   //   onEnter: () => {
    //   //     animateFrom(el);
    //   //   },
    //   //   onEnterBack: () => {
    //   //     // animateFrom(el, -1);
    //   //   },
    //   //   onLeave: () => {
    //   //     hide(el);
    //   //   },
    //   // });
    //   // gsap.to(el, {
    //   //   scrollTrigger: {
    //   //     trigger: el,
    //   //     start: "top bottom",
    //   //     // toggleActions: "play none none reverse",
    //   //   },
    //   //   duration: 1.5,
    //   //   y: -100,
    //   // });
    // });
  }, []);

  return <div className="element">{children}</div>;
};

export default Reveal;
