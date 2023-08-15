"use client";

import { useRef, useState } from "react";
import { Container, TypingContainer, AccuracyChart, Timer } from "@/components";
import { useLetters } from "@/hooks/useLetters";
import { useIsTypingStarted } from "@/hooks/useIsTypingStarted";

export default function Home() {
  const [timeForTyping, setTimeForTyping] = useState(15);
  const typingContainerRef = useRef<HTMLDivElement>(null);
  const {
    onPressKeyHandler,
    arrOfTypedLetters,
    wrongLetterIndex,
    letterMistakeCounter,
    onResetTypingTest,
  } = useLetters();
  const { isTypingStarted, setIsTypingStarted } = useIsTypingStarted(
    arrOfTypedLetters[0],
    letterMistakeCounter,
  );

  return (
    <Container>
      {timeForTyping ? (
        <div
          className={`w-3/4 h-1/4 z-10 ${
            !timeForTyping && "z-0"
          } flex flex-col justify-center`}
        >
          <h1
            className={`mb-2 ${
              isTypingStarted && "opacity-0"
            } transition-opacity text-5xl text-center`}
          >
            Try your skill
          </h1>
          <Timer
            time={timeForTyping}
            setTimeForTyping={setTimeForTyping}
            isTypingStarted={isTypingStarted}
            typingContainerRef={typingContainerRef}
          />
          <TypingContainer
            arrOfTypedLetters={arrOfTypedLetters}
            wrongLetterIndex={wrongLetterIndex}
            onPressKeyHandler={onPressKeyHandler}
            typingContainerRef={typingContainerRef}
          />
          <button
            type="button"
            className="mt-5 text-3xl text-slate-950 hover:text-amber-600/75 focus:text-amber-600/75 transition-colors ease-in-out z-10"
            onClick={() => {
              typingContainerRef?.current?.focus();
              setIsTypingStarted(false);
              setTimeForTyping(15);
              onResetTypingTest();
            }}
          >
            Restart
          </button>
        </div>
      ) : null}
      <div
        className={`absolute flex flex-col items-center opacity-0 z-0 ${
          !timeForTyping && "opacity-100 z-10"
        }`}
      >
        <AccuracyChart />
        <button
          type="button"
          className="mt-5 text-3xl text-slate-950 hover:text-amber-600/75 focus:text-amber-600/75 transition-colors ease-in-out z-10"
          onClick={() => {
            setIsTypingStarted(false);
            setTimeForTyping(15);
            onResetTypingTest();
          }}
        >
          Restart
        </button>
      </div>
    </Container>
  );
}
