import { bubbleSort } from "./BubbleSort"
import { shuffle } from "./Shuffle"

export function CreateTunePayload(melody: number[], title: string) {
    let maxClues = 0
    let shuffledArray
    let sortedArray
    while (maxClues < 5) {
        shuffledArray = shuffle(melody)
        let [sortedArr, sortPasses] = bubbleSort(shuffledArray)
        maxClues = sortPasses
        sortedArray = sortedArr
    }
    let payload = { title: title, shuffledArray: shuffledArray, sortedArray: sortedArray, remainingClues: maxClues }
    return payload
}