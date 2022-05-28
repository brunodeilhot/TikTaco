import { useEffect, useState } from "react";

const useViewHeight = (
  ref?: React.RefObject<HTMLDivElement>
): { viewHeight: number } => {
  const [viewHeight, setViewHeight] = useState<number>(window.innerHeight);
  const [debouncedState, setDebounced] = useState<boolean>(false);

  const handleResize = () => {
    !ref && setViewHeight(window.innerHeight);
    ref && ref.current && setViewHeight(ref.current.clientHeight);
    setDebounced(false);
  };

  const handleDebounce = () => {
    if (debouncedState === false) {
      setDebounced(true);
      setTimeout(handleResize, 200);
    }
  };

  useEffect(() => {
    handleResize();
  }, [ref]);

  useEffect(() => {
    window.addEventListener("resize", handleDebounce);

    return () => {
      window.removeEventListener("resize", handleDebounce);
    };
  }, []);

  return { viewHeight };
};

export default useViewHeight;
