import { useState } from "react";
import { createGuessEmojis } from "./utilities/CreateGuessEmojis";
import type { Tune } from "./types/Tune";

type WinResultsProps = {
  tune: Tune;
};

const WinResults: React.FC<WinResultsProps> = ({ tune }) => {
  const [buttonText, setButtonText] = useState("Copy results to clipboard");

  let guessEmojis = createGuessEmojis(tune.totalClues, tune.remainingClues);

  const updateClipboard = (results: string) => {
    let text = `Xylo Guesser #${tune.puzzleNumber}: \n ${results}`;
    navigator.clipboard.writeText(text);
    setButtonText("copied to clipboard");
  };

  return (
    <div>
      <p>{guessEmojis}</p>
      <button onClick={() => updateClipboard(guessEmojis)}>{buttonText}</button>
    </div>
  );
};

export default WinResults;
