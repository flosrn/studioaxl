import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import Logo from "components/ui/logo";

interface Props {
  openHandler: () => void;
  isLoading?: boolean;
}

const Header: React.FC<Props> = ({ openHandler, isLoading }) => (
  // const { locale, locales, route } = useRouter();

  <div className="flex fixed z-50 justify-between md:justify-between items-center px-6 md:px-12 w-full text-white">
    <div className="flex justify-start items-center w-1/2 h-full">
      <Link href="/">
        <a className="py-4 px-5 -ml-5">
          <Logo />
        </a>
      </Link>
    </div>
    <div className="flex md:hidden justify-end items-center w-1/2 h-full">
      <button
        type="button"
        aria-label="Menu Open"
        className="inline-block overflow-visible py-4 px-5"
        onClick={openHandler}
        disabled={isLoading}
      >
        <div className="block relative w-10 h-3.5 cursor-pointer">
          <span id="line1" className="absolute left-0 w-full h-line bg-black origin-center" />
          <span
            id="line2"
            className="absolute bottom-0 left-0 w-full h-line bg-black origin-center"
          />
        </div>
      </button>
    </div>
    <div className="hidden md:flex space-x-10 text-sm tracking-widest uppercase">
      <ScrollLink
        activeClass="active"
        to="section2"
        smooth
        duration={1500}
        className="cursor-pointer"
      >
        Services
      </ScrollLink>

      <ScrollLink
        activeClass="active"
        to="section3"
        smooth
        duration={1500}
        className="cursor-pointer"
      >
        Projets
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="section4"
        smooth
        duration={1500}
        className="cursor-pointer"
      >
        Valeurs
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="section5"
        smooth
        duration={1500}
        className="cursor-pointer"
      >
        Formations
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="section6"
        smooth
        duration={1500}
        className="cursor-pointer"
      >
        Relations
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="section7"
        smooth
        duration={1500}
        className="cursor-pointer"
      >
        Contact
      </ScrollLink>
    </div>
    {/* <div className="hidden md:flex justify-between items-center">*/}
    {/*  <ul className="flex ml-16 justify-center items-center flex-row">*/}
    {/*    {locales?.map((loc) => (*/}
    {/*      <li key={loc} className="px-1 text-sm">*/}
    {/*        <Link href={route} locale={loc}>*/}
    {/*          <a className={`uppercase ${loc === locale ? "text-gold" : ""}`}>{loc}</a>*/}
    {/*        </Link>*/}
    {/*      </li>*/}
    {/*    ))}*/}
    {/*  </ul>*/}
    {/* </div>*/}
  </div>
);
export default Header;
