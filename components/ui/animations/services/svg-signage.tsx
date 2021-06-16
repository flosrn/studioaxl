import React from "react";
import { handleAnimation } from "utils/anims";
import cx from "classnames";

export const circleSignage1Values = { y: 36, x: -82 };
export const circleSignage2Values = { fill: "#fdc594" };
export const circleSignage3Values = { fill: "#161615" };
export const pathSignage1Values = { x: 30 };
export const pathSignage2Values = { x: 20 };
export const pathSignage3Values = { x: -20 };

export const svgSignageAnimation = (animationType: string, mouseEvent?: string) => {
  handleAnimation(
    "#circleSignage1",
    "#svgSignage",
    circleSignage1Values,
    animationType,
    mouseEvent
  );
  handleAnimation(
    "#circleSignage2",
    "#svgSignage",
    circleSignage2Values,
    animationType,
    mouseEvent
  );
  handleAnimation(
    "#circleSignage3",
    "#svgSignage",
    circleSignage3Values,
    animationType,
    mouseEvent
  );
  handleAnimation("#pathSignage1", "#svgSignage", pathSignage1Values, animationType, mouseEvent);
  handleAnimation("#pathSignage2", "#svgSignage", pathSignage2Values, animationType, mouseEvent);
  handleAnimation("#pathSignage3", "#svgSignage", pathSignage3Values, animationType, mouseEvent);
};

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const SvgSignage: React.FC<Props> = ({ width = 150, height = 150, className }) => (
  <div className={cx("cursor-pointer", className)}>
    <svg
      id="svgSignage"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180.08 172.18"
      width={width}
      height={height}
    >
      <circle id="circleSignage1" cx="115.47" cy="63.23" r="12.72" fill="#fde0e0" />
      <circle id="circleSignage2" cx="50.35" cy="65.01" r="6.43" fill="#fff" />
      <circle id="circleSignage3" cx="123.35" cy="108.01" r="3.43" fill="#fff" />
      <rect
        x="84.51"
        y="68.6"
        width="4.51"
        height="57.18"
        fill="none"
        stroke="#161615"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        id="pathSignage1"
        d="M95.25,68.6V79.2h22.58l5.78-5.3-6.47-5.3Z"
        fill="none"
        stroke="#161615"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        id="pathSignage2"
        d="M95.25,84.71v10.6h22.58l5.78-5.3-6.47-5.3Z"
        fill="none"
        stroke="#161615"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        id="pathSignage3"
        d="M78.27,84.71v10.6H55.7L49.91,90l6.47-5.3Z"
        fill="none"
        stroke="#161615"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  </div>
);

export default SvgSignage;
