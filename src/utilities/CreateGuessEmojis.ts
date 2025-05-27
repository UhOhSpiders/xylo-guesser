export function createGuessEmojis(totalClues: number, remainingClues: number): string {
    let emojis = [];
    for (let i = 0; i < totalClues; i++) {
        if (i < remainingClues) {
            emojis.push("🟩");
        } else {
            emojis.push("⬜");
        }
    }
    const concatEmojis = emojis.join(" ");
    return concatEmojis
}