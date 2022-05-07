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
    console.log("event started");
    window.addEventListener("resize", handleDebounce);

    return () => {
      console.log("event finished");
      window.removeEventListener("resize", handleDebounce);
    };
  }, []);

  return viewheight;
};

export default useViewHeight;
