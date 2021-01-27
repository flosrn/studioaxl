import React from "react";
import { handleAnimation } from "utils/anims";

export const circleSense1Values = { y: 25, x: 79, scale: 0.6 };
export const circleSense2Values = { y: 53, x: -37, scale: 0.7 };
export const circleSense3Values = { y: -20, x: -33 };

export const svgSenseAnimation = (animationType: string, mouseEvent?: string) => {
  handleAnimation("#circleSense1", "#svgSense", circleSense1Values, animationType, mouseEvent);
  handleAnimation("#circleSense2", "#svgSense", circleSense2Values, animationType, mouseEvent);
  handleAnimation("#circleSense3", "#svgSense", circleSense3Values, animationType, mouseEvent);
};

const SvgSense: React.FC = () => {
  return (
    <div className="cursor-pointer">
      <svg id="svgSense" viewBox="0 0 219.23 177.55" width="185" height="185">
        <circle id="circleSense1" cx={85.51} cy={85.78} r={15.86} fill="#fde0e0" />
        <circle id="circleSense2" cx={144.51} cy={53.78} r={8.86} />
        <circle id="circleSense3" cx={85.51} cy={123.78} r={8.86} />
        <circle
          cx={105.85}
          cy={105.03}
          r={26.06}
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    </div>
  );
};

export default SvgSense;
