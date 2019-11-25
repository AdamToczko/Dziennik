import { useEffect } from "react";

export const useClock = (callback = () => {}, ms = 1000, deps = []) => {
  useEffect(() => {
    const interval = setInterval(() => {
      callback();
    }, ms);

    return () => {
      clearInterval(interval);
    };
  }, deps);
};
