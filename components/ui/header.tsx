import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const { locale, locales, route } = useRouter();
  return (
    <div className="flex justify-between py-8 px-12">
      <div className="text-3xl font-sage">Studio axl</div>
      <div className="">
        <ul className="hidden md:flex ml-16 justify-center items-center flex-row">
          {locales?.map((loc) => (
            <li key={loc} className="px-1">
              <Link href={route} locale={loc}>
                <a className={`uppercase ${loc === locale ? "text-gold" : ""}`}>{loc}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
