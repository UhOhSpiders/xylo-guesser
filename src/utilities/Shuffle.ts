import type { Note } from "../types/Note";

export function shuffle(melody: { pitch: number, duration: string }[]): Note[] {
    // Add index to each note
    const indexedMelody = melody.map((note, index) => ({
        ...note,
        index,
    }));

    // Shuffle the array using Fisher-Yates
    for (let i = indexedMelody.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexedMelody[i], indexedMelody[j]] = [indexedMelody[j], indexedMelody[i]];
    }

    return indexedMelody;
}
