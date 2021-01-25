import React from "react";
import Reveal from "components/ui/animations/reveal";

interface Props {
  icon?: React.ReactNode;
  title: string;
  content: string;
}

const FeatureItem: React.FC<Props> = ({ icon, title, content }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-6">
      <Reveal>
        <div className="relative reveal">
          <div className="hidden">{icon}</div>
          <div className="flex flex-col justify-center items-center rounded-3xl shadow-lg py-10 px-12">
            <div className="w-full text-xl text-center">{title}</div>
            <div className="w-5 h-2 bg-gold rounded-lg my-6" />
            <div className="w-full text-xs text-center">{content}</div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default FeatureItem;
