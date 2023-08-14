import { useEffect, useState } from "react";

export const useIsTypingStarted = (letter: string) => {
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (letter) {
      setIsStarted(true);
    }
  }, [letter]);

  return isStarted;
};
