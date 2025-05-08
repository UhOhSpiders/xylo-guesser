import { useState } from "react";
import "./App.css";
import Xylophone from "./Xylophone";
import Button from "./Button";
import { bubbleSort } from "./utilities/BubbleSort";
import GuessInput from "./GuessInput";
import type { Tune } from "./types/Tune";
import { DUMMY_TUNE, NOTE_DURATION } from "./constants";
import Header from "./Header";

function App() {
  const [tune, setTune] = useState<Tune>(DUMMY_TUNE);
  const [gameState, setGameState] = useState("PLAYING");
  const [hintIsPlaying, setHintIsPlaying] = useState(false);

  const handleHint = () => {
    if (tune.remainingClues > 0) {
      let tempTune = { ...tune };
      let [singleBubbleSortPass] = bubbleSort(tempTune.shuffledArray, 1);
      tempTune.shuffledArray = singleBubbleSortPass;
      tempTune.remainingClues--;
      setTune(tempTune);
      handlePlayHint();
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

  const handlePlayHint = () => {
    setHintIsPlaying(!hintIsPlaying);
    setTimeout(() => {
      setHintIsPlaying(false);
    }, tune.shuffledArray.length * NOTE_DURATION * 1000);
  };

  if (gameState === "PLAYING") {
    return (
      <>
        <Header />
        <div>
          <p>Guess the scrambled tune.</p>
          <p>Click the hint button to gradually unscramble.</p>
          <Xylophone tune={tune} hintIsPlaying={hintIsPlaying} />
          <div
            style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}
          >
            {hintIsPlaying ? (
              <p id="deactivated-button">playing...</p>
            ) : (
              <Button text={"play hint"} onClick={handlePlayHint} />
            )}
            <Button text={"hint"} onClick={handleHint} />
          </div>
          <p>Remaining clues: {tune.remainingClues}</p>
          <GuessInput
            tuneTitle={tune.title}
            handleWin={handleWin}
            handleWrongGuess={handleWrongGuess}
          />
        </div>
      </>
    );
  } else if (gameState === "WIN") {
    return <h1>you win!</h1>;
  } else if (gameState === "LOSE") {
    return <h1>you lose!</h1>;
  }
}

export default App;
