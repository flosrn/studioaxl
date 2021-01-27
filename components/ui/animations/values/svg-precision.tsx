import React from "react";
import { handleAnimation } from "utils/anims";

export const circlePrecision1Values = { y: 23, x: 38, scale: 0.6 };
export const circlePrecision2Values = { y: -29, scale: 0.8 };
export const featherPrecisionValues = { y: 25, x: -13 };
export const pathPrecisionValues = {
  attr: { d: "M101.47 118.98L164.95 70.04" },
};

export const svgPrecisionAnimation = (animationType: string, mouseEvent?: string) => {
  handleAnimation(
    "#circlePrecision1",
    "#svgPrecision",
    circlePrecision1Values,
    animationType,
    mouseEvent
  );
  handleAnimation(
    "#circlePrecision2",
    "#svgPrecision",
    circlePrecision2Values,
    animationType,
    mouseEvent
  );
  handleAnimation(
    "#featherPrecision",
    "#svgPrecision",
    featherPrecisionValues,
    animationType,
    mouseEvent
  );
  handleAnimation(
    "#pathPrecision",
    "#svgPrecision",
    pathPrecisionValues,
    animationType,
    mouseEvent
  );
};

const SvgPrecision: React.FC = () => {
  return (
    <div className="cursor-pointer">
      <svg id="svgPrecision" viewBox="0 0 219.23 177.55" width="185" height="185">
        <circle id="circlePrecision1" cx={71.47} cy={103.92} r={22.51} fill="#fde0e0" />
        <circle id="circlePrecision2" cx={170.97} cy={110.42} r={6.01} />
        <path
          d="M122.38 106.89a24.15 24.15 0 11-3.86-5"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          id="pathPrecision"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M101.47 118.98L123.84 101.49"
        />
        <path
          id="featherPrecision"
          d="M157 54.38L171.11 43l.83-8.53L158 45.18z,45.18z"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
      </svg>
    </div>
  );
};

export default SvgPrecision;
