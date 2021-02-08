import React from "react";

interface Props {
  date: string;
  diploma: string;
  school: string;
  contract?: string;
  society?: string;
  textDescription: string;
  logo?: React.ReactNode;
}

const FormationItem: React.FC<Props> = ({
  date,
  diploma,
  school,
  contract,
  society,
  textDescription,
  logo,
}) => {
  return (
    <div className="flex mt-20">
      <div className="w-full lg:w-1/2">
        <div className="text-6xl font-sage">{date}</div>
        <div className="text-xl mt-6">{diploma}</div>
        <div className="text-xl">{school}</div>
        <div className="text-xl mt-5 text-gold">{contract}</div>
        <div className="text-xl text-gold">{society}</div>
        <div className="text-md mt-5 font-alegreya">{textDescription}</div>
      </div>
      <div className="hidden lg:flex w-full justify-end items-center md:w-1/2">{logo}</div>
    </div>
  );
};

export default FormationItem;
