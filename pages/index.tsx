import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { GetStaticProps } from "next";
import { useI18n, I18nProps } from "next-rosetta";
// import { isMobile } from "react-device-detect";
import { gsap, Sine } from "gsap";

import Header from "components/ui/header";
import Arrow from "components/ui/animations/desktop/arrow2";

import { MyLocale } from "i18n";
import Footer from "components/ui/footer";
import TrustItem from "components/ui/trust-item";
import FeatureItem from "components/ui/feature-item";
import SvgAdvertasing from "components/ui/animations/services/svg-advertasing";
import SvgBranding from "components/ui/animations/services/svg-branding";
import SvgEditorial from "components/ui/animations/services/svg-editorial";
import SvgWeb from "components/ui/animations/services/svg-web";
import SvgWrite from "components/ui/animations/services/svg-write";
import SvgSignage from "components/ui/animations/services/svg-signage";
// import { onScrollAnimation, onScrollPinElementAnimation } from "utils/anims";
// import { isMobile } from "react-device-detect";

const HomePage: React.FC = () => {
  const { t } = useI18n<MyLocale>();

  // const Empathy = dynamic(() => import("components/ui/animations/desktop/empathy"));
  const EmpathyMobile = dynamic(() => import("components/ui/animations/mobile/empathy"));
  // const Meaning = dynamic(() => import("components/ui/animations/desktop/meaning"));
  const MeaningMobile = dynamic(() => import("components/ui/animations/mobile/meaning"));
  // const Precision = dynamic(() => import("components/ui/animations/desktop/precision"));
  const PrecisionMobile = dynamic(() => import("components/ui/animations/mobile/precision"));

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

  return (
    <div className="bg-white">
      <Header />
      <section className="h-screen flex flex-col justify-center items-center">
        <div className="relative flex flex-col justify-center text-left w-5/6 sm:w-auto">
          <h1 className="flex flex-col text-8xl md:flex-row md:text-9xl font-sage">
            <div className="relative">
              <span>Studio</span> <span className="md:ml-2 md:mt-0">axl</span>
              <div
                id="circle"
                className="absolute right-0 md:-right-20 top-16 md:top-16 w-24 h-24 md:w-36 md:h-36 rounded-full opacity-75 bg-gold backdrop-blur"
              />
            </div>
          </h1>
          <h5 className="text-xl tracking-wider -mt-2">{t("home.hero.subtitle")}</h5>
        </div>
        <div className="absolute bottom-10 flex justify-center items-center">
          <Arrow />
        </div>
      </section>
      {/*
       =================
       SECTION 1
       =================
       */}
      <section id="section1" className="flex justify-center items-center py-48">
        <div className="relative flex flex-col items-center md:flex-row-reverse justify-around w-full">
          <div className="hidden md:block absolute -top-32 left-5 z-10 svgQuotes">
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
          <div className="relative w-5/6 sm:w-4/6 md:w-1/2 flex flex-col justify-center md:justify-center md:items-end">
            <div className="md:hidden absolute left-5 -top-10 z-10">
              <svg width={79.344} height={82.644} viewBox="0 0 79.344 82.644">
                <path
                  d="M126.306 344.653l24.727 31.566-12.364 9.138-31.715-40.617 31.715-42.029 12.276 9.076zm35.278 0l24.716 31.565-12.364 9.138-31.717-40.616 31.715-42.029 12.276 9.076z"
                  transform="translate(-106.954 -302.712)"
                  fill="#ffebd8"
                />
              </svg>
            </div>
            <div className="sm:w-full xl:w-2/3 md:pl-20 md:pr-12 lg:pr-16 xl:pr-24 md:-mt-18 text-center md:text-right flex flex-col items-end">
              <div className="md:w-2/3 mt-10 ">
                Diplômée d’un Mastère en Direction Artistique et forte de plusieurs années
                d’expériences, je vous propose mes services en tant que DA pleine de sens.{" "}
              </div>

              <div className="mt-10 text-sm italic font-light">
                Je fais un métier que j’aime, qui m’anime, me passionne. Cette passion, c’est au
                service de l’autre que je souhaite la mettre. Tous les projets méritent de
                l’attention et toutes vos demandes la mienne.
              </div>

              <div className="mt-10 text-sm font-bold italic">
                Axelle Malard, creative freelance
              </div>
            </div>

            <div className="md:hidden absolute right-5 -bottom-24 z-10">
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
      </section>

      {/*
       =================
       SECTION 2
       =================
       */}
      <section id="section2" className="flex justify-center items-center py-48">
        <div className="flex flex-row flex-wrap w-11/12 sm:w-10/12 mx-auto">
          <FeatureItem
            icon={<SvgBranding />}
            title="Image de marque"
            content="Vous créez votre entreprise ou souhaitez modifier votre image de marque ? Nous créerons
          ensemble une identité visuelle en adéquation avec vos attentes et celles du marché."
          />
          <FeatureItem
            icon={<SvgAdvertasing />}
            title="Image de marque"
            content="Vous créez votre entreprise ou souhaitez modifier votre image de marque ? Nous créerons
          ensemble une identité visuelle en adéquation avec vos attentes et celles du marché."
          />
          <FeatureItem
            icon={<SvgEditorial />}
            title="Image de marque"
            content="Vous créez votre entreprise ou souhaitez modifier votre image de marque ? Nous créerons
          ensemble une identité visuelle en adéquation avec vos attentes et celles du marché."
          />
          <FeatureItem
            icon={<SvgWeb />}
            title="Image de marque"
            content="Vous créez votre entreprise ou souhaitez modifier votre image de marque ? Nous créerons
          ensemble une identité visuelle en adéquation avec vos attentes et celles du marché."
          />
          <FeatureItem
            icon={<SvgSignage />}
            title="Image de marque"
            content="Vous créez votre entreprise ou souhaitez modifier votre image de marque ? Nous créerons
          ensemble une identité visuelle en adéquation avec vos attentes et celles du marché."
          />
          <FeatureItem
            icon={<SvgWrite />}
            title="Image de marque"
            content="Vous créez votre entreprise ou souhaitez modifier votre image de marque ? Nous créerons
          ensemble une identité visuelle en adéquation avec vos attentes et celles du marché."
          />
        </div>
      </section>
      {/*
       =================
       SECTION 3
       =================
       */}
      <section
        id="section3"
        className="mb-96 bg-dark py-12 flex flex-col justify-center items-center"
      >
        <div className="flex justify-center items-center mb-10 mx-10">
          <h3 className="text-center text-5xl md:text-6xl text-white font-sage">
            Pourquoi me faire confiance ?
          </h3>
        </div>
        <div className="md:w-full">
          {/* L'empathie */}
          <div className="w-full flex">
            <div className="md:w-4/12">
              <div className="hidden md:flex justify-center items-center">
                <span className="w-1 h-12 bg-white rounded-md" />
              </div>
              <TrustItem
                // animation={!isMobile ? <Empathy /> : <EmpathyMobile />}
                animation={<EmpathyMobile />}
                title="L'empathie"
                content="L’empathie, c’est se mettre à la place de l’autre. Dans mon métier, je ne cesse en
              permanence de mettre à la fois à la place de mon client et à la fois à la place de son
              public pour mieux entendre, comprendre et produire."
              />
            </div>
            <div className="hidden md:flex justify-center items-center md:w-4/12">
              <span className="w-1 h-full bg-white rounded-md" />
            </div>
            <div className="hidden md:flex justify-center items-center md:w-4/12">
              <span className="w-1 h-full bg-white rounded-md" />
            </div>
          </div>
          {/* Le sens */}
          <div className="w-full flex">
            <div className="hidden md:flex justify-center items-center md:w-4/12">
              <span className="w-1 h-full bg-white rounded-md" />
            </div>
            <div className="md:w-4/12">
              <TrustItem
                // animation={!isMobile ? <Meaning /> : <MeaningMobile />}
                animation={<MeaningMobile />}
                title="Le sens"
                content="Ma culture, ma veille permanente sur les nouvelles tendances et ma curiosité me
              poussent à me nourrir sans cesse de ce que je vois, sens et ressens. Cette cohérence
              nous la créerons ensemble."
              />
            </div>
            <div className="hidden md:flex justify-center items-center md:w-4/12">
              <span className="w-1 h-full bg-white rounded-md" />
            </div>
          </div>
          {/* La précision */}
          <div className="w-full flex">
            <div className="hidden md:flex justify-center items-center md:w-4/12">
              <span className="w-1 h-full bg-white rounded-md" />
            </div>
            <div className="hidden md:flex justify-center items-center md:w-4/12">
              <span className="w-1 h-full bg-white rounded-md" />
            </div>
            <div className="md:w-4/12">
              <TrustItem
                // animation={!isMobile ? <Precision /> : <PrecisionMobile />}
                animation={<PrecisionMobile />}
                title="La précision"
                content="Mon goût du détail et du travail qualitatif me pousse
        en permanence à me remettre en question.
        Aujourd’hui, j’ai acquis et continue d’acquérir une rapidité
        d’exécution forte et puissante tout en maintenant
        un haut seuil d’exigence."
              />
              <div className="hidden md:flex justify-center items-center">
                <span className="w-1 h-12 bg-white rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<I18nProps<MyLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`i18n/${locale}`);
  return { props: { table } }; // Passed to `/pages/_app.tsx`
};

export default HomePage;
