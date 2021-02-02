import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-2 px-12">
      <h2 className="text-center font-sage text-4xl sm:text-5xl">Contactez-moi !</h2>
      <a
        className="relative text-center font-sage text-4xl sm:text-5xl mt-20 underline-anim"
        href="mailto:studioaxl@gmail.com"
      >
        studioaxl@gmail.com
      </a>
      <div className="w-full text-left md:text-right text-4xl sm:text-5xl mt-56">
        .merci de votre visite
      </div>
      <div className="w-full relative ">
        <div className="">
          <svg viewBox="0 0 465.65 187.68" width="200" height="200">
            <text
              transform="translate(150.69 174.09)"
              fontSize={50}
              fontFamily="Futura-Medium, Futura"
              fontWeight={500}
              letterSpacing="0.05em"
              style={{
                isolation: "isolate",
              }}
            >
              {"\xA9 "}
              <tspan x={63.3} y={0} letterSpacing="0.07em">
                S
              </tspan>
              <tspan x={95.81} y={0}>
                tudio axl
              </tspan>
            </text>
            <path
              d="M2.69 145.93q0-19.68 12.16-30.32t36.88-17.08q13-3.36 45.94-12.29V85Q91 83.65 83.76 81.57t-17.85-5.88a91.51 91.51 0 01-19.15-9.34q-8.5-5.53-11.92-11.77L22.12 36.24Q39.66 24 64.36 24q34.14 0 49.72 16.09 15.78 16.1 15.77 42.21V160c0 3.08.06 5.55.17 7.38a33.69 33.69 0 00.87 5.65 7.8 7.8 0 002.16 4.21 18.51 18.51 0 003.81 2.49 13.38 13.38 0 006.14 1.2c2.53 0 5.45-.13 8.74-.38s7.23-.78 11.85-1.52v.52a55.92 55.92 0 01-17.13 2.6h-2.25a83.14 83.14 0 01-19.64-2.94 45.76 45.76 0 01-16.57-8.62 32 32 0 01-10.29-14.1v-1q-10.07 13.48-21.77 20t-29.24 6.49q-19.74 0-32-9.69-12.02-9.41-12.01-26.36zm30.58-94.81q2.23 6.93 10.55 13a79.38 79.38 0 0019.74 10.19q11.44 4.14 19.13 6.4t15 3.8V68.77q0-18.69-2.42-25.95-5.93-18.34-31.61-18.34-15.21 0-24 7.61-6.91 6.06-6.91 14.36a22.21 22.21 0 00.53 4.67zm1.6 91.77q0 16.65 7.1 26.2t20.82 9.55q8.5 0 18.66-7.43a63.35 63.35 0 0016.22-16.91V86.78L57.24 97.59q-10.91 2.61-16.64 14.84t-5.73 30.46z"
              fill="#161615"
            />
            <circle cx={130.61} cy={49.07} r={47.47} fill="#fed1af" opacity={0.89} />
          </svg>
        </div>
        <div className="flex flex-col items-end md:flex-row md:justify-end space-x-16">
          <Link href="/">
            <a className="relative underline-anim">Mentions légales</a>
          </Link>
          <a className="relative mt-4 underline-anim" href="mailto:studioaxl@gmail.com">
            studioaxl@gmail.com
          </a>
          <a
            className="relative mt-4 underline-anim"
            href="www.linkedin.com/in/axelle-malard"
            target="_blank"
          >
            www.linkedin.com/in/axelle-malard
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
