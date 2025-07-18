import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  delay = 0,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { 
        y: -10, 
        transition: { duration: 0.3 } 
      } : {}}
      viewport={{ once: true }}
      className={`card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;