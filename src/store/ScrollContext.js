import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollPositions, setScrollPositions] = useState({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPositions((prev) => ({
        ...prev,
        [location.pathname]: window.scrollY,
      }));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    const savedScrollPosition = scrollPositions[location.pathname];
    if (savedScrollPosition !== undefined) {
      window.scrollTo(0, savedScrollPosition);
    }
  }, [location.pathname, scrollPositions]);

  return (
    <ScrollContext.Provider value={{ scrollPositions }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);



// import React, { createContext, useContext } from 'react';
// import useScrollPosition from './useScrollPosition';

// const ScrollContext = createContext();

// export const ScrollProvider = ({ children }) => {
//   useScrollPosition();

//   return (
//     <ScrollContext.Provider value={{}}>
//       {children}
//     </ScrollContext.Provider>
//   );
// };

// export const useScroll = () => useContext(ScrollContext);



