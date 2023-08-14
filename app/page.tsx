"use client";

import { useState } from "react";
import { Container, TypingContainer, AccuracyChart, Timer } from "@/components";
import { useLetters } from "@/hooks/useLetters";

export default function Home() {
  const [timeForTyping, setTimeForTyping] = useState(15);
  const {
    onPressKeyHandler,
    arrOfTypedLetters,
    wrongLetterIndex,
    letterMistakeCounter,
  } = useLetters();

  return (
    <div
      onKeyDown={onPressKeyHandler}
      tabIndex={0}
      className="font-mono outline-0"
    >
      <Container>
        {timeForTyping ? (
          <div
            className={`w-3/4 h-1/4 ${
              !timeForTyping && "opacity-0"
            } transition-opacity`}
          >
            <Timer time={timeForTyping} setTimeForTyping={setTimeForTyping} />
            <TypingContainer
              arrOfTypedLetters={arrOfTypedLetters}
              wrongLetterIndex={wrongLetterIndex}
            />
          </div>
        ) : null}

        {/*<h2 className="text-4xl">Mistakes</h2>*/}
        {/*<p className="text-3xl">{mistakeCounter}</p>*/}
        <div
          className={`absolute bottom-full transition-transform ${
            !timeForTyping && "translate-y-[calc(100%+150px)]"
          } delay-300`}
        >
          <AccuracyChart />
        </div>
      </Container>
    </div>
  );
}
