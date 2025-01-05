import { useEffect, useState } from "react";

export default function useIsLargeScreen(threshold = 1024) {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > threshold);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [threshold]);

  return isLargeScreen;
}
