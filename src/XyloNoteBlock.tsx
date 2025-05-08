import { useEffect, useState } from "react";
import { synth } from "./utilities/initToneJS";
import * as Tone from "tone";
import { NOTE_DURATION } from "./constants";

type XyloNoteBlockProps = {
  note: number;
  height: number;
  index: number;
  hintIsPlaying: boolean;
};

const XyloNoteBlock: React.FC<XyloNoteBlockProps> = ({
  note,
  height,
  index,
  hintIsPlaying,
}) => {
  const [noteIsPlaying, setNoteIsPlaying] = useState(false);
  useEffect(() => {
    if (hintIsPlaying) {
      playNote(note, index / 5);
    }
  }, [hintIsPlaying]);

  synth;

  const playNote = (midiNote: number, delay?: number) => {
    let now = Tone.now();
    let frequency = Tone.Frequency(midiNote, "midi").toFrequency();
    let startTime = delay ? delay + now : now;

    synth.triggerAttack(frequency, startTime);
    synth.triggerRelease(frequency, startTime + NOTE_DURATION);
    Tone.Draw.schedule(function () {
      setNoteIsPlaying(true);
    }, startTime);
    Tone.Draw.schedule(function () {
      setNoteIsPlaying(false);
    }, startTime + NOTE_DURATION);
  };

  if (noteIsPlaying) {
    return (
      <button
        style={{
          height: `${Math.pow(height, 10) * 100}%`,
          backgroundColor: "#3c2b3f",
          color: "#3c2b3f",
        }}
        onMouseEnter={() => playNote(note)}
        onClick={() => playNote(note)}
      >
        -
      </button>
    );
  } else {
    return (
      <button
        style={{ height: `${Math.pow(height, 10) * 100}%`, color: "#ba81c5" }}
        onMouseEnter={() => playNote(note)}
        onClick={() => playNote(note)}
      >
        -
      </button>
    );
  }
};

export default XyloNoteBlock;
