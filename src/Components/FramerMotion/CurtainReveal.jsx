import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CurtainReveal = ({
  children,
  duration = 1,
  delay = 0.3,
  color = "#1C1C28",
  className = "",
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
     
      <motion.div
        initial={{ width: "0%" }}
        animate={{
          width: inView ? "100%" : "0%",
        }}
        transition={{ duration, ease: "easeOut" }}
        className="absolute top-0 left-0 h-full"
        style={{ backgroundColor: color }}
      />

     
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CurtainReveal;

