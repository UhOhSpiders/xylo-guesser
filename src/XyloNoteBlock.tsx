import React from "react";
import { synth } from "./utilities/initToneJS";
import * as Tone from "tone";
const XyloNoteBlock = ({ note, height }) => {
  synth;
    console.log(height)
  const playNote = (midiNote) => {
    let now = Tone.now();
    let frequency = Tone.Frequency(midiNote, "midi");
    synth.triggerAttack(frequency, now);
    synth.triggerRelease(frequency, now + 0.2);
  };

  return <button style={{height:`${(Math.pow(height, 10)*100)}%`}} onMouseEnter={() => playNote(note)}>-</button>;
};

export default XyloNoteBlock;
