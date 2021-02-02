import React from "react";

const Cookie: React.FC = () => {
  return (
    <div className="relative bg-white m-2 px-6 py-8 shadow-md rounded-3xl flex w-cookie-max lg:ml-24 z-10">
      <div className="absolute -top-40 -left-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 219.23 177.55"
          width="300"
          height="300"
        >
          <path
            d="M111.06,69.33c-.47,0-.94-.07-1.42-.07a23.77,23.77,0,1,0,22,14.87,15.66,15.66,0,0,1-19.82-9.9A16,16,0,0,1,111.06,69.33Z"
            fill="none"
            stroke="#161615"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
          <circle cx="96.8" cy="76.16" r="6.93" fill="#fdc594" />
          <circle cx="121.8" cy="97.16" r="3.93" />
          <circle cx="103.3" cy="97.66" r="6.43" />
        </svg>
      </div>
      <div className="relative w-4/6 flex flex-col justify-center px-3 text-xs z-50">
        <p>
          Studio axl utilise des cookies sur ce site. Avec votre consentement nous les utiliserons
          pour mesurer et analyser l’utilisation du site (cookies analytiques, miam).
        </p>
        <p className="mt-5">
          Pour plus d’informations, veuillez lire la{" "}
          <span className="text-yellow-400 underline">Politique Cookies</span>
        </p>
      </div>
      <div className="w-2/6 flex flex-col justify-center space-y-4 px-3">
        <button type="button" className="bg-red-100 w-full h-12 text-xs shadow-sm rounded-3xl">
          J'ACCEPTE
        </button>
        <button type="button" className="bg-gray-100 w-full h-12 text-xs shadow-sm rounded-3xl">
          NON MERCI...
        </button>
      </div>
    </div>
  );
};

export default Cookie;
