import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";

const Header: React.FC = () => {
  const { locale, locales, route } = useRouter();
  return (
    <div className="fixed z-50 w-full bg-white flex justify-end md:justify-between items-center shadow-lg py-4 px-6 md:px-12">
      <div className="hidden md:flex space-x-10">
        <ScrollLink
          activeClass="active"
          to="section1"
          smooth
          duration={1500}
          className="cursor-pointer"
        >
          Je vous propose...
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="section1"
          smooth
          duration={1500}
          className="cursor-pointer"
        >
          Mes valeurs
        </ScrollLink>
      </div>
      <div className="flex justify-between items-center">
        <ul className="hidden md:flex ml-16 justify-center items-center flex-row">
          {locales?.map((loc) => (
            <li key={loc} className="px-1 text-sm">
              <Link href={route} locale={loc}>
                <a className={`uppercase ${loc === locale ? "text-gold" : ""}`}>{loc}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/">
          <a className="md:ml-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34.502"
              height="35.856"
              viewBox="0 0 46.502 47.856"
            >
              <path
                d="M-704.495,483.076q0-5.218,3.226-8.039t9.778-4.53q3.452-.889,12.179-3.257v-.321q-1.777-.367-3.689-.917t-4.733-1.56a24.209,24.209,0,0,1-5.076-2.477,9.212,9.212,0,0,1-3.161-3.119l-3.371-4.862a19.03,19.03,0,0,1,11.2-3.257q9.048,0,13.18,4.266,4.185,4.266,4.182,11.193v20.6c0,.818.015,1.472.046,1.957a8.816,8.816,0,0,0,.229,1.5,2.064,2.064,0,0,0,.573,1.116,5.007,5.007,0,0,0,1.009.661,3.6,3.6,0,0,0,1.629.317q1.009,0,2.316-.1t3.142-.4v.137a14.845,14.845,0,0,1-4.541.688h-.6a21.941,21.941,0,0,1-5.206-.78,12.086,12.086,0,0,1-4.4-2.271,8.5,8.5,0,0,1-2.729-3.738V485.6a18.6,18.6,0,0,1-5.772,5.3,15.844,15.844,0,0,1-7.752,1.72,13.3,13.3,0,0,1-8.49-2.569A8.337,8.337,0,0,1-704.495,483.076Zm8.108-25.137a7.188,7.188,0,0,0,2.8,3.44,21.042,21.042,0,0,0,5.233,2.706q3.028,1.1,5.073,1.7t3.972,1.009v-4.174a24.873,24.873,0,0,0-.642-6.881q-1.565-4.862-8.375-4.862a9.4,9.4,0,0,0-6.365,2.018,4.9,4.9,0,0,0-1.831,3.807A5.908,5.908,0,0,0-696.387,457.939Zm.424,24.331a11.387,11.387,0,0,0,1.884,6.945,6.453,6.453,0,0,0,5.52,2.531,8.622,8.622,0,0,0,4.946-1.969,16.78,16.78,0,0,0,4.3-4.484v-17.9l-10.719,2.867a6.544,6.544,0,0,0-4.411,3.933A19.012,19.012,0,0,0-695.963,482.27Z"
                transform="translate(704.495 -444.807)"
                fill="#161615"
              />
              <g transform="translate(21.33 0)" opacity="0.89">
                <circle
                  id="Ellipse_49"
                  data-name="Ellipse 49"
                  cx="12.586"
                  cy="12.586"
                  r="12.586"
                  transform="translate(0)"
                  fill="#fed1af"
                />
              </g>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
