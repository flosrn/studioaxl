import React from "react";
import { handleAnimation } from "utils/anims";
import cx from "classnames";

export const circleWrite1Values = { y: 23, x: -10, scale: 0.4 };
export const circleWrite2Values = { fill: "#fdc594" };
export const circleWrite3Values = { fill: "#161615" };
export const lineWrite1Values = { x: -48 };
export const lineWrite2Values = { x: 40 };
export const lineWrite3Values = { x: -20 };

export const svgWriteAnimation = (animationType: string, mouseEvent?: string) => {
  handleAnimation("#circleWrite1", "#svgWrite", circleWrite1Values, animationType, mouseEvent);
  handleAnimation("#circleWrite2", "#svgWrite", circleWrite2Values, animationType, mouseEvent);
  handleAnimation("#circleWrite3", "#svgWrite", circleWrite3Values, animationType, mouseEvent);
  handleAnimation("#lineWrite1", "#svgWrite", lineWrite1Values, animationType, mouseEvent);
  handleAnimation("#lineWrite2", "#svgWrite", lineWrite2Values, animationType, mouseEvent);
  handleAnimation("#lineWrite3", "#svgWrite", lineWrite3Values, animationType, mouseEvent);
};

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const SvgWrite: React.FC<Props> = ({ width = 150, height = 150, className }) => (
  <div className={cx("cursor-pointer", className)}>
    <svg id="svgWrite" viewBox="0 0 180.08 172.18" width={width} height={height}>
      <circle id="circleWrite1" cx={109.49} cy={61.43} r={15.4} fill="#fde0e0" />
      <circle id="circleWrite2" cx={129.65} cy={85.23} r={3.86} fill="#fff" />
      <circle id="circleWrite3" cx={41.65} cy={106.23} r={3.86} fill="#fff" />
      <path
        fill="none"
        stroke="#161615"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M69.49 64.35H109.49V114.6H69.49z"
      />
      <path
        id="lineWrite1"
        fill="none"
        stroke="#161615"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M78.88 91.09L100.11 91.09"
      />
      <path
        id="lineWrite2"
        fill="none"
        stroke="#161615"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M78.88 97.8L100.11 97.8"
      />
      <path
        id="lineWrite3"
        fill="none"
        stroke="#161615"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M78.88 104.51L100.11 104.51"
      />
    </svg>
  </div>
);

export default SvgWrite;
