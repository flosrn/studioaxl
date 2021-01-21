import React from "react";
import { motion, useAnimation } from "framer-motion";

const Precision: React.FC = () => {
  const circle1Controls = useAnimation();
  const circle2Controls = useAnimation();
  const circle3Controls = useAnimation();

  const handleActive = () => {
    circle1Controls.start({ scale: 0.4 });
    circle2Controls.start({ scale: 0.6 });
    circle3Controls.start({ scale: 0.8 });
  };

  const handleInactive = () => {
    circle1Controls.start({ scale: 1 });
    circle2Controls.start({ scale: 1 });
    circle3Controls.start({ scale: 1 });
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
          cx="73.67"
          cy="51.71"
          r="24.93"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          strokeWidth="1.5"
          transition={{ duration: 0.5 }}
          animate={circle1Controls}
        />
        <motion.circle cx="73.67" cy="51.71" r="3.36" fill="#1d1d1b" />
        <motion.circle
          cx="73.67"
          cy="51.71"
          r="24.93"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          strokeWidth="1.5"
          transition={{ duration: 0.5 }}
          animate={circle2Controls}
        />
        <motion.circle
          cx="73.67"
          cy="51.71"
          r="24.93"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          strokeWidth="1.5"
          transition={{ duration: 0.5 }}
          animate={circle3Controls}
        />
        <motion.circle
          cx="73.67"
          cy="51.71"
          r="24.93"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          strokeWidth="1.5"
        />
      </motion.svg>
    </div>
  );
};

export default Precision;
