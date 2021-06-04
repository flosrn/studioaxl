import React from "react";
import ButtonLink from "components/ui/ButtonLink";

const ByTheWay: React.FC = () => (
  <div className="h-96 bg-gold">
    <div className="flex flex-col justify-center items-center mx-auto w-full h-full text-center max-w-container">
      <div className="mb-4 uppercase">Au fait...</div>
      <div className="w-full max-w-2xl text-3xl italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet nisl malesuada,
        euismod est et.
      </div>
      <ButtonLink url="/" text="Alors on s'y met negro ?" className="mt-10" />
    </div>
  </div>
);
export default ByTheWay;
