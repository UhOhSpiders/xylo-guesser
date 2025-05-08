import { synth } from "./initToneJS";
import * as Tone from "tone";
export function playTune(shuffledArray: {
    note: number;
    index: number;
}[]) {
    let now = Tone.now()
    synth.releaseAll(now)
    shuffledArray.forEach((item, index) => {
        let tone = Tone.Frequency(item.note,"midi")
        synth.triggerAttack(tone, now + index/3)
        synth.triggerRelease(tone, now + index/3 + 1/3)
    })
}