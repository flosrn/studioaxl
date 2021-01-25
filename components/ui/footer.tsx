import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-8 px-12 h-48 bg-rose">
      <div className="hidden md:flex text-center">
        COPYRIGHT © Studio axl - CGV & POLITIQUE DE CONFIDENTIALITÉ - N°SIRET 87828394400014 - NAF
        7410Z
      </div>
      <div className="flex md:hidden text-center">© Studioaxl - N°SIRET 87828394400014</div>
    </div>
  );
};

export default Footer;
