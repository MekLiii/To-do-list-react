import React from "react";
import { motion } from "framer-motion";

function AnimationNotValid({ children, isValid }) {
  if (isValid) {
    return (
      <motion.div
        className="notification is-info"
        positionTransition
        initial={{
          x:-20,
        }}
        animate={{
          x:0,
        }}
        exit={{
          x:-20,
        }}
      >
        {children}
      </motion.div>
    );
  }
  return <div>{children}</div>;
}

export default AnimationNotValid;
