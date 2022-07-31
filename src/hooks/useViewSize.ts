import { useEffect, useState } from "react";

const useViewSize = (
  ref?: React.RefObject<HTMLDivElement>
): { viewHeight: number; viewWidth: number } => {
  const [viewHeight, setViewHeight] = useState<number>(
    ref ? window.innerHeight - window.innerHeight * 0.1 : window.innerHeight
  );
  const [viewWidth, setViewWidth] = useState<number>(window.innerWidth);
  const [debouncedState, setDebounced] = useState<boolean>(false);

  const handleResize = () => {
    if (!ref) {
      setViewHeight(window.innerHeight);
      setViewWidth(window.innerWidth);
    }
    if (ref && ref.current) {
      setViewHeight(ref.current.clientHeight);
      setViewWidth(window.innerWidth);
    }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  useEffect(() => {
    window.addEventListener("resize", handleDebounce);

    return () => {
      window.removeEventListener("resize", handleDebounce);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { viewHeight, viewWidth };
};

export default useViewSize;
