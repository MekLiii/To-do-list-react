import React from "react";
import { motion } from "framer-motion";

function AnimationItem({ children }) {
  return (
    <motion.div
      className="notification is-info"
      positionTransition
      initial={{
        x: 50,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{
        x: 50,
        opacity: 0,
        transition: {
          duration: 0.4,
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationItem;
