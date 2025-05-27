import XyloNoteBlock from "./XyloNoteBlock";
import type { Tune } from "./types/Tune";

type XylophoneProps = {
  tune: Tune;
  tuneIsPlaying: boolean;
  color: string;
};

const Xylophone: React.FC<XylophoneProps> = ({ tune, tuneIsPlaying, color }) => {
  let highestNote = Math.max(...tune.shuffledArray.map((o) => o.pitch));

  let xylophone = tune.shuffledArray.map((note, index) => {
    return (
      <XyloNoteBlock
        key={index}
        note={note}
        height={note.pitch / highestNote}
        index={index}
        tuneIsPlaying={tuneIsPlaying}
        color={color}
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
