import { Dispatch, SetStateAction, useEffect } from "react";

type Props = {
  time: number;
  setTimeForTyping: Dispatch<SetStateAction<number>>;
  isTypingStarted: boolean;
};

export const Timer = ({ time, setTimeForTyping, isTypingStarted }: Props) => {
  useEffect(() => {
    if (isTypingStarted) {
      const timerID = setInterval(() => {
        setTimeForTyping((prevState) => prevState - 1);
      }, 1000);
      return () => clearInterval(timerID);
    }
  }, [isTypingStarted]);

  return (
    <div className="grid grid-cols-7 mb-4 text-5xl">
      <p className="col-span-1 text-amber-600/75">{time}</p>
      <h1 className="col-start-3 col-end-7">Try your skill</h1>
    </div>
  );
};
