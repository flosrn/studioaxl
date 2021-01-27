import { isMobile } from "react-device-detect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
//
export const onScrollAnimation = (target: string, trigger: string, values: any) => {
  if (isMobile) {
    gsap.registerPlugin(ScrollTrigger);

    const gspaValues = values;
    gspaValues.scrollTrigger = {
      trigger,
      // markers: true,
      toggleActions: "play none none reverse",
    };
    return gsap.to(target, gspaValues);
  }
};

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
      return gsap.to(target, { x: 0, y: 0, rotate: 0, scale: 1 });
    }
    return gsap.to(target, values);
  }
};

export const onHoverAnimation = (target: string, values: any) => {
  return gsap.to(target, values);
};

export const onScrollPinElementAnimation = (target: string, trigger: string) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(target).forEach((el: HTMLElement) => {
    ScrollTrigger.create({
      trigger,
      pin: el,
      start: "top top+=200px",
      // end: "top 100px",
      endTrigger: "#animEnd",
      // markers: true,
      scrub: 1,
    });
  });
};

// const gspaValues = values || {};
// gspaValues.scrollTrigger = {
//   trigger,
//   pin: true,
//   start: "top center",
//   end: "top 100px",
//   markers: true,
//   scrub: 1,
//   // toggleActions: "play none none reverse",
// };
// return gsap.to(target, gspaValues);
