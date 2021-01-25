import React from "react";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { useI18n, I18nProps } from "next-rosetta";
import { isMobile } from "react-device-detect";

import Header from "components/ui/header";
import Arrow from "components/ui/animations/desktop/arrow";

import { MyLocale } from "i18n";
import Footer from "components/ui/footer";
import TrustItem from "components/ui/trust-item";

const HomePage: React.FC = () => {
  const { t } = useI18n<MyLocale>();

  const Empathy = dynamic(() => import("components/ui/animations/desktop/empathy"));
  const EmpathyMobile = dynamic(() => import("components/ui/animations/mobile/empathy"));

  const Meaning = dynamic(() => import("components/ui/animations/desktop/meaning"));
  const MeaningMobile = dynamic(() => import("components/ui/animations/mobile/meaning"));

  const Precision = dynamic(() => import("components/ui/animations/desktop/precision"));
  const PrecisionMobile = dynamic(() => import("components/ui/animations/mobile/precision"));

  return (
    <div className="bg-white">
      <Header />
      <section className="h-screen flex flex-col justify-center items-center mt-56">
        <div className="flex justify-center items-end">
          <h1 className="text-9xl font-sage">Studio axl</h1>
          <h5 className="text-xl tracking-wider text-gold">{t("home.hero.subtitle")}</h5>
        </div>
        <div className="flex justify-center items-center mb-96">
          <Arrow />
        </div>
      </section>
      <section id="section1" className="mb-96 bg-gray-200 h-96">
        hi
      </section>
      <section className="mb-96 bg-rose py-12 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mb-10">
          <h3 className="text-center text-6xl font-sage">Pourquoi me faire confiance ?</h3>
        </div>
        <div className="md:w-full">
          {/* L'empathie */}
          <div className="w-full flex">
            <div className="md:w-4/12">
              <div className="hidden md:flex justify-center items-center">
                <span className="w-1 h-12 bg-white rounded-md" />
              </div>
              <TrustItem
                animation={!isMobile ? <Empathy /> : <EmpathyMobile />}
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
                animation={!isMobile ? <Meaning /> : <MeaningMobile />}
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
                animation={!isMobile ? <Precision /> : <PrecisionMobile />}
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
