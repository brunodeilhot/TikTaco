import { useEffect, useState } from "react";

const useViewHeight = () => {
  const [viewheight, setViewHeight] = useState<number>(window.innerHeight);
  const [debouncedState, setDebounced] = useState<boolean>(false);

  const handleResize = () => {
    setViewHeight(window.innerHeight);
    setDebounced(false);
  };

  const handleDebounce = () => {
    if (debouncedState === false) {
      setDebounced(true);
      setTimeout(handleResize, 200);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleDebounce);

    return () => {
      window.removeEventListener("resize", handleDebounce);
    };
  }, []);

  return viewheight;
};

export default useViewHeight;
