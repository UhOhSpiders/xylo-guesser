import XyloNoteBlock from "./XyloNoteBlock";
import type { Tune } from "./types/Tune";

type XylophoneProps = {
  tune: Tune;
  hintIsPlaying: boolean;
};

const Xylophone: React.FC<XylophoneProps> = ({ tune, hintIsPlaying }) => {
  let highestNote = Math.max(...tune.shuffledArray.map((o) => o.note));

  let xylophone = tune.shuffledArray.map((note, index) => {
    return (
      <XyloNoteBlock
        key={index}
        note={note.note}
        height={note.note / highestNote}
        index={index}
        hintIsPlaying={hintIsPlaying}
      />
    );
  });
  return (
    <div
      style={{
        height: "20rem",
        paddingBottom: "3rem",
        paddingTop: "3rem",
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        gap: "0.5rem",
      }}
    >
      {xylophone}
    </div>
  );
};

export default Xylophone;
