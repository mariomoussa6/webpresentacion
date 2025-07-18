import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.1
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true
  });

  const animations = {
    fadeInUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.8, 
          delay,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      }
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -60 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.8, 
          delay,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: 0.8, 
          delay,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: 0.8, 
          delay,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: 0.6, 
          delay,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations[animation]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;