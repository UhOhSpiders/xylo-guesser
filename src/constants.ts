import type { Tune } from "./types/Tune";

export const NOTE_DURATION = 0.2

export const DUMMY_TUNE: Tune = {
  title: "Mary Had a Little Lamb",
  puzzleNumber: 1,
  shuffledArray: [
    { pitch: 64, index: 0, duration: "8n." },
    { pitch: 62, index: 9, duration: "4n" },
    { pitch: 60, index: 12, duration: "4n" },
    { pitch: 64, index: 10, duration: "4n" },
    { pitch: 62, index: 3, duration: "4n" },
    { pitch: 64, index: 6, duration: "4n" },
    { pitch: 60, index: 2, duration: "4n" },
    { pitch: 62, index: 11, duration: "4n" },
    { pitch: 64, index: 7, duration: "4n" },
    { pitch: 62, index: 1, duration: "16n" },
    { pitch: 64, index: 4, duration: "4n" },
    { pitch: 62, index: 8, duration: "4n" },
    { pitch: 64, index: 5, duration: "4n" },
  ],
  sortedArray: [
    { pitch: 64, index: 0, duration: "8n." },
    { pitch: 62, index: 1, duration: "16n" },
    { pitch: 60, index: 2, duration: "4n" },
    { pitch: 62, index: 3, duration: "4n" },
    { pitch: 64, index: 4, duration: "4n" },
    { pitch: 64, index: 5, duration: "4n" },
    { pitch: 64, index: 6, duration: "4n" },
    { pitch: 64, index: 7, duration: "4n" },
    { pitch: 62, index: 8, duration: "4n" },
    { pitch: 62, index: 9, duration: "4n" },
    { pitch: 64, index: 10, duration: "4n" },
    { pitch: 62, index: 11, duration: "4n" },
    { pitch: 60, index: 12, duration: "4n" }
  ],
  totalClues: 8,
  remainingClues: 8
};

export const GAME_OVER_TUNE: Tune = {
  title: "Game Over",
  puzzleNumber: 0,
  shuffledArray: [
    { pitch: 50, index: 0, duration: "1n" },
    { pitch: 49, index: 1, duration: "1n" },
    { pitch: 48, index: 2, duration: "1n" },
    { pitch: 47, index: 3, duration: "3n" },
  ],
  sortedArray: [
    { pitch: 50, index: 0, duration: "1n" },
    { pitch: 49, index: 1, duration: "1n" },
    { pitch: 48, index: 2, duration: "1n" },
    { pitch: 47, index: 3, duration: "3n" }],
  totalClues: 0,
  remainingClues: 0
}