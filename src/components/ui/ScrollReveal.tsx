import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

type RevealVariant = 'fade' | 'slide' | 'zoom' | 'blur';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  variant?: RevealVariant;
  staggerChildren?: boolean;
  disableOnMobile?: boolean;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 40,
  duration = 0.8,
  variant = 'slide',
  disableOnMobile = false
}: ScrollRevealProps) {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  
  // If explicitly disabled or on mobile when requested, skip animations entirely
  const isActuallyDisabled = (disableOnMobile && isMobile) || shouldReduceMotion;

  const getInitialStyles = () => {
    if (isActuallyDisabled) return { opacity: 1, x: 0, y: 0, scale: 1, filter: 'none' };
    
    const base = { opacity: 0 };
    
    switch (variant) {
      case 'fade':
        return base;
      case 'zoom':
        return { ...base, scale: 0.95 };
      case 'blur':
        // Disable blur filter on mobile for performance
        return isMobile ? { ...base, y: 20 } : { ...base, filter: 'blur(10px)', y: 20 };
      case 'slide':
      default: {
        const directions = {
          up: { y: distance },
          down: { y: -distance },
          left: { x: distance },
          right: { x: -distance }
        };
        return { ...base, ...directions[direction], scale: 0.985 };
      }
    }
  };

  const getAnimateStyles = () => {
    if (isActuallyDisabled) return { opacity: 1, x: 0, y: 0, scale: 1, filter: 'none' };

    return {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)'
    };
  };

  return (
    <motion.div
      initial={getInitialStyles()}
      whileInView={getAnimateStyles()}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ 
        duration: isActuallyDisabled ? 0 : duration,
        delay: isActuallyDisabled ? 0 : delay, 
        ease: [0.22, 1, 0.36, 1] // Clinical-grade smooth ease-out-expo
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
