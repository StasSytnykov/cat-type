import { useEffect, useState } from "react";

export const useIsTypingStarted = (letter: string, mistakeCounter: number) => {
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (letter || mistakeCounter) {
      setIsStarted(true);
    }
  }, [letter, mistakeCounter]);

  return isStarted;
};
