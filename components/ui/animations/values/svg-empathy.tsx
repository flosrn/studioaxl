import React from "react";
import { handleAnimation } from "utils/anims";

export const circleEmpathy1Values = { y: -25, x: -20, scale: 0.6 };
export const circleEmpathy2Values = { y: -16, x: 64 };
export const circleEmpathy3Values = { y: -17, x: 5, scale: 3 };
export const hearthEmpathyValues = { x: 24 };

export const svgEmpathyAnimation = (animationType: string, mouseEvent?: string) => {
  handleAnimation(
    "#circleEmpathy1",
    "#svgEmpathy",
    circleEmpathy1Values,
    animationType,
    mouseEvent
  );
  handleAnimation(
    "#circleEmpathy2",
    "#svgEmpathy",
    circleEmpathy2Values,
    animationType,
    mouseEvent
  );
  handleAnimation(
    "#circleEmpathy3",
    "#svgEmpathy",
    circleEmpathy3Values,
    animationType,
    mouseEvent
  );
  handleAnimation("#hearthEmpathy", "#svgEmpathy", hearthEmpathyValues, animationType, mouseEvent);
};

const SvgEmpathy: React.FC = () => {
  return (
    <div className="cursor-pointer">
      <svg id="svgEmpathy" viewBox="0 0 219.23 177.55" width="115" height="115">
        <circle id="circleEmpathy1" cx={87.61} cy={109.81} r={15.86} fill="#fde0e0" />
        <circle id="circleEmpathy2" cx={76.11} cy={68.31} r={6.36} />
        <circle id="circleEmpathy3" cx={144.11} cy={97.31} r={5.36} fill="#fdc594" />
        <path
          d="M106.79 82.35A13.93 13.93 0 0096 77h0a13.39 13.39 0 00-11.78 7.13c-1.62 3.14-3.37 9.78 3.13 18.94 5.15 7.25 17.41 16.71 20 18.71 2.64-2 14.9-11.46 20-18.71 6.5-9.16 4.76-15.8 3.13-18.93A13.35 13.35 0 00118.85 77a13.85 13.85 0 00-10.75 5.36l-.66.79zm2.19.72a12.74 12.74 0 019.87-4.94 12.19 12.19 0 0110.76 6.52c2.6 5 1.52 11.33-3.05 17.76S112.06 116.78 108 120l-.52.4-.52-.4c-4.1-3.17-14.12-11.23-18.6-17.54s-5.64-12.73-3-17.76A12.21 12.21 0 0196 78.12h0a12.8 12.8 0 019.87 4.94l1.53 1.86z"
          stroke="#000"
        />
        <path
          id="hearthEmpathy"
          d="M106.65 82.35A13.91 13.91 0 0095.9 77h0a13.36 13.36 0 00-11.77 7.13c-1.63 3.14-3.38 9.78 3.13 18.94 5.15 7.25 17.41 16.71 20 18.71 2.63-2 14.9-11.46 20-18.71 6.5-9.16 4.75-15.8 3.13-18.93A13.38 13.38 0 00118.71 77 13.86 13.86 0 00108 82.35l-.65.79zm2.19.72a12.74 12.74 0 019.87-4.94 12.21 12.21 0 0110.77 6.52c2.6 5 1.51 11.33-3 17.76s-14.5 14.37-18.6 17.54l-.52.4-.52-.4c-4.1-3.17-14.12-11.23-18.6-17.54s-5.65-12.73-3-17.76a12.21 12.21 0 0110.66-6.53h0a12.83 12.83 0 019.88 4.94l1.53 1.86z"
          stroke="#000"
        />
      </svg>
    </div>
  );
};

export default SvgEmpathy;
