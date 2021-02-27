import { isMobile } from "react-device-detect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const handleAnimation = (
  target: string,
  trigger: string,
  values: any,
  animationType: string,
  mouseEvent: string
) => {
  if (animationType === "onScroll" && isMobile) {
    gsap.registerPlugin(ScrollTrigger);

    const gspaValues = values;
    gspaValues.scrollTrigger = {
      trigger,
      start: "top center+=40px",
      // markers: true,
      toggleActions: "play none none reverse",
    };
    return gsap.to(target, gspaValues);
  }
  if (animationType === "onHover" && !isMobile) {
    if (mouseEvent === "mouseleave") {
      if (target === "#pathPrecision")
        gsap.to(target, { attr: { d: "M101.47 118.98L123.84 101.49" } });
      return gsap.to(target, { x: 0, y: 0, rotate: 0, scale: 1 });
    }
    return gsap.to(target, values);
  }
};

export const horizontalScrollAnimation = (
  target: HTMLElement,
  container: number,
  speed: number
) => {
  // const value = container * speed;
  gsap.to(target, {
    x: () => `-=${container}`,
    ease: "none",
    scrollTrigger: {
      trigger: target,
      start: "center center",
      invalidateOnRefresh: true,
      markers: true,
      scrub: 0,
      end: () => `+=${container * speed}`,
    },
  });
};
