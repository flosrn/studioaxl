import { useState, useEffect } from "react";

function useDelayUnmout(isMounted: boolean, delayTime: number) {
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  return shouldRender;
}

export default useDelayUnmout;
