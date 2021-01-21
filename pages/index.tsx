import React from "react";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { useI18n, I18nProps } from "next-rosetta";
import { isMobile } from "react-device-detect";

import Header from "components/ui/header";
import Arrow from "components/ui/animations/desktop/arrow";

import { MyLocale } from "i18n";

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
          {!isMobile ? <Meaning /> : <MeaningMobile />}
          {!isMobile ? <Precision /> : <PrecisionMobile />}

          <div className="mt-96 mb-96">{!isMobile ? <Empathy /> : <EmpathyMobile />}</div>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps<I18nProps<MyLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`i18n/${locale}`);
  return { props: { table } }; // Passed to `/pages/_app.tsx`
};

export default HomePage;
