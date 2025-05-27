import type { Note } from "../types/Note";
import type { Tune } from "../types/Tune";
import { bubbleSort } from "./BubbleSort"
import { shuffle } from "./Shuffle"

export function CreateTunePayload(
    melody: { pitch: number, duration: string}[],
    title: string
): Tune {
    let maxClues: number = 0;
    let puzzleNumber = 0
    let shuffledArray: Note[] = [];
    let sortedArray: Note[] = [];
    while (maxClues < 5) {
        shuffledArray = shuffle(melody);
        let [sortedArr, sortPasses] = bubbleSort(shuffledArray)
        maxClues = sortPasses;
        sortedArray = sortedArr;
    }
    let payload = {
        title: title,
        shuffledArray: shuffledArray,
        sortedArray: sortedArray,
        remainingClues: maxClues,
        totalClues: maxClues,
        puzzleNumber: puzzleNumber,
    };
    return payload;
}
