import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import useOnScreen from 'hooks/useOnScreen';

const LazyOpacity = ({ children }) => {
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef);
  useEffect(() => {
    if (onScreen) {
      controls.start({
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 1,
          ease: "easeOut"
        }
      });
    }
  }, [onScreen, controls]);
  return (
    <motion.div
      className="lazy-div"
      ref={rootRef}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default LazyOpacity;