import React from 'react';
import { motion } from 'framer-motion';

const TextRevealWithLetters = ({ text, className = '', delay = 0.2, stiffness = 100 }) => {
  return (
    <motion.h2
      className={className}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default TextRevealWithLetters;
