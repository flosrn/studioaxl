import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";

const Arrow: React.FC = () => {
  const pathControls = useAnimation();
  const circleControls = useAnimation();
  const textControls = useAnimation();

  const handleActive = () => {
    pathControls.start({ rotateY: -180 });
    circleControls.start({ y: 85, x: -32 });
    textControls.start({ opacity: 1 });
  };

  const handleInactive = () => {
    pathControls.start({ rotateY: 0 });
    circleControls.start({ y: 0, x: 0 });
    textControls.start({ opacity: 0 });
  };

  return (
    <div className="relative">
      <Link activeClass="active" to="section1" smooth duration={1500} className="cursor-pointer">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 73.67 140.5"
          width="150"
          height="150"
          onTapStart={handleActive}
          onTapCancel={handleInactive}
          onHoverStart={handleActive}
          onHoverEnd={handleInactive}
        >
          <motion.path
            id="pathPrecision"
            d="M38.7,17.51v107L18,103.83"
            fill="none"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth="1.5"
            style={{ originX: 1 }}
            transition={{ duration: 0.5 }}
            animate={pathControls}
          />
          <motion.path
            d="M38.7,17.51v107L18"
            fill="none"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth="1.5"
          />
          <motion.circle
            id="circlePrecision"
            cx="51.17"
            cy="20.47"
            r="4.5"
            transition={{ duration: 0.5 }}
            animate={circleControls}
          />
        </motion.svg>
      </Link>
      <motion.div
        className="hidden md:block absolute bottom-3 -right-40 opacity-0"
        transition={{ duration: 0.5 }}
        animate={textControls}
      >
        En quoi puis-je vous aider ?
      </motion.div>
    </div>
  );
};

export default Arrow;
