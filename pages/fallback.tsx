import React from "react";
import { GetStaticProps } from "next";
import { I18nProps, useI18n } from "next-rosetta";
import { MyLocale } from "i18n/index";

const FallbackPage: React.FC = () => {
  const { t } = useI18n<MyLocale>();
  return <div>Erreur 404</div>;
};

export const getStaticProps: GetStaticProps<I18nProps<MyLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`);
  return { props: { table } }; // Passed to `/pages/_app.tsx`
};

export default FallbackPage;
