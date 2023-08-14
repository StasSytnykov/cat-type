import { Dispatch, SetStateAction, useEffect } from "react";
import { times } from "@/mock/data";

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
    <div className="flex flex-col justify-center items-center mb-4 text-5xl">
      <h1
        className={`mb-2 ${isTypingStarted && "opacity-0"} transition-opacity`}
      >
        Try your skill
      </h1>
      <div
        className={`flex ${isTypingStarted && "opacity-0"} transition-opacity`}
      >
        {times.map((choseTime) => (
          <button
            tabIndex={-1}
            className={`mr-3 last:mr-0 outline-0 ${
              choseTime === time && "text-amber-600/75"
            }`}
            type="button"
            onClick={() => !isTypingStarted && setTimeForTyping(choseTime)}
          >
            {choseTime}
          </button>
        ))}
      </div>
      <p
        className={`text-amber-600/75 opacity-0 transition-opacity ${
          isTypingStarted && "opacity-100"
        }`}
      >
        {time}
      </p>
    </div>
  );
};
