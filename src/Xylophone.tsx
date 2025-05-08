import React from "react";
import { playTune } from "./utilities/playTune";
import XyloNoteBlock from "./XyloNoteBlock";

const Xylophone = ({ tune }) => {
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
  return <div style={{ height: "20rem", padding: "10px" }}>{xylophone}</div>;
};

export default Xylophone;
