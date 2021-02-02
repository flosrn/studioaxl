import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import Logo from "components/ui/logo";

interface Props {
  openHandler: () => void;
  isLoading?: boolean;
}

const Header: React.FC<Props> = ({ openHandler, isLoading }) => {
  // const { locale, locales, route } = useRouter();

  return (
    <div className="fixed z-50 w-full bg-white flex justify-between md:justify-between items-center shadow-header px-6 md:px-12">
      <div className="w-1/2 h-full flex justify-start items-center">
        <Link href="/">
          <a className="-ml-5 py-4 px-5">
            <Logo />
          </a>
        </Link>
      </div>
      <div className="md:hidden w-1/2 h-full flex justify-end items-center">
        <button
          type="button"
          aria-label="Menu Open"
          className="inline-block overflow-visible py-4 px-5"
          onClick={openHandler}
          disabled={isLoading}
        >
          <div className="relative block w-10 w-10 h-3.5 cursor-pointer">
            <span id="line1" className="absolute w-full h-line bg-black left-0 origin-center" />
            <span
              id="line2"
              className="absolute w-full h-line bg-black left-0 bottom-0 origin-center"
            />
          </div>
        </button>
      </div>
      <div className="hidden md:flex space-x-10 text-sm">
        <ScrollLink
          activeClass="active"
          to="section1"
          smooth
          duration={1500}
          className="cursor-pointer"
        >
          Services
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="section1"
          smooth
          duration={1500}
          className="cursor-pointer"
        >
          Valeurs
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="section1"
          smooth
          duration={1500}
          className="cursor-pointer"
        >
          Projets
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="section1"
          smooth
          duration={1500}
          className="cursor-pointer"
        >
          À propos
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="section1"
          smooth
          duration={1500}
          className="cursor-pointer"
        >
          Contact
        </ScrollLink>
      </div>
      {/*<div className="hidden md:flex justify-between items-center">*/}
      {/*  <ul className="flex ml-16 justify-center items-center flex-row">*/}
      {/*    {locales?.map((loc) => (*/}
      {/*      <li key={loc} className="px-1 text-sm">*/}
      {/*        <Link href={route} locale={loc}>*/}
      {/*          <a className={`uppercase ${loc === locale ? "text-gold" : ""}`}>{loc}</a>*/}
      {/*        </Link>*/}
      {/*      </li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </div>
  );
};

export default Header;
