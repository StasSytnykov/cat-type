"use client";

import { useState, KeyboardEvent, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Container } from "@/components/Container/Container";
import { AccuracyChart } from "@/components/AccuracyChart/AccuracyChart";
import { arrOfLetters } from "@/mock/letters";
import { SPECIFIC_KEYS } from "@/constants/constants";

export default function Home() {
  const [arrOfTypedWords, setArrOfTypedWords] = useState([""]);
  const [wrongLetterIndex, setWrongLetterIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const [mistakeCounter, setMistakeCounter] = useState(0);
  const [timeForTyping, setTimeForTyping] = useState(15);

  useEffect(() => {
    const timerID = setInterval(() => {
      if (timeForTyping) {
        setTimeForTyping((prevState) => prevState - 1);
      }
    }, 1000);

    return () => clearInterval(timerID);
  }, [timeForTyping]);

  const onPressKeyDownHandler = (event: KeyboardEvent<HTMLElement>) => {
    if (
      event.key === arrOfLetters[counter] &&
      !SPECIFIC_KEYS.includes(event.key)
    ) {
      setCounter((prevState) => prevState + 1);
    } else if (
      counter !== arrOfLetters.length &&
      !SPECIFIC_KEYS.includes(event.key)
    ) {
      setMistakeCounter((prevState) => prevState + 1);
    }

    if (
      event.key !== arrOfLetters[counter] &&
      !SPECIFIC_KEYS.includes(event.key)
    ) {
      setWrongLetterIndex(counter + 1);
    } else {
      setWrongLetterIndex(0);
    }

    setArrOfTypedWords((prevState) => {
      if (prevState[0] && event.key === arrOfLetters[counter]) {
        return [...prevState, event.key];
      } else if (event.key === arrOfLetters[counter]) {
        return [event.key];
      } else {
        return prevState;
      }
    });
  };

  return (
    <div
      onKeyDown={onPressKeyDownHandler}
      tabIndex={0}
      className="font-mono outline-0"
    >
      <Container>
        <div
          className={`w-3/4 h-1/4 ${
            !timeForTyping && "opacity-0"
          } transition-opacity`}
        >
          <div className="grid grid-cols-7 mb-4 text-5xl">
            <p className="col-span-1">{timeForTyping}</p>
            <h1 className="col-start-3 col-end-7">Try your skill</h1>
          </div>
          <div className="bg-gray-50 rounded-md p-3 text-2xl mb-3">
            {arrOfLetters.map((letter, index) => (
              <p
                key={letter + index}
                className={twMerge(`inline opacity-30 
               ${
                 letter === arrOfTypedWords[index] &&
                 "text-blue-400 opacity-100"
               } ${
                 wrongLetterIndex
                   ? wrongLetterIndex === index + 1 &&
                     "text-red-500 opacity-100 bg-red-200"
                   : ""
               } 
              `)}
              >
                {letter}
              </p>
            ))}
          </div>
        </div>
        {/*<h2 className="text-4xl">Mistakes</h2>*/}
        {/*<p className="text-3xl">{mistakeCounter}</p>*/}
        <div
          className={`absolute top-full transition-transform ${
            !timeForTyping && "-translate-y-[calc(100%+150px)]"
          } delay-300`}
        >
          <AccuracyChart />
        </div>
      </Container>
    </div>
  );
}
