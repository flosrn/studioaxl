import React from "react";
import cx from "classnames";
import { handleAnimation } from "utils/anims";

export const circleSense1Values = { y: 25, x: 79, scale: 0.6 };
export const circleSense2Values = { y: 53, x: -37, scale: 0.7 };
export const circleSense3Values = { y: -20, x: -33 };

export const svgSenseAnimation = (animationType: string, mouseEvent?: string) => {
  handleAnimation("#circleSense1", "#svgSense", circleSense1Values, animationType, mouseEvent);
  handleAnimation("#circleSense2", "#svgSense", circleSense2Values, animationType, mouseEvent);
  handleAnimation("#circleSense3", "#svgSense", circleSense3Values, animationType, mouseEvent);
};

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const SvgSense: React.FC<Props> = ({ width = 150, height = 150, className }) => {
  return (
    <div className={cx("cursor-pointer", className)}>
      <svg id="svgSense" viewBox="0 0 219.23 177.55" width={width} height={height}>
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
