'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface FloatingIconProps {
  icon: React.ReactElement;
  position: { x: number; y: number };
}

export const FloatingIcon = ({ icon, position }: FloatingIconProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
            y: {
              duration: 3,
              ease: 'easeInOut',
              repeat: Infinity,
            },
          }}
          style={{
            position: 'absolute',
            left: `${position.x}%`,
            top: `${position.y * 10}px`,
            cursor: 'pointer',
            zIndex: 10,
          }}
          onClick={handleClick}
        >
          {icon}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
