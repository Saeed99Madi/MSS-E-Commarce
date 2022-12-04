const depounce = (fn: Function, delay: number): Function => {
  const timer = setTimeout(() => {
    fn();
  }, delay);

  return () => clearTimeout(timer);
};
export default depounce;
