import React, { useState } from "react";
// import dynamic from "next/dynamic";
import Image from "next/image";
import { GetStaticProps } from "next";
import { useI18n, I18nProps } from "next-rosetta";
import { gsap, Sine } from "gsap";
import { MyLocale } from "i18n";

import Header from "components/ui/header";
import Arrow from "components/ui/animations/svg-arrow";
import Footer from "components/ui/footer";
import ServiceItem from "components/ui/service-item";
import SvgWeb, { svgWebAnimation } from "components/ui/animations/services/svg-web";
import SvgWrite, { svgWriteAnimation } from "components/ui/animations/services/svg-write";
import SvgSignage, { svgSignageAnimation } from "components/ui/animations/services/svg-signage";
import SvgBranding, { svgBrandingAnimation } from "components/ui/animations/services/svg-branding";
import SvgEditorial, {
  svgEditorialAnimation,
} from "components/ui/animations/services/svg-editorial";
import SvgAdvertasing, {
  svgAdvertasingAnimation,
} from "components/ui/animations/services/svg-advertasing";
import ValueItem from "components/ui/value-item";
import SvgSense, { svgSenseAnimation } from "components/ui/animations/values/svg-sense";
import SvgEmpathie, { svgEmpathyAnimation } from "components/ui/animations/values/svg-empathy";
import SvgPrecision, { svgPrecisionAnimation } from "components/ui/animations/values/svg-precision";
import useDelayUnmout from "hooks/useDelayUnmout";
import FullscreenMenu from "components/ui/animations/fullscreen-menu";
import FormationItem from "components/ui/formation-item";
import SvgLisaa from "components/ui/svg/svg-lisaa";
import RelationItem from "components/ui/relation-item";
// import { horizontalScrollAnimation } from "utils/anims";
import { getAllProjectsForHome } from "lib/api";
import { dashboardURL } from "utils/constants";
import Link from "next/link";
import LayoutSection from "components/ui/layout-section";
import SvgBts from "components/ui/svg/svg-bts";
import Carousel from "components/ui/Carousel/carousel";
import HowWork from "components/sections/HowWork";
import ByTheWay from "components/sections/ByTheWay";
import Projects from "components/sections/Projects";
import Intro from "components/sections/Intro";
import WorkTogether from "components/sections/WorkTogether";
// import Cookie from "components/ui/cookie";

interface Props {
  allProjects: any;
}

const HomePage: React.FC<Props> = ({ allProjects }) => {
  const { t } = useI18n<MyLocale>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const shouldRenderChild = useDelayUnmout(isOpen, 400);

  function random(min, max) {
    const delta = max - min;
    return (direction = 1) => (min + delta * Math.random()) * direction;
  }

  const randomX = random(10, 20);
  const randomY = random(20, 30);
  const randomDelay = random(0, 1);
  const randomTime = random(3, 5);
  const randomTime2 = random(5, 10);
  const randomAngle = random(8, 12);

  function rotate(target, direction) {
    gsap.to(target, randomTime2(), {
      rotation: randomAngle(direction),
      delay: randomDelay(),
      ease: Sine.easeInOut,
      onComplete: rotate,
      onCompleteParams: [target, direction * -1],
    });
  }

  function moveX(target, direction) {
    gsap.to(target, randomTime(), {
      x: randomX(direction),
      ease: Sine.easeInOut,
      onComplete: moveX,
      onCompleteParams: [target, direction * -1],
    });
  }

  function moveY(target, direction) {
    gsap.to(target, randomTime(), {
      y: randomY(direction),
      ease: Sine.easeInOut,
      onComplete: moveY,
      onCompleteParams: [target, direction * -1],
    });
  }

  React.useEffect(() => {
    const circle = document.getElementById("circle");
    gsap.set(circle, {
      x: randomX(-1),
      y: randomX(1),
      rotation: randomAngle(-1),
    });

    moveX(circle, 1);
    moveY(circle, -1);
    rotate(circle, 1);
  }, []);

  React.useEffect(() => {
    //   const projects1 = document.getElementById("projects1");
    //   const projects2 = document.getElementById("projects2");
    //   const projects3 = document.getElementById("projects3");

    // const projectsContainer = document.getElementById("projectsContainer");
    // const projectsContainerWidth = projectsContainer.offsetWidth / 3;
    // console.log("projectsContainerWidth : ", projectsContainerWidth);

    const sections = gsap.utils.toArray(".projects");
    // @ts-ignore
    const sectionItemWidth = sections[0]?.offsetWidth;
    console.log("sectionItemWidth : ", sectionItemWidth);

    // const test = projectsContainer.scrollWidth - document.documentElement.clientWidth;

    const toto = -200;
    // console.log("toto : ", toto);

    const section3 = document.querySelector("#section3");
    // @ts-ignore
    const section3Width = section3?.offsetWidth;

    gsap.to(".projects", {
      xPercent: toto,
      // xPercent: function (index, target, targets) {
      //   if (index === 1 || index === 4 || index === 7 || index === 10) return -250;
      //   if (index === 2 || index === 5 || index === 8 || index === 11) return -150;
      //   return `${-200}`;
      // },
      ease: "none",
      scrollTrigger: {
        trigger: "#section3",
        pin: true,
        scrub: 1,
        // markers: true,
        start: "center center",
        // end: "center bottom",
        // invalidateOnRefresh: true,

        // snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        // end: () => "+=" + (projectsContainer.offsetWidth - window.innerWidth),
        end: () => `+=${section3Width}`,
      },
    });

    // gsap.from(".projects", {
    //   // xPercent: toto,
    //   opacity: function (index, target, targets) {
    //     if (index > 5) return 0.6;
    //   },
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: "#section3",
    //     pin: true,
    //     scrub: 1,
    //     markers: true,
    //     start: "center center",
    //     // end: "center bottom",
    //     // invalidateOnRefresh: true,
    //
    //     // snap: 1 / (sections.length - 1),
    //     // base vertical scrolling on how wide the container is so it feels more natural.
    //     // end: () => "+=" + (projectsContainer.offsetWidth - window.innerWidth),
    //     end: () => "+=" + document.querySelector("#section3").offsetWidth,
    //   },
    // });

    //
    //   const containerWidth1 = projects1.offsetWidth + 1900;
    //   const containerWidth2 = projects2.offsetWidth + 1900;
    //   let containerWidth3 = projects3.offsetWidth + 1900;
    //
    // horizontalScrollAnimation(projectsContainer, projectsContainerWidth, 0.6);

    // horizontalScrollAnimation(projects1, containerWidth1, 0.6);
    //   horizontalScrollAnimation(projects2, containerWidth2, 0.7);
    //   horizontalScrollAnimation(projects3, containerWidth3, 0.8);
    //
    //   containerWidth3 += 1000;
    //
    // const section = document.getElementById("section3");
    // gsap.to(section, {
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: projectsContainer,
    //     start: "center top+=200",
    //     end: () => `+=${projectsContainerWidth}`,
    //     // endTrigger: "#section5",
    //     // markers: true,
    //     pin: section,
    //   },
    // });
  }, []);

  const wordAnim = (word: HTMLElement, pos: number) => {
    (function () {
      const blurProperty: string = gsap.utils.checkPrefix("filter");
      const blurExp = /blur\((.+)?px\)/;
      const getBlurMatch = (target) => {
        const test: string | number = gsap.getProperty(target, blurProperty) || "";
        if (typeof test !== "number") {
          return test.match(blurExp) || [];
        }
      };
      gsap.registerPlugin({
        name: "blur",
        get(target) {
          return +getBlurMatch(target)[1] || 0;
        },
        init(target, endValue) {
          const data = this;
          let filter = gsap.getProperty(target, blurProperty);
          const endBlur = `blur(${endValue}px)`;
          const match = getBlurMatch(target)[0];
          let index;
          if (filter === "none") {
            filter = "";
          }
          if (match && typeof filter !== "number") {
            index = filter.indexOf(match);
            endValue = filter.substr(0, index) + endBlur + filter.substr(index + match.length);
          } else {
            endValue = filter + endBlur;
            filter += filter ? " blur(0px)" : "blur(0px)";
          }
          data.target = target;
          data.interp = gsap.utils.interpolate(filter, endValue);
        },
        render(progress, data) {
          data.target.style[blurProperty] = data.interp(progress);
        },
      });
    })();

    gsap.from(word, {
      opacity: 0,
      blur: 8,
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: word,
        start: `top center+=${pos}px`,
        end: "bottom center",
        scrub: true,
      },
    });
  };

  React.useEffect(() => {
    const word1 = document.getElementById("word1");
    const word2 = document.getElementById("word2");
    const word3 = document.getElementById("word3");
    const word4 = document.getElementById("word4");
    const word5 = document.getElementById("word5");
    const word6 = document.getElementById("word6");
    const word7 = document.getElementById("word7");
    wordAnim(word1, 100);
    wordAnim(word2, 250);
    wordAnim(word3, 300);
    wordAnim(word4, 450);
    wordAnim(word5, 600);
    wordAnim(word6, 750);
    wordAnim(word7, 900);
  }, []);

  const handleToggleClicked = () => {
    setOpen(!isOpen);
  };

  // const FullscreenMenu = dynamic(() => import("../components/ui/animations/fullscreen-menu"));

  return (
    <div className="bg-white">
      <Header openHandler={handleToggleClicked} />
      {shouldRenderChild && <FullscreenMenu isOpen={isOpen} openHandler={handleToggleClicked} />}
      <section className="flex flex-col justify-center items-center h-screen">
        <div className="flex relative flex-col justify-center pb-20 w-5/6 sm:w-auto text-left">
          <h1 className="flex flex-col md:flex-row font-sage text-8xl md:text-9xl">
            <div className="relative">
              <span>Studio</span> <span className="md:mt-0 md:ml-2">axl</span>
              <div
                id="circle"
                className="absolute top-16 md:top-16 right-0 md:-right-20 w-24 md:w-36 h-24 md:h-36 bg-gold rounded-full opacity-75 backdrop-blur"
              />
            </div>
          </h1>
          <h5 className="-mt-2 md:-ml-24 text-xl tracking-wider font-futura">
            {t("home.hero.subtitle")}
          </h5>
        </div>
        {/* <div className="absolute bottom-0 flex flex-col justify-center items-center xl:items-start w-full">*/}
        {/*  <Cookie />*/}
        {/* </div>*/}
        <div className="flex absolute bottom-0 justify-center items-start w-full">
          <Arrow nextSectionId={1} />
        </div>
      </section>
      {/*
       =================
       SECTION 1 - Axelle
       =================
       */}
      <Intro />
      {/*
       =================
       SECTION 2 - Services
       =================
       */}
      <LayoutSection sectionId={2} isDark isTitleLeft title="Prestations">
        <Carousel />
        <div className="text-white">
          <h6 className="text-3xl uppercase">N'HÉSITEZ PAS...</h6>
          <p className="mt-3 text-2xl italic">
            Toutes vos demandes méritent mon attention, si votre projet ne répond pas à l'une des
            catégories, n'hésitez-pas à me contacter pour échanger.
          </p>
          <button className="py-4 px-8 mt-6 text-sm text-gold uppercase bg-transparent border border-gold border-w-1">
            Une questions ?
          </button>
        </div>
      </LayoutSection>
      {/*
       =================
       SECTION 3 - projets
       =================
       */}
      <Projects />
      {/*
       =================
       SECTION 4 - Travailler ensemble
       =================
       */}
      <WorkTogether />
      {/*
       =================
       SECTION 5 - Comment travailler ensemble
       =================
       */}
      <HowWork />
      {/*
       =================
       SECTION 6 - Au fait
       =================
       */}
      <ByTheWay />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<I18nProps<MyLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`i18n/${locale}`);
  try {
    const allProjects = (await getAllProjectsForHome()) || [];
    return { props: { table, allProjects } };
  } catch (error) {
    return { props: { table, allProjects: null } };
  }
};

export default HomePage;
