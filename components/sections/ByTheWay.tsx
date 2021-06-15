import React from "react";
import ButtonLink from "components/ui/ButtonLink";
import Fade from "react-reveal/Fade";

const ByTheWay: React.FC = () => (
  <div className="relative z-10 h-96 bg-gold">
    <Fade>
      <div className="flex flex-col justify-center items-center mx-auto w-full h-full text-center max-w-container">
        <div className="mb-4 uppercase">Au fait...</div>
        <div className="w-full max-w-2xl text-3xl italic">
          Mon but est que vous soyez à l'aise avec vos projets. Nous travaillerons ensemble jusqu'à satisfaction. Mais pour cela, nous devons nous faire confiance.
        </div>
        <ButtonLink url="/" text="Un projet ?" className="mt-10" />
      </div>
    </Fade>
  </div>
);
export default ByTheWay;
