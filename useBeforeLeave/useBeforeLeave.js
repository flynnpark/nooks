export const useBeforeLeave = onBefore => {
  const handle = event => {
    const { clientY } = event;
    if (typeof onBefore === 'function' && clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
};
