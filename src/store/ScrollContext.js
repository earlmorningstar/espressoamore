// import React, { createContext, useContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollContext = createContext();

// export const ScrollProvider = ({ children }) => {
//   const [scrollPositions, setScrollPositions] = useState({});
//   const location = useLocation();

//   useEffect(() => {
//     // Save scroll position when navigating away from the page
//     const saveScrollPosition = () => {
//       const scrollPosition = { top: window.scrollY, left: window.scrollX };
//       setScrollPositions((prev) => ({
//         ...prev,
//         [location.pathname]: scrollPosition.top,
//       }));
//     };

//     // Add event listener to save scroll position before navigating away
//     window.addEventListener('beforeunload', saveScrollPosition);
//     window.addEventListener('popstate', saveScrollPosition);

//     return () => {
//       window.removeEventListener('beforeunload', saveScrollPosition);
//       window.removeEventListener('popstate', saveScrollPosition);
//     };
//   }, [location.pathname]);

//   useEffect(() => {
//     // Restore scroll position on route change
//     const savedScrollPosition = scrollPositions[location.pathname];
//     if (savedScrollPosition !== undefined) {
//       window.scrollTo(0, savedScrollPosition);
//     } else {
//       window.scrollTo(0, 0); // Default to top if no scroll position is saved
//     }
//   }, [location.pathname, scrollPositions]);

//   return (
//     <ScrollContext.Provider value={{ scrollPositions }}>
//       {children}
//     </ScrollContext.Provider>
//   );
// };

// export const useScroll = () => useContext(ScrollContext);




