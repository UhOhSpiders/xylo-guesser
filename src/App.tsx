import { useState } from "react";
import "./App.css";
import Xylophone from "./Xylophone";
import Button from "./Button";
import { bubbleSort } from "./utilities/BubbleSort";
import GuessInput from "./GuessInput";
import type { Tune } from "./types/Tune";
import { DUMMY_TUNE } from "./constants";

function App() {
  const [tune, setTune] = useState<Tune>(DUMMY_TUNE);
  const [gameState, setGameState] = useState("PLAYING");

  const handleHint = () => {
    if (tune.remainingClues > 0) {
      let tempTune = {...tune};
      let [singleBubbleSortPass] = bubbleSort(tempTune.shuffledArray, 1);
      tempTune.shuffledArray = singleBubbleSortPass;
      tempTune.remainingClues--;
      setTune(tempTune);
    } else {
      setGameState("LOSE");
    }
  };

  const handleWin = () => {
    setGameState("WIN");
  };

  const handleWrongGuess = () => {
    if (tune.remainingClues > -1) {
      let tempTune = { ...tune };
      tempTune.remainingClues--;
      setTune(tempTune);
    } else setGameState("LOSE");
  };

  if (gameState === "PLAYING") {
    return (
      <>
        <h1>xylo guesser</h1>
        <p>Guess the scrambled tune.</p>
        <p>Click the hint button to gradually unscramble.</p>
        <Xylophone tune={tune} />
        <Button text={"hint"} color={"A0C35A"} onClick={handleHint} />
        <p>Remaining clues: {tune.remainingClues}</p>
        <GuessInput
          tuneTitle={tune.title}
          handleWin={handleWin}
          handleWrongGuess={handleWrongGuess}
        />
      </>
    );
  } else if (gameState === "WIN") {
    return <h1>you win!</h1>;
  } else if (gameState === "LOSE") {
    return <h1>you lose!</h1>;
  }
}

export default App;
