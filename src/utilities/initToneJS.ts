import * as Tone from "tone";

export const synth = new Tone.PolySynth({
    maxPolyphony: 6,
    voice: Tone.Synth,
    options: {
        envelope: {
            attack: 0.05,
            decay: 1,    
            sustain: 0,
            release: 3.0   
        }
    }
}).toDestination()

