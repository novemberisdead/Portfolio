import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextReveal = ({
  tag = 'h3',
  children,
  className = '',
  initialOpacity = 0,
  initialY = 50,
  transitionDuration = 0.6,
  delay = 0,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,    
  });

  
  const Tag = tag;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: initialOpacity, y: initialY }}
      animate={{ opacity: inView ? 1 : initialOpacity, y: inView ? 0 : initialY }}
      transition={{ duration: transitionDuration, delay }}
    >
      <Tag className={`${className}`}>
        {children}
      </Tag>
    </motion.div>
  );
};

export default TextReveal;

