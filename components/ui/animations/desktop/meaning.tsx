import React from "react";
import { motion, useAnimation } from "framer-motion";

const Meaning: React.FC = () => {
  const dotControls = useAnimation();
  const circleLeftControls = useAnimation();
  const circleRightControls = useAnimation();

  const handleActive = () => {
    circleLeftControls.start({ x: 15 });
    circleRightControls.start({ x: -15 });

    dotControls.start({ y: -38, x: 31 });
  };

  const handleInactive = () => {
    circleLeftControls.start({ x: 0 });
    circleRightControls.start({ x: 0 });

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
          cx="44.76"
          cy="48.07"
          r="24.93"
          transition={{ duration: 0.5 }}
          animate={circleLeftControls}
        />
        <motion.circle
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth="1.5"
          cx="105.22"
          cy="48.07"
          r="24.93"
          transition={{ duration: 0.5 }}
          animate={circleRightControls}
        />
        <motion.circle
          fill="#fff"
          cx="44.92"
          cy="87.44"
          r="3.36"
          transition={{ duration: 0.5 }}
          animate={dotControls}
        />
      </motion.svg>
    </div>
  );
};

export default Meaning;
