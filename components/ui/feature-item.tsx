import React from "react";
import Reveal from "components/ui/animations/reveal";

interface Props {
  icon?: React.ReactNode;
  title: string;
  content: string;
}

const FeatureItem: React.FC<Props> = ({ icon, title, content }) => {
  return (
    <div className="flex w-full md:w-1/2 lg:w-1/3">
      <div className="my-12 sm:mx-6 xl:mx-12 rounded-xl md:rounded-none shadow-lg md:shadow-none hover:shadow-lg transition duration-500 ease-in-out cursor-pointer">
        <Reveal>
          <div className="relative reveal flex flex-col justify-center">
            <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 flex justify-center">
              {icon}
            </div>
            <div className="flex flex-col justify-center items-center py-10 px-12">
              <div className="w-full text-xl text-center">{title}</div>
              <div className="w-5 h-2 bg-gold rounded-lg my-6" />
              <div className="w-full text-xs text-center">{content}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default FeatureItem;
