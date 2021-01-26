import { isMobile } from "react-device-detect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const onScrollAnimation = (
  target: string,
  trigger: string,
  values: any,
  start?: string,
  onlyOnDesktop?: boolean
) => {
  let condition = false;
  if (onlyOnDesktop === undefined && isMobile) {
    condition = true;
  }
  if (onlyOnDesktop || condition) {
    gsap.registerPlugin(ScrollTrigger);

    const gspaValues = values;
    gspaValues.scrollTrigger = {
      trigger,
      start: start || "top center",
      // markers: true,
      toggleActions: "play none none reverse",
    };
    return gsap.to(target, gspaValues);
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
