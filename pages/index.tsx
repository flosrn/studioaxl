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
          let data = this;
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
      <section className="h-screen flex flex-col justify-center items-center">
        <div className="relative flex flex-col justify-center text-left w-5/6 sm:w-auto pb-20">
          <h1 className="flex flex-col text-8xl md:flex-row md:text-9xl font-sage">
            <div className="relative">
              <span>Studio</span> <span className="md:ml-2 md:mt-0">axl</span>
              <div
                id="circle"
                className="absolute right-0 md:-right-20 top-16 md:top-16 w-24 h-24 md:w-36 md:h-36 rounded-full opacity-75 bg-gold backdrop-blur"
              />
            </div>
          </h1>
          <h5 className="text-xl font-futura tracking-wider -mt-2 md:-ml-24">
            {t("home.hero.subtitle")}
          </h5>
        </div>
        {/* <div className="absolute bottom-0 flex flex-col justify-center items-center xl:items-start w-full">*/}
        {/*  <Cookie />*/}
        {/* </div>*/}
        <div className="absolute bottom-0 w-full flex justify-center items-start">
          <Arrow nextSectionId={1} />
        </div>
      </section>
      {/*
       =================
       SECTION 1 - Axelle
       =================
       */}
      <section id="section1" className="flex justify-center items-center pt-48 pb-56">
        <div className="relative flex flex-col items-center md:flex-row-reverse justify-around w-full">
          <div className="hidden md:block absolute -top-32 -left-14 z-10 svgQuotes">
            <svg width={267.827} height={278.966} viewBox="0 0 267.827 278.966">
              <g data-name="Groupe 72">
                <path
                  d="M172.276 444.283l83.466 106.55-41.733 30.845-107.055-137.1 107.055-141.866 41.438 30.636zm119.081 0l83.424 106.55-41.733 30.845-107.055-137.1 107.054-141.866 41.438 30.636z"
                  fill="#ffebd8"
                  transform="translate(-106.954 -302.712)"
                />
              </g>
            </svg>
          </div>
          <div className="relative w-full md:w-1/2 h-80 md:h-156">
            <Image
              src="/images/studio_axl.png"
              layout="fill"
              className="absolute object-cover object-center z-0 svgQuotes"
            />
            <div className="hidden md:block absolute -bottom-32 right-5 z-10 svgQuotes">
              <svg width={231.475} height={241.103} viewBox="0 0 231.475 241.103">
                <path
                  d="M163.41 425.068l72.138 92.088-36.069 26.659-92.525-118.491 92.524-122.612 35.814 26.477zm102.918 0l72.1 92.088-36.068 26.659-92.524-118.491 92.524-122.612 35.814 26.477z"
                  fill="#ffebd8"
                  transform="rotate(180 169.214 271.908)"
                />
              </svg>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 flex justify-center items-center md:justify-end">
            <div className="w-full md:w-128 flex flex-col justify-center md:justify-center md:items-end">
              <div className="md:hidden absolute -left-8 -top-14 z-10">
                <svg width={139.344} height={142.644} viewBox="0 0 79.344 82.644">
                  <path
                    d="M126.306 344.653l24.727 31.566-12.364 9.138-31.715-40.617 31.715-42.029 12.276 9.076zm35.278 0l24.716 31.565-12.364 9.138-31.717-40.616 31.715-42.029 12.276 9.076z"
                    transform="translate(-106.954 -302.712)"
                    fill="#ffebd8"
                  />
                </svg>
              </div>
              <div className="w-full flex items-center flex-col text-center md:items-end md:text-right md:pr-12 lg:pr-16 xl:pr-24 md:-mt-18">
                <div className="flex justify-center items-center mt-10">
                  <span className="font-sage text-6xl">axl</span>
                </div>
                <div className="w-10/12 sm:w-8/12 mt-10 tracking-wide">
                  Diplômée d’un Mastère en Direction Artistique et forte de plusieurs années
                  d’expériences, je vous propose mes services en tant que DA pleine de sens.{" "}
                </div>

                <div className="w-10/12 sm:w-8/12 mt-10 text-sm tracking-wide font-light leading-6">
                  Je fais un métier que j’aime, qui m’anime, me passionne. Cette passion, c’est au
                  service de l’autre que je souhaite la mettre. Tous les projets méritent de
                  l’attention et toutes vos demandes la mienne.
                </div>

                <div className="mt-10 text-xs tracking-wide">
                  axelle malard . creative freelance
                </div>
              </div>

              <div className="md:hidden absolute -right-5 -bottom-10 z-10">
                <svg width={95.079} height={99.033} viewBox="0 0 95.079 99.033">
                  <path
                    d="M23.189 50.258L52.82 88.083 38 99.033 0 50.363 38 0l14.71 10.876zm42.274 0l29.616 37.825-14.816 10.95-38-48.67L80.263 0l14.71 10.876z"
                    fill="#ffebd8"
                    transform="rotate(180 47.54 49.517)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*
       =================
       SECTION 2 - Services
       =================
       */}
      <LayoutSection
        sectionId={2}
        title="Mes services"
        subtitle="Je vous propose un grand choix de services pour lesquels engager une démarche de Direction Artistique.
Trouvons ensemble la réponse adaptée à votre besoin."
      >
        <div className="flex flex-row flex-wrap w-9/12 sm:w-8/12 md:w-8/12 mx-auto">
          <ServiceItem
            icon={<SvgBranding />}
            title="Image de marque"
            content="Vous créez votre entreprise ou souhaitez modifier votre image de marque ? Nous créerons
          ensemble une identité visuelle en adéquation avec vos attentes et celles du marché."
            hoverHandler={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              svgBrandingAnimation("onHover", event.type)
            }
            scrollHandler={() => svgBrandingAnimation("onScroll")}
          />
          <ServiceItem
            icon={<SvgAdvertasing />}
            title="Publicité"
            content="Vous souhaitez promouvoir votre projet ? Réalisons une multitude de supports imprimés et numériques : flyer, cartes de visite, visuels destinés aux réseaux sociaux…"
            hoverHandler={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              svgAdvertasingAnimation("onHover", event.type)
            }
            scrollHandler={() => svgAdvertasingAnimation("onScroll")}
          />
          <ServiceItem
            icon={<SvgWeb />}
            title="Design web  . mobile"
            content="Vous souhaitez une interface ergonomique en accord avec votre identité visuelle ? Les tendances évoluent sans cesse, trouvons alors votre propre tonalité."
            hoverHandler={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              svgWebAnimation("onHover", event.type)
            }
            scrollHandler={() => svgWebAnimation("onScroll")}
          />
          <ServiceItem
            icon={<SvgSignage />}
            title="Signalétique . espaces"
            content="Vous souhaitez donner vie à vos espaces ? De la signalétique intérieur à extérieur à la création de supports promotionnels, audio ou vidéo, nous créerons ensemble le bon support."
            hoverHandler={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              svgSignageAnimation("onHover", event.type)
            }
            scrollHandler={() => svgSignageAnimation("onScroll")}
          />
          <ServiceItem
            icon={<SvgWrite />}
            title="Design éditorial"
            content="Vous avez l’envie de mettre en page vos créations, promouvoir votre entreprise, partager un évènement sous forme de livrets ou formes particulières ? Allons-y !"
            hoverHandler={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              svgWriteAnimation("onHover", event.type)
            }
            scrollHandler={() => svgWriteAnimation("onScroll")}
          />
          <ServiceItem
            icon={<SvgEditorial />}
            title="Rédaction . corrections"
            content="Je propose la vérification et création de contenu rédactionnel pour que vos supports aient du sens dans leur fond comme dans leur forme."
            hoverHandler={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              svgEditorialAnimation("onHover", event.type)
            }
            scrollHandler={() => svgEditorialAnimation("onScroll")}
          />
        </div>
      </LayoutSection>
      {/*
       =================
       SECTION 3 - projets
       =================
       */}
      <LayoutSection sectionId={3} title="Projets">
        <div className="w-10/12">
          {/*<div className="mt-20 space-y-10">*/}
          {/*  <div id="projects1" className="ml-56 space-x-12 whitespace-nowrap">*/}
          {/*    <Link href="/project/[...slug]" as={`/project/${allProjects?.[0].slug}`}>*/}
          {/*      <a>*/}
          {/*        <div*/}
          {/*          className="rounded-5xl bg-purple-500 w-128 h-56 inline-flex cursor-pointer"*/}
          {/*          style={{*/}
          {/*            background: `url(${dashboardURL}${allProjects?.[0]?.coverImage.formats.medium.url})`,*/}
          {/*          }}*/}
          {/*        />*/}
          {/*      </a>*/}
          {/*    </Link>*/}
          {/*    <div className="rounded-5xl bg-gray-500 w-128 h-56 inline-flex" />*/}
          {/*    <div className="rounded-5xl bg-yellow-700 w-128 h-56 inline-flex" />*/}
          {/*    <div className="rounded-5xl bg-red-200 w-128 h-56 inline-flex" />*/}
          {/*    <div className="rounded-5xl bg-green-200 w-128 h-56 inline-flex" />*/}
          {/*    /!*<div className="rounded-5xl bg-blue-300 w-128 h-56 inline-flex" />*!/*/}
          {/*  </div>*/}
          {/*  <div id="projects2" className="space-x-12 whitespace-nowrap">*/}
          {/*    <div className="rounded-5xl bg-purple-200 w-128 h-56 inline-flex" />*/}
          {/*    <div className="rounded-5xl bg-gray-500 w-128 h-56 inline-flex" />*/}
          {/*    <div className="rounded-5xl bg-yellow-700 w-128 h-56 inline-flex" />*/}
          {/*    <div className="rounded-5xl bg-red-200 w-128 h-56 inline-flex" />*/}
          {/*    /!*<div className="rounded-5xl bg-green-200 w-128 h-56 inline-flex" />*!/*/}
          {/*    /!*<div className="rounded-5xl bg-green-200 w-128 h-56 inline-flex" />*!/*/}
          {/*  </div>*/}
          {/*  <div id="projects3" className="ml-36 space-x-12 whitespace-nowrap">*/}
          {/*    <div className="rounded-5xl bg-indigo-500 w-128 h-56 inline-flex" />*/}
          {/*    <div className="rounded-5xl bg-gray-500 w-128 h-56 inline-flex" />*/}
          {/*    <div className="rounded-5xl bg-green-900 w-128 h-56 inline-flex" />*/}
          {/*    <div className="rounded-5xl bg-yellow-500 w-128 h-56 inline-flex" />*/}
          {/*    /!*<div className="rounded-5xl bg-green-900 w-w-128 h-56 inline-flex" />*!/*/}
          {/*    /!*<div className="rounded-5xl bg-blue-400 w-w-128 h-56 inline-flex" />*!/*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className="py-6 flex flex-col justify-center sm:py-12 w-full">
            <div className="relative w-full py-3 px-6 bg-red-200 overflow-hidden">
              <div
                id="projectsContainer"
                className="w-full grid grid-cols-50 grid-rows-50 grid-flow-col gap-3"
              >
                <Link href="/project/[...slug]" as={`/project/${allProjects?.[0].slug}`}>
                  <a>
                    <div
                      className="h-36 bg-white rounded-lg shadow-xl projects cursor-pointer"
                      style={{
                        background: `no-repeat url(${dashboardURL}${allProjects?.[0]?.coverImage.formats.medium.url}) bottom`,
                      }}
                    />
                  </a>
                </Link>
                <Link href="/project/[...slug]" as={`/project/${allProjects?.[1].slug}`}>
                  <a>
                    <div
                      className="h-36 bg-white rounded-lg shadow-xl projects cursor-pointer"
                      style={{
                        background: `no-repeat url(${dashboardURL}${allProjects?.[1]?.coverImage.formats.medium.url}) bottom`,
                      }}
                    />
                  </a>
                </Link>
                <Link href="/project/[...slug]" as={`/project/${allProjects?.[2].slug}`}>
                  <a>
                    <div
                      className="h-36 bg-white rounded-lg shadow-xl projects cursor-pointer"
                      style={{
                        background: `no-repeat url(${dashboardURL}${allProjects?.[2]?.coverImage.formats.medium.url}) bottom`,
                      }}
                    />
                  </a>
                </Link>
                <div className="h-36 bg-white rounded-lg shadow-xl projects"></div>
                <div className="h-36 bg-white rounded-lg shadow-xl projects"></div>
                <div className="h-36 bg-white rounded-lg shadow-xl projects"></div>
                <div className="h-36 bg-white rounded-lg shadow-xl projects"></div>
                <div className="h-36 bg-white rounded-lg shadow-xl projects"></div>
                <div className="h-36 bg-white rounded-lg shadow-xl projects"></div>
                <div className="h-36 bg-white rounded-lg shadow-xl projects"></div>
                <div className="h-36 bg-white rounded-lg shadow-xl projects"></div>
                <div className="h-36 bg-white rounded-lg shadow-xl projects"></div>
                <div className="h-36 bg-white rounded-lg shadow-xl projects"></div>
                <div className="h-36 bg-white rounded-lg shadow-xl projects"></div>
              </div>
            </div>
          </div>
        </div>
      </LayoutSection>
      {/*
       =================
       SECTION 4 - Valeurs
       =================
       */}
      <LayoutSection sectionId={4} title="Pourquoi me faire confiance ?">
        <div className="relative flex flex-col items-center justify-around w-full mt-10">
          <div className="flex flex-col justify-center items-center w-full px-12">
            <div className="flex justify-center items-center flex-col md:flex-row md:justify-center md:items-center flex-wrap md:mt-24 w-full space-y-6 md:space-x-36">
              <span id="word1" className="font-sage text-5xl md:text-7xl md:mb-20">
                Histoire
              </span>
              <span id="word2" className="font-sage text-5xl md:text-4xl">
                Conseil
              </span>
              <span id="word3" className="font-sage text-5xl md:text-5xl md:mb-10">
                Flexibilité
              </span>
            </div>
            <div className="flex justify-center items-center flex-col md:flex-row md:justify-center md:items-center flex-wrap mt-6 md:mt-12  mb-12 md:mb-56 w-full space-y-6 md:space-x-24">
              <span id="word4" className="font-sage text-5xl md:text-6xl md:-mb-32">
                Confiance
              </span>
              <span id="word5" className="font-sage text-5xl md:text-3xl">
                Écoute
              </span>
              <span id="word6" className="font-sage text-5xl md:text-5xl md:mb-10">
                Finesse
              </span>
              <span id="word7" className="font-sage text-5xl md:text-7xl md:mt-20">
                Concept
              </span>
            </div>
          </div>
          <div className="relative flex flex-row flex-wrap items-center justify-center w-10/12 mx-auto mt-12">
            <ValueItem
              icon={<SvgSense />}
              title="Le sens"
              content="Je fais mon métier pour donner du sens à ce que je fais. Tant dans le fond, que dans la forme. Ensemble, nous créerons notre propre harmonie."
              hoverHandler={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                svgSenseAnimation("onHover", event.type)
              }
              scrollHandler={() => svgSenseAnimation("onScroll")}
            />
            <ValueItem
              icon={<SvgEmpathie />}
              title="L'empathie"
              content="L’empathie, c’est se mettre à la place de l’autre. Je ne cesse en permanence de me mettre à la fois à la place de mon client et à la fois à la place de son public."
              hoverHandler={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                svgEmpathyAnimation("onHover", event.type)
              }
              scrollHandler={() => svgEmpathyAnimation("onScroll")}
            />
            <ValueItem
              icon={<SvgPrecision />}
              title="La précision"
              content="Mon goût du détail et du travail qualitatif me pousse en permanence à me remettre en question. J’ai acquis une rapidité d’exécution forte et puissante en maintenant un haut seuil d’exigence."
              hoverHandler={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                svgPrecisionAnimation("onHover", event.type)
              }
              scrollHandler={() => svgPrecisionAnimation("onScroll")}
            />
          </div>
        </div>
      </LayoutSection>
      {/*
       =================
       SECTION 5 - Formations
       =================
       */}
      <LayoutSection sectionId={5} title="Studio axl ?">
        <div className="w-full flex flex-col justify-center items-center md:justify-start max-w-7xl">
          <div className="relative w-full flex flex-col justify-center items-center md:justify-start pl-6 md:pl-0">
            <div className="absolute left-12 -top-12 md:-left-24 md:-top-24 w-20 h-20 md:w-36 md:h-36 rounded-full opacity-75 bg-pink backdrop-blur" />
            <span className="w-full font-sage text-center md:text-left text-3xl md:text-5xl">
              Axelle Malard
            </span>
            <span className="w-full font-sage text-center md:text-left text-3xl md:justify-start md:text-5xl mt-3">
              une Directrice Artistique
            </span>
          </div>
          <div className="w-full flex mt-24 pl-6 md:pl-0">
            <div className="w-full flex justify-center md:justify-start md:w-1/2">
              <Image src="/images/AxelleMobile-light.jpg" width={544} height={576} />
            </div>
            <div className="hidden md:flex w-full items-center md:w-1/2 pl-10 pr-6 md:pr-0">
              <div className="w-full">
                <h3 className="w-full py-10 text-7xl font-sage">Écoute</h3>
                <h3 className="w-full py-10 text-7xl font-sage text-right">Sourire</h3>
                <h3 className="w-full py-10 text-7xl font-sage">Singularité</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center  mx-auto mt-20">
            <div className="px-6 xl:px-0">
              <FormationItem
                date="2018-2020"
                diploma="Mastère Direction Artistique Numérique"
                school="Institut Supérieur des Arts Appliqués . Toulouse"
                contract="Contrat professionnel - Graphic Designer"
                society="Newrest Group International"
                textDescription="Pendant ces deux années j’ai développé mes compétences en gestion de projet et management. En entreprise, j’ai été graphiste au sein du service communication et marketing du groupe. Pendant 3 ans (année de Bachelor comprise), j’ai été en charge de l’identité visuelle de restaurants d’entreprises, d’écoles et d’hôpitaux en terme de graphisme, d’espace et d’ambiance."
                logo={<SvgLisaa />}
              />
              <FormationItem
                date="2018-2020"
                diploma="Bachelor Concepteur Designer Graphique"
                school="Institut Supérieur des Arts Appliqués . Toulouse"
                contract="Contrat professionnel - Graphic Designer"
                society="Newrest Group International"
                textDescription="Pendant cette année, j’ai affiné ma technique au service de différents projets graphiques tout en continuant d’appliquer mes connaissances et de continuer ma formation au sein de l’entreprise Newrest. "
                logo={<SvgLisaa />}
              />
              <FormationItem
                date="2015-2017"
                diploma="BTS Design Graphique opt. Imprimé"
                school="Lycée des Arènes . Toulouse"
                textDescription="Ces deux années m’ont enseignées à penser, donner du sens à mes projets avant de passer à l’action. Piliers, elles m’ont donnés l’essence du métier de designer graphique."
                logo={<SvgBts />}
              />
              <FormationItem
                date="2014-2015"
                diploma="Mise à Niveau en Arts Appliqués"
                school="Lycée des Arènes . Toulouse"
                textDescription="Après un BAC Economique et Social, une mise à niveau est nécessaire pour rentrer dans le monde des Arts Appliqués. Cette formation a été le pilier de mon parcours. C’est grâce à elle que j’ai compris l’idée de «concept», de fond et de sens."
                logo={<SvgBts />}
              />
            </div>
          </div>
        </div>
      </LayoutSection>
      {/*
       =================
       SECTION 6 - Relations
       =================
       */}
      <LayoutSection sectionId={6} title="Des relations finements choisies">
        <div className="w-full">
          <div className="w-full xl:w-2/3 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:gap-y-10 mx-auto">
            <RelationItem
              domain="web"
              picturePath="/images/flo.png"
              name="Florian Séran"
              desc="Développeur enthousiaste"
              content="Florian m’accompagne dans tous vos projets web pour qu’ils soient à la pointe du référencement et des technologies utilisées aujourd’hui."
            />
            <RelationItem
              domain="web"
              picturePath="/images/marina.png"
              name="Marina Costanzo"
              desc="DA . designer graphique, regard extérieur"
              content="Marina m’accompagne depuis plusieurs années dans vos projets. Un regard extérieur est toujours utile en création."
            />
            <RelationItem
              domain="web"
              picturePath="/images/saveria.png"
              name="Saveria Palumbo"
              desc="Voix off . voice over"
              content="Saveria donne vie à vos supports vidéos et audio pour tous types de communication."
            />
            <RelationItem
              domain="web"
              picturePath="/images/francois.png"
              name="François Petit"
              desc="Compositeur musical . ingénieur son"
              content="François est en mesure de créer des compositions originales pour tout projet audiovisuel, donnez du cachet à vos projets, différencions-nous."
            />
          </div>
          <div className="relative w-full flex justify-center items-center h-96 mt-56 mb-32 px-6">
            <div className="hidden md:block absolute -top-52 -left-14 z-10">
              <svg width={267.827} height={278.966} viewBox="0 0 267.827 278.966">
                <g data-name="Groupe 72">
                  <path
                    d="M172.276 444.283l83.466 106.55-41.733 30.845-107.055-137.1 107.055-141.866 41.438 30.636zm119.081 0l83.424 106.55-41.733 30.845-107.055-137.1 107.054-141.866 41.438 30.636z"
                    fill="#ffebd8"
                    transform="translate(-106.954 -302.712)"
                  />
                </g>
              </svg>
            </div>
            <div className="md:hidden absolute -left-8 -top-14 z-10">
              <svg width={139.344} height={142.644} viewBox="0 0 79.344 82.644">
                <path
                  d="M126.306 344.653l24.727 31.566-12.364 9.138-31.715-40.617 31.715-42.029 12.276 9.076zm35.278 0l24.716 31.565-12.364 9.138-31.717-40.616 31.715-42.029 12.276 9.076z"
                  transform="translate(-106.954 -302.712)"
                  fill="#ffebd8"
                />
              </svg>
            </div>
            <p className="max-w-5xl text-center text-4xl md:text-6xl font-sage tracking-wider">
              Je m’entoure de personnes de confiance pour rendre tous vos projets possibles.
            </p>
            <div className="hidden md:block absolute -bottom-44 -right-14 z-10">
              <svg width={231.475} height={241.103} viewBox="0 0 231.475 241.103">
                <path
                  d="M163.41 425.068l72.138 92.088-36.069 26.659-92.525-118.491 92.524-122.612 35.814 26.477zm102.918 0l72.1 92.088-36.068 26.659-92.524-118.491 92.524-122.612 35.814 26.477z"
                  fill="#ffebd8"
                  transform="rotate(180 169.214 271.908)"
                />
              </svg>
            </div>
            <div className="md:hidden absolute -right-5 -bottom-10 z-10">
              <svg width={95.079} height={99.033} viewBox="0 0 95.079 99.033">
                <path
                  d="M23.189 50.258L52.82 88.083 38 99.033 0 50.363 38 0l14.71 10.876zm42.274 0l29.616 37.825-14.816 10.95-38-48.67L80.263 0l14.71 10.876z"
                  fill="#ffebd8"
                  transform="rotate(180 47.54 49.517)"
                />
              </svg>
            </div>
          </div>
        </div>
      </LayoutSection>
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
