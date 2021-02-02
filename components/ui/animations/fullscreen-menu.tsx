import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { gsap } from "gsap";

interface Props {
  isOpen: boolean;
  openHandler: () => void;
}

const FullscreenMenu: React.FC<Props> = ({ isOpen, openHandler }) => {
  const mountedStyle = { animation: "inAnimation 400ms ease-in" };
  const unmountedStyle = { animation: "outAnimation 430ms ease-in" };

  React.useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        ".menuLink",
        { y: 50, autoAlpha: 0 },
        { y: 0, delay: 0.55, autoAlpha: 1, stagger: -0.055 }
      );
    }
    gsap.to("#line1", {
      rotate: isOpen ? 43 : 0,
      y: isOpen ? 6 : 0,
    });
    gsap.to("#line2", {
      rotate: isOpen ? -43 : 0,
      y: isOpen ? -6 : 0,
    });
  }, [isOpen]);

  // gsap.to("#line1", {
  //   rotate: isOpen ? -315 : 0,
  //   y: isOpen ? 6 : 0,
  //   transformOrigin: "50%, 50%",
  // });
  // gsap.to("#line2", {
  //   rotate: isOpen ? -225 : 0,
  //   y: isOpen ? -6 : 0,
  //   transformOrigin: "50%, 50%",
  // });

  return (
    <div
      id="fullscreenMenu"
      className="fixed top-0 left-0 w-screen h-screen overflow-auto z-20 bg-white"
      style={isOpen ? mountedStyle : unmountedStyle}
    >
      <div
        id="test"
        className="w-full h-full flex flex-col justify-center items-center font-sage text-2xl"
      >
        <ScrollLink
          activeClass="active"
          to="section2"
          smooth
          duration={1500}
          className="py-3 cursor-pointer menuLink"
          onClick={openHandler}
        >
          SERVICES
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="section3"
          smooth
          duration={1500}
          className="py-3 cursor-pointer menuLink"
          onClick={openHandler}
        >
          PROJETS
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="section4"
          smooth
          duration={1500}
          className="py-3 cursor-pointer menuLink"
          onClick={openHandler}
        >
          VALEURS
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="section4"
          smooth
          duration={1500}
          className="py-3 cursor-pointer menuLink"
          onClick={openHandler}
        >
          À PROPOS
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="section1"
          smooth
          duration={1500}
          className="py-3 cursor-pointer menuLink"
          onClick={openHandler}
        >
          CONTACT
        </ScrollLink>
      </div>
    </div>
  );
};

export default FullscreenMenu;
