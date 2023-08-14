import { arrOfLetters } from "@/mock/letters";
import { twMerge } from "tailwind-merge";

type Props = {
  arrOfTypedLetters: string[];
  wrongLetterIndex: number;
};

export const TypingContainer = ({
  arrOfTypedLetters,
  wrongLetterIndex,
}: Props) => {
  return (
    <div className="bg-gray-50 rounded-md p-3 text-2xl mb-3">
      {arrOfLetters.map((letter, index) => (
        <p
          key={letter + index}
          className={twMerge(`inline opacity-30 
               ${
                 letter === arrOfTypedLetters[index] &&
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
  );
};
