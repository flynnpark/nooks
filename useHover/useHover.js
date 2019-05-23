export const useHover = onHover => {
  const element = useRef();
  useEffect(() => {
    if (typeof onHover === 'function') {
      if (element.current) {
        element.current.addEventListener('mouseenter', onHover);
      }
      return () => {
        if (element.current) {
          element.current.removeEventListener('mouseenter', onHover);
        }
      };
    }
  }, []);
  return element;
};
