import type { Tune } from "../types/Tune";
import { bubbleSort } from "./BubbleSort"
import { shuffle } from "./Shuffle"

export function CreateTunePayload(
    melody: number[],
    title: string
): Tune {
    let maxClues: number = 0;
    let shuffledArray: { note: number, index: number }[]=[];
    let sortedArray: { note: number, index: number }[]=[];
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
    };
    return payload;
}
