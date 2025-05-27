import type { Note } from "./Note";

export type Tune = {
    title: string;
    puzzleNumber: number;
    shuffledArray: Note[];
    sortedArray: Note[];
    remainingClues: number;
    totalClues: number;
  };