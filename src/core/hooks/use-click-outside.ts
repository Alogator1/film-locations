import { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useClickOutside = (ref, handleClickOutside: () => void) => {
  const handleClick = event => {
    if (ref.current && ref.current.contains(event.target)) {
      return;
    }

    handleClickOutside();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref]);
};

export { useClickOutside };
