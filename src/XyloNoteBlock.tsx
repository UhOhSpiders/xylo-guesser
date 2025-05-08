import { synth } from "./utilities/initToneJS";
import * as Tone from "tone";

type XyloNoteBlockProps = {
  note: number;
  height: number;
};

const XyloNoteBlock: React.FC<XyloNoteBlockProps> = ({ note, height }) => {
  synth;
  const playNote = (midiNote: number) => {
    let now = Tone.now();
    let frequency = Tone.Frequency(midiNote, "midi").toFrequency();
    synth.triggerAttack(frequency, now);
    synth.triggerRelease(frequency, now + 0.2);
  };

  return (
    <button
      style={{ height: `${Math.pow(height, 10) * 100}%` }}
      onMouseEnter={() => playNote(note)}
    >
      -
    </button>
  );
};

export default XyloNoteBlock;
