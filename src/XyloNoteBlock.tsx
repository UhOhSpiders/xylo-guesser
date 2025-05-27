import { useEffect, useState } from "react";
import { synth } from "./utilities/initToneJS";
import * as Tone from "tone";
import type { Note } from "./types/Note";

type XyloNoteBlockProps = {
  note: Note;
  height: number;
  index: number;
  tuneIsPlaying: boolean;
  color: string;
};

const XyloNoteBlock: React.FC<XyloNoteBlockProps> = ({
  note,
  height,
  index,
  tuneIsPlaying: hintIsPlaying,
  color
}) => {
  const [noteIsPlaying, setNoteIsPlaying] = useState(false);
  useEffect(() => {
    if (hintIsPlaying) {
      playNote(note, index / 5);
    }
  }, [hintIsPlaying]);

  synth;

  const playNote = (midiNote: Note, delay?: number) => {
    let now = Tone.now();
    let frequency = Tone.Frequency(midiNote.pitch, "midi").toFrequency();
    let startTime = delay ? delay + now : now;
    const subdivision = Tone.Time(midiNote.duration);
    const noteDuration =  subdivision.toSeconds();
    synth.triggerAttack(frequency, startTime);
    synth.triggerRelease(frequency, startTime + noteDuration);
    Tone.Draw.schedule(function () {
      setNoteIsPlaying(true);
    }, startTime);
    Tone.Draw.schedule(function () {
      setNoteIsPlaying(false);
    }, startTime + noteDuration);
  };

  if (noteIsPlaying) {
    return (
      <button
        style={{
          height: `${Math.pow(height, 10) * 100}%`,
          backgroundColor: "#3c2b3f",
          flexShrink: 1,
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
        style={{
          height: `${Math.pow(height, 10) * 100}%`,
          flexShrink: 1,
          color: color,
          backgroundColor: color,
        }}
        onMouseEnter={() => playNote(note)}
        onClick={() => playNote(note)}
      >
        -
      </button>
    );
  }
};

export default XyloNoteBlock;
