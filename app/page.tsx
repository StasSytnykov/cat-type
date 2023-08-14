"use client";

import { useState } from "react";
import { Container, TypingContainer, AccuracyChart, Timer } from "@/components";
import { useLetters } from "@/hooks/useLetters";
import { useIsTypingStarted } from "@/hooks/useIsTypingStarted";

export default function Home() {
  const [timeForTyping, setTimeForTyping] = useState(15);
  const {
    onPressKeyHandler,
    arrOfTypedLetters,
    wrongLetterIndex,
    letterMistakeCounter,
  } = useLetters();
  const isTypingStarted = useIsTypingStarted(
    arrOfTypedLetters[0],
    letterMistakeCounter,
  );

  return (
    <div
      onKeyDown={onPressKeyHandler}
      tabIndex={0}
      autoFocus
      className="font-mono outline-0"
    >
      <Container>
        {timeForTyping ? (
          <div
            className={`w-3/4 h-1/4 ${
              !timeForTyping && "opacity-0"
            } transition-opacity`}
          >
            <Timer
              time={timeForTyping}
              setTimeForTyping={setTimeForTyping}
              isTypingStarted={isTypingStarted}
            />
            <TypingContainer
              arrOfTypedLetters={arrOfTypedLetters}
              wrongLetterIndex={wrongLetterIndex}
            />
          </div>
        ) : null}
        <div
          className={`absolute bottom-full flex flex-col items-center transition-transform ${
            !timeForTyping && "translate-y-[calc(100%+150px)]"
          } delay-300`}
        >
          <AccuracyChart />
          <button
            type="button"
            className="mt-5 text-3xl text-slate-950 hover:text-amber-600/75 focus:text-amber-600/75 transition-colors ease-in-out"
          >
            Restart
          </button>
        </div>
      </Container>
    </div>
  );
}
