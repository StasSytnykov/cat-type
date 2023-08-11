"use client";

import { useState, KeyboardEvent } from "react";
import { twMerge } from "tailwind-merge";
import { Container } from "@/components/Container/Container";
import { arrOfWords } from "@/mock/sentences";

export default function Home() {
  const [arrOfTypedWords, setArrOfTypedWords] = useState([""]);
  const [wrongLetterIndex, setWrongLetterIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const [mistakeCounter, setMistakeCounter] = useState(0);

  const onPressKeyDownHandler = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === arrOfWords[counter]) {
      setCounter((prevState) => prevState + 1);
    } else if (counter !== arrOfWords.length) {
      setMistakeCounter((prevState) => prevState + 1);
    }

    if (event.key !== arrOfWords[counter]) {
      setWrongLetterIndex(counter + 1);
    } else {
      setWrongLetterIndex(0);
    }

    setArrOfTypedWords((prevState) => {
      if (prevState[0] && event.key === arrOfWords[counter]) {
        return [...prevState, event.key];
      } else if (event.key === arrOfWords[counter]) {
        return [event.key];
      } else {
        return prevState;
      }
    });
  };

  return (
    <div onKeyDown={onPressKeyDownHandler} tabIndex={0} className="font-mono">
      <Container>
        <h1 className="text-5xl	mb-4">Try your skill</h1>
        <div className="bg-gray-50 rounded-md p-3 w-3/4 h-1/4 text-2xl mb-3">
          {arrOfWords.map((letter, index) => (
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
        <h2 className="text-4xl">Mistakes</h2>
        <p className="text-3xl">{mistakeCounter}</p>
      </Container>
    </div>
  );
}
