import React, { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import { useI18n, I18nProps } from "next-rosetta";
import { motion, useMotionValue } from "framer-motion";

import Header from "components/ui/header";
import Arrow from "components/ui/animations/arrow";
import Meaning from "components/ui/animations/meaning";
import Empathy from "components/ui/animations/empathy";

import { MyLocale } from "i18n";

const HomePage: React.FC = () => {
  const { t } = useI18n<MyLocale>();
  const [cursorXY, setCursorXY] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const animation = (e) => {
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      setCursorXY({ x, y });
    };
    // const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", animation);

    // the function returned here will remove, or "clean up", the event listener
    return () => {
      window.removeEventListener("mousemove", animation);
    };
  }, []);

  return (
    <div className="bg-white">
      <div
        className="cursor"
        style={{
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        }}
      />
      <Header />
      <section className="h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center items-end">
          <h1 className="text-9xl font-sage">Studio axl</h1>
          <h5 className="text-xl tracking-wider text-gold">{t("home.hero.subtitle")}</h5>
        </div>
        <div className="flex justify-center items-center mt-16">
          <Arrow />
          <Meaning />
          <Empathy />
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
