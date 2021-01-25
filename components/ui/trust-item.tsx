import React from "react";

interface Props {
  animation: React.ReactNode;
  title: string;
  content: string;
}

const TrustItem: React.FC<Props> = ({ animation, title, content }) => {
  return (
    <div className="flex flex-col justify-center items-center -mt-10 mb-5">
      <div className="flex flex-col justify-center items-center w-2/3 text-white">
        <div>{animation}</div>
        <div className="text-2xl mb-5">{title}</div>
        <span className="text-sm text-center">{content}</span>
      </div>
      <div className="w-6 h-3 bg-white rounded-2xl mt-8 md:hidden" />
    </div>
  );
};

export default TrustItem;
