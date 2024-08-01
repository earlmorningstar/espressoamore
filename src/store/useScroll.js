import { useContext } from 'react';
import { ScrollContext } from './ScrollContext';

const useScroll = () => {
  return useContext(ScrollContext);
};

export default useScroll;
