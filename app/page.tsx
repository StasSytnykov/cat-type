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
    onResetTypingTest,
  } = useLetters();
  const { isTypingStarted, setIsTypingStarted } = useIsTypingStarted(
    arrOfTypedLetters[0],
    letterMistakeCounter,
  );

  const story =
    "In a sleepy village lived Elara, an adventurous girl. Despite warnings about the enchanted forest, she ventured in. Sunlight danced through trees as she wandered, stumbling upon a glimmering pond. Her reflection emerged as Naida, a trapped water nymph. Grateful, Naida offered one wish. Elara chose to understand animals.\n\nSuddenly, leaves and birdsong formed a symphony of voices. She helped animals and mediated disputes. A rabbit warned of lumberjacks threatening the forest. Elara rallied her friends. Birds spread word, villagers joined, and a united front faced the lumberjacks. Elara's speech swayed them, sparing the forest.\n\nHer ability to bridge humans and nature made her a legend. The village and forest thrived, celebrating their harmony yearly. In the heart of the woods, a bond was formed between a curious girl and wild creatures, reminding all of the magic in curiosity and compassion.";

  const letterArray = story.replace(/[^a-zA-Z]/g, "").split("");

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
          />
          <TypingContainer
            arrOfTypedLetters={arrOfTypedLetters}
            wrongLetterIndex={wrongLetterIndex}
            onPressKeyHandler={onPressKeyHandler}
          />
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
