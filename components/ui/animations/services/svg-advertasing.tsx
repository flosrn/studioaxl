import React from "react";
import { handleAnimation } from "utils/anims";

export const circleAdvertasing1Values = { y: -14, x: 12, fill: "#fdc594" };
export const circleAdvertasing2Values = { y: -14, x: 27, scale: 1.6 };
export const circleAdvertasing3Values = { y: 10, x: 15 };

export const svgAdvertasingAnimation = (animationType: string, mouseEvent?: string) => {
  handleAnimation(
    "#circleAdvertasing1",
    "#svgAdvertasing",
    circleAdvertasing1Values,
    animationType,
    mouseEvent
  );
  handleAnimation(
    "#circleAdvertasing2",
    "#svgAdvertasing",
    circleAdvertasing2Values,
    animationType,
    mouseEvent
  );
  handleAnimation(
    "#circleAdvertasing3",
    "#svgAdvertasing",
    circleAdvertasing3Values,
    animationType,
    mouseEvent
  );
};

const SvgAdvertasing: React.FC = () => {
  return (
    <div className="cursor-pointer">
      <svg
        id="svgAdvertasing"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 107.72 107.72"
        width="185"
        height="185"
      >
        <path
          d="M65.88,69.28l-23.13-3L39.36,55.21l17.39-15.8ZM43.65,65.22l20.58,2.66L56.17,41.53l-15.47,14Z"
          fill="#161615"
        />
        <path
          d="M37.9,67.69l-3.34-10.9,3.68-1.12,3.33,10.9ZM36,57.57l2.65,8.65,1.43-.43-2.65-8.66Z"
          fill="#161615"
        />
        <circle id="circleAdvertasing1" cx="65.71" cy="43.43" r="3.1" fill="#161615" />
        <circle id="circleAdvertasing2" cx="73.51" cy="49.88" r="3.1" fill="#161615" />
        <circle id="circleAdvertasing3" cx="70.64" cy="59.58" r="3.1" fill="#fde0e0" />
      </svg>
    </div>
  );
};

export default SvgAdvertasing;
