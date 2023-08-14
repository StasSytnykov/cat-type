import { KeyboardEvent, useState } from "react";
import { arrOfLetters } from "@/mock/data";
import { SPECIFIC_KEYS } from "@/constants/constants";

export const useLetters = () => {
  const [letterMistakeCounter, setLetterMistakeCounter] = useState(0);
  const [arrOfTypedLetters, setArrOfTypedLetters] = useState([""]);
  const [wrongLetterIndex, setWrongLetterIndex] = useState(0);
  const [letterCounter, setLetterCounter] = useState(0);

  const onPressKeyHandler = (event: KeyboardEvent<HTMLElement>) => {
    if (
      event.key === arrOfLetters[letterCounter] &&
      !SPECIFIC_KEYS.includes(event.key)
    ) {
      setLetterCounter((prevState) => prevState + 1);
    } else if (
      letterCounter !== arrOfLetters.length &&
      !SPECIFIC_KEYS.includes(event.key)
    ) {
      setLetterMistakeCounter((prevState) => prevState + 1);
    }

    if (
      event.key !== arrOfLetters[letterCounter] &&
      !SPECIFIC_KEYS.includes(event.key)
    ) {
      setWrongLetterIndex(letterCounter + 1);
      setTimeout(() => setWrongLetterIndex(0), 300);
    } else {
      setWrongLetterIndex(0);
    }

    setArrOfTypedLetters((prevState) => {
      if (prevState[0] && event.key === arrOfLetters[letterCounter]) {
        return [...prevState, event.key];
      } else if (event.key === arrOfLetters[letterCounter]) {
        return [event.key];
      } else {
        return prevState;
      }
    });
  };

  return {
    onPressKeyHandler,
    arrOfTypedLetters,
    wrongLetterIndex,
    letterMistakeCounter,
  };
};
