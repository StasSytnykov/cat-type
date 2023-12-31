import { KeyboardEvent, RefObject, useEffect, useRef } from "react";
import { arrOfLetters } from "@/mock/data";
import { twMerge } from "tailwind-merge";

type Props = {
  arrOfTypedLetters: string[];
  wrongLetterIndex: number;
  onPressKeyHandler: (event: KeyboardEvent<HTMLElement>) => void;
  typingContainerRef: RefObject<HTMLDivElement>;
};

export const TypingContainer = ({
  arrOfTypedLetters,
  wrongLetterIndex,
  onPressKeyHandler,
  typingContainerRef,
}: Props) => {
  useEffect(() => {
    typingContainerRef?.current?.focus();
  }, []);

  return (
    <div
      className="bg-gray-50 rounded-md p-3 text-2xl mb-3 outline-0"
      onKeyDown={onPressKeyHandler}
      autoFocus
      tabIndex={1}
      ref={typingContainerRef}
    >
      {arrOfLetters.map((letter, index) => {
        const lastTypedLetter = arrOfTypedLetters.slice(-1);
        return (
          <p
            key={letter + index}
            className={twMerge(`inline relative text-slate-950/25 transition-colors
            ${
              !arrOfTypedLetters[0] &&
              index === 0 &&
              "before:content-[''] before:absolute before:z-10 before:border-l-2 before:h-6 before:bottom-0.5 before:border-amber-600 before:animate-typing-pulse"
            } 
            ${
              lastTypedLetter[0] === letter &&
              arrOfTypedLetters.length === index + 1 &&
              "after:content-[''] after:absolute after:z-10 after:border-r-2 after:h-6 after:bottom-1 after:border-amber-600 after:animate-typing-pulse"
            }
               ${letter === arrOfTypedLetters[index] && "text-blue-400"} 
               ${
                 wrongLetterIndex
                   ? wrongLetterIndex === index + 1 && "text-red-500"
                   : ""
               } 
               ${
                 wrongLetterIndex
                   ? wrongLetterIndex === index + 1 &&
                     !arrOfTypedLetters[index] &&
                     "bg-red-500"
                   : ""
               } 
              `)}
          >
            {letter}
          </p>
        );
      })}
    </div>
  );
};
