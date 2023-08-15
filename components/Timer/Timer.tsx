import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { times } from "@/mock/data";

type Props = {
  time: number;
  setTimeForTyping: Dispatch<SetStateAction<number>>;
  isTypingStarted: boolean;
  typingContainerRef: RefObject<HTMLDivElement>;
};

export const Timer = ({
  time,
  setTimeForTyping,
  isTypingStarted,
  typingContainerRef,
}: Props) => {
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
      <div
        className={`flex ${isTypingStarted && "opacity-0"} transition-opacity`}
      >
        {times.map((choseTime) => (
          <button
            tabIndex={-1}
            key={choseTime}
            className={twMerge(
              `mr-3 last:mr-0 outline-0 text-slate-950 hover:text-amber-600/75 focus:text-amber-600/75 transition-colors ease-in-out ${
                choseTime === time && "text-amber-600/75"
              }`,
            )}
            type="button"
            onClick={() => {
              typingContainerRef?.current?.focus();
              setTimeForTyping(choseTime);
            }}
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
