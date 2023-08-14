import { useEffect, useState } from "react";

export const useIsTypingStarted = (letter: string, mistakeCounter: number) => {
  const [isTypingStarted, setIsTypingStarted] = useState(false);

  useEffect(() => {
    if (letter || mistakeCounter) {
      setIsTypingStarted(true);
    }
  }, [letter, mistakeCounter]);

  return { isTypingStarted, setIsTypingStarted };
};
