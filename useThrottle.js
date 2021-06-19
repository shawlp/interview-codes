function useThrottle(fn, wait, deps = []) {
  const { current } = useRef({ fn, timer: null })
  useEffect(() => {
    current.fn = fn
  }, [fn])
  return useCallback((..args) => {
    if (current.timer) {
      return
    }
    current.timer = setTimeout(() => {
      delete current.timer
    }, wait)
    current.fn.apply(this, args)
  }, deps)
}