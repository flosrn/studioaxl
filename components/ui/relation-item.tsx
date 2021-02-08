import React from "react";
import Image from "next/image";

interface Props {
  domain: string;
  picturePath: string;
  name: string;
  desc: string;
  content: string;
}

const RelationItem: React.FC<Props> = ({ domain, picturePath, name, desc, content }) => {
  return (
    <div className="w-full flex flex-col items-center p-10">
      <div className="w-96">
        <div className="text-center capitalize">{domain}</div>
        <div className="flex justify-center items-center mt-5 mb-3">
          <Image src={picturePath} alt={name} width={100} height={100} className="rounded-full" />
        </div>
        <div className="w-full text-center text-5xl font-sage">{name}</div>
        <div className="w-full text-center text-lg mt-4">{desc}</div>
        <div className="w-full flex items-center justify-center mt-20">
          <span className="rounded-full w-2 h-2 bg-black" />
        </div>
        <div className="w-full text-center text-sm font-alegreya mt-3 px-16">{content}</div>
      </div>
    </div>
  );
};

export default RelationItem;
