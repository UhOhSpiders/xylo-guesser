export type Tune = {
    title: string;
    shuffledArray: { note: number, index: number }[];
    sortedArray: { note: number, index: number }[];
    remainingClues: number;
  };