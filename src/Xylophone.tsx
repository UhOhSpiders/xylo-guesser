import XyloNoteBlock from "./XyloNoteBlock";
import type { Tune } from "./types/Tune";

type XylophoneProps = {
  tune: Tune;
};

const Xylophone: React.FC<XylophoneProps>  = ({ tune }) => {
  let highestNote = Math.max(...tune.shuffledArray.map((o) => o.note));

  let xylophone = tune.shuffledArray.map((note, index) => {
    return (
      <XyloNoteBlock
        key={index}
        note={note.note}
        height={note.note / highestNote}
      />
    );
  });
  return <div style={{ height: "20rem", paddingBottom:"3rem", paddingTop:"3rem" }}>{xylophone}</div>;
};

export default Xylophone;
