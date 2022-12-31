const depounce = (fn: Function, delay: number): NodeJS.Timeout => {
  const timer = setTimeout(() => {
    fn();
  }, delay);

  return timer;
};
export default depounce;
