import React, { useEffect, useRef, useState, Fragment } from "react";
// import dynamic from "next/dynamic";
import Image from "next/image";
import { GetStaticProps } from "next";
import { useI18n, I18nProps } from "next-rosetta";
import { gsap, Sine } from "gsap";
import { MyLocale } from "i18n";
import { Popover, Transition } from "@headlessui/react";

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
import ButtonLink from "components/ui/ButtonLink";
import { useInView } from "react-intersection-observer";
import Fade from "react-reveal/Fade";
// import Cookie from "components/ui/cookie";

interface Props {
  allProjects: any;
}

const HomePage: React.FC<Props> = ({ allProjects }) => {
  const { t } = useI18n<MyLocale>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [bgIsLoaded, setBgIsLoaded] = useState<boolean>(false);
  const shouldRenderChild = useDelayUnmout(isOpen, 400);

  const handleToggleClicked = () => {
    setOpen(!isOpen);
  };

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.7,
    // rootMargin: "100px",
  });

  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // el?.current?.style.display = inView ? "block" : "none";
    console.log("inView : ", inView);
    if (el) {
      console.log("el?.current : ", el?.current);
      el.current.style.background = !inView ? "#fff" : "transparent";
    }
  }, [inView]);

  const buttonRef = useRef(null); // useRef<HTMLButtonElement>(null)
  const [openState, setOpenState] = useState(false);

  const toggleMenu = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState((openState) => !openState);
    // toggle the menu by clicking on buttonRef
    buttonRef?.current?.click(); // eslint-disable-line
  };

  // Open the menu after a delay of timeoutDuration
  const onHover = (open, action) => {
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      toggleMenu(open);
    }
  };

  const handleClick = (open) => {
    setOpenState(!open); // toggle open state in React state
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="bg-white">
      <Header openHandler={handleToggleClicked} el={el} />
      {shouldRenderChild && <FullscreenMenu isOpen={isOpen} openHandler={handleToggleClicked} />}
      <section className="flex relative flex-col pt-32 pl-32 h-screen text-white">
        <Image
          src="/images/home.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="!fixed"
          onLoad={() => setBgIsLoaded(true)}
        />
        {bgIsLoaded && (
          <>
            <div className="flex fixed flex-col pb-20 w-5/6 sm:w-auto text-left">
              <h1 className="font-sage text-9xl">.axelle</h1>
            </div>
            <div className="inline fixed bottom-20 md:left-32 z-10 w-72 text-4xl italic text-white">
              <span>Keep calm and call an </span>
              <Popover as="span" className="inline-block">
                {({ open }) => (
                  <div
                    onMouseEnter={() => onHover(open, "onMouseEnter")}
                    onMouseLeave={() => onHover(open, "onMouseLeave")}
                  >
                    <Popover.Button
                      ref={buttonRef}
                      onClick={() => handleClick(open)}
                      className="italic text-gold"
                    >
                      Artistic Director
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Popover.Panel static className="absolute -top-12 -right-44 max-w-[400px]">
                        <div className="overflow-hidden py-6 px-4 text-black bg-white ring-1 ring-black ring-opacity-5 shadow-lg">
                          <div className="mb-2 text-xs not-italic">
                            <span className="mr-3 text-[#6d758d]">1.</span>{" "}
                            <span className="">
                              of a person Peaceful, quiet, especially free from anger and anxiety
                            </span>
                          </div>
                          <div className="text-xs not-italic">
                            <span className="mr-3 text-[#6d758d]">2.</span>{" "}
                            <span className="">
                              of a person Peaceful, quiet, especially free from anger and anxiety
                            </span>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </div>
                )}
              </Popover>
              <ButtonLink url="/" text=" Une devis maybe" theme="dark" className="mt-4" />
            </div>
          </>
        )}
        <div ref={ref} />
      </section>
      {/*
       =================
       SECTION 1 - Axelle
       =================
       */}
      <div ref={ref}>
        <Intro />
      </div>
      {/*
       =================
       SECTION 2 - Services
       =================
       */}
      <LayoutSection sectionId={2} isDark isTitleLeft title="Prestations">
        <Fade>
          <Carousel />
        </Fade>
        <Fade>
          <div className="text-white">
            <h6 className="tracking-widest text-gold uppercase text-md">N'HÉSITEZ PAS...</h6>
            <p className="mt-3 max-w-2xl text-3xl italic leading-relaxed">
              Toutes vos demandes méritent mon attention, si votre projet ne répond pas à l'une des
              catégories, n'hésitez-pas à me contacter pour échanger.
            </p>
            <button className="py-4 px-8 mt-6 text-sm text-gold uppercase bg-transparent border border-gold border-w-1">
              Une questions ?
            </button>
          </div>
        </Fade>
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
