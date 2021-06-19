function useDebounce(fn, delay = 500, deps = []) {
  const { current } = useRef({ timer: null, fn });
  useEffect(() => {
    current.fn = fn;
  }, [fn]);
  return useCallback((...args) => {
    current.timer && clearTimeout(current.timer);
    current.timer = setTimeout(() => {
      current.fn.apply(this, args);
    }, delay);
  }, deps);
}
