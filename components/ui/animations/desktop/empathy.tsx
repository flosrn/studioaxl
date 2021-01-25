import React from "react";
import { motion, useAnimation } from "framer-motion";

const Empathy: React.FC = () => {
  const dotControls = useAnimation();

  const handleActive = () => {
    dotControls.start({ y: 32, x: 30 });
  };

  const handleInactive = () => {
    dotControls.start({ y: 0, x: 0 });
  };

  return (
    <div className="cursor-pointer">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 147.34 104.62"
        width="200"
        height="200"
        onTapStart={handleActive}
        onTapCancel={handleInactive}
        onHoverStart={handleActive}
        onHoverEnd={handleInactive}
      >
        <motion.circle
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth="1.5"
          cx="73.67"
          cy="51.71"
          r="24.93"
        />
        <motion.circle
          fill="#fff"
          cx="44.76"
          cy="20.91"
          r="3.36"
          animate={dotControls}
          transition={{ duration: 0.5 }}
        />
      </motion.svg>
    </div>
  );
};

export default Empathy;
