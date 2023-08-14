import { Dispatch, SetStateAction, useEffect } from "react";

type Props = {
  time: number;
  setTimeForTyping: Dispatch<SetStateAction<number>>;
};

export const Timer = ({ time, setTimeForTyping }: Props) => {
  useEffect(() => {
    const timerID = setInterval(() => {
      console.log("interval");
      setTimeForTyping((prevState) => prevState - 1);
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div className="grid grid-cols-7 mb-4 text-5xl">
      <p className="col-span-1">{time}</p>
      <h1 className="col-start-3 col-end-7">Try your skill</h1>
    </div>
  );
};
