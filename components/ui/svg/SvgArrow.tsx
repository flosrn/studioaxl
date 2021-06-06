import React from "react";

type Props = {
  width: number;
  height: number;
};

const SvgArrow: React.FC<Props> = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    width={width}
    height={height}
    enableBackground="new 0 0 60 60"
    version="1.1"
    viewBox="0 0 60 60"
    xmlSpace="preserve"
  >
    <g transform="translate(-1661 -2334)">
      <g transform="translate(1661 2334)">
        <circle cx="30" cy="30" r="30" fill="none" />
        <path
          fill="#FFF"
          d="M30 60C13.46 60 0 46.54 0 30S13.46 0 30 0s30 13.46 30 30-13.46 30-30 30zm0-59C14.01 1 1 14.01 1 30s13.01 29 29 29 29-13.01 29-29S45.99 1 30 1z"
        />
      </g>
      <path
        fill="#FFF"
        d="M1686.83 2374.32L1685.42 2372.9 1694.16 2364.17 1685.42 2355.43 1686.83 2354.01 1696.99 2364.17z"
      />
    </g>
  </svg>
);

export default SvgArrow;
