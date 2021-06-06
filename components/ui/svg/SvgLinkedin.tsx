import React from "react";

type Props = {
  width: number;
  height: number;
};

const SvgLinkedin: React.FC<Props> = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    width={width}
    height={height}
    enableBackground="new 0 0 32.81 32.81"
    version="1.1"
    viewBox="0 0 32.81 32.81"
    xmlSpace="preserve"
  >
    <path
      fill="#FFF"
      d="M0 0v32.81h32.81V0H0zm8.05 6.45c1.4-.04 2.58 1.06 2.64 2.46a2.562 2.562 0 01-2.63 2.47h-.08a2.56 2.56 0 01-2.6-2.46 2.578 2.578 0 012.67-2.47zm13.94 6.52c1.46-.04 2.86.53 3.89 1.56a7.334 7.334 0 011.56 4.85v8.19h-4.72v-7.63c-.01-1.43-.5-3.17-2.39-3.23-1.08.04-2.04.72-2.43 1.73-.13.37-.19.76-.17 1.14v7.98h-4.72c.02-3.99.04-7.98.03-11.97 0-1.13-.01-1.9-.03-2.29h4.72v2.01c.39-.59.88-1.11 1.44-1.54.83-.54 1.82-.82 2.82-.8zm-16.34.35h4.72v14.26H5.65V13.32z"
    />
  </svg>
);

export default SvgLinkedin;
