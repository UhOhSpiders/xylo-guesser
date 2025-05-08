export function shuffle(melody: number[]): { note: number, index: number }[] {
    let pairedMelody = melody.map((note, index) => ({ note, index }));

    for (let i = pairedMelody.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairedMelody[i], pairedMelody[j]] = [pairedMelody[j], pairedMelody[i]];
    }

    return pairedMelody;
}
