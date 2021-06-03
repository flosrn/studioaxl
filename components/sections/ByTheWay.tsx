import React from "react";
import LayoutSection from "components/ui/layout-section";

const ByTheWay: React.FC = () => (
  <div className="h-96 bg-gold">
    <div className="flex flex-col justify-center items-center mx-auto w-full h-full text-center max-w-container">
      <div className="mb-4 uppercase">Au fait...</div>
      <div className="w-full text-2xl italic mb-18">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet nisl malesuada,
        euismod est et, faucibus sem. Etiam eu fermentum ligula. Sed facilisis a est sed venenatis.
        Etiam pharetra ipsum id elementum tempor
      </div>
      <button className="py-4 px-8 mt-6 text-sm text-black uppercase bg-transparent border border-black border-w-1">
        Une questions ?
      </button>
    </div>
  </div>
);
export default ByTheWay;
