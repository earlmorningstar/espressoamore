import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const useScrollPosition = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [scrollPositions, setScrollPositions] = useState({});
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (isInitialLoad.current) {
      // Skip the initial load
      isInitialLoad.current = false;
      return;
    }

    // Save scroll position before navigating away
    if (navigationType !== 'POP') {
      setScrollPositions((prev) => ({
        ...prev,
        [location.key]: window.scrollY,
      }));
    }

    // Reset scroll position when navigating to a new page
    if (navigationType === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.key, navigationType]);

  useEffect(() => {
    // Restore saved scroll position when navigating back
    if (navigationType === 'POP') {
      const savedScrollPosition = scrollPositions[location.key];
      if (savedScrollPosition !== undefined) {
        window.scrollTo(0, savedScrollPosition);
      }
    }
  }, [location.key, scrollPositions, navigationType]);
};

export default useScrollPosition;
