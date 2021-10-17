import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import useOnScreen from 'hooks/useOnScreen';

const LazyShow = ({ children }) => {
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef);

  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
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
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default LazyShow;