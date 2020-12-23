import React from "react";
import { GetStaticProps } from "next";
import { useI18n, I18nProps } from "next-rosetta";

import { MyLocale } from "../i18n";
import Header from "components/ui/header";

const HomePage: React.FC = () => {
  const { t } = useI18n<MyLocale>();
  return (
    <div className="bg-white">
      <Header />
      <section className="h-screen flex justify-center items-center">
        <div className="flex justify-center items-end">
          <h1 className="text-9xl font-sage">Studio axl</h1>
          <h5 className="text-xl tracking-wider text-gold">{t("home.hero.subtitle")}</h5>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps<I18nProps<MyLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`);
  return { props: { table } }; // Passed to `/pages/_app.tsx`
};

export default HomePage;
