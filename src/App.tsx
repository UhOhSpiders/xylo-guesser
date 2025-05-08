import { useState } from "react";
import "./App.css";
import { CreateTunePayload } from "./utilities/CreateTunePayload";
import Xylophone from "./Xylophone";
import Button from "./Button";
import { bubbleSort } from "./utilities/BubbleSort";
import GuessInput from "./GuessInput";

function App() {
  const [tune, setTune] = useState(
    CreateTunePayload(
      [64, 62, 60, 62, 64, 64, 64, 64, 62, 62, 64, 62, 60],
      "mary had a little lamb"
    )
  );
  // fetch scrambled tune from db rather than generating it in the client
  const [gameState, setGameState] = useState("PLAYING");

  const handleHint = () => {
    if (tune.remainingClues > 0) {
      let tempTune = { ...tune };
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
        <h4>guess the tune hidden in this scrambled xylophone</h4>
        <h4>click the hint button to gradually unscramble it</h4>
        <Xylophone tune={tune}/>
        <Button text={"hint"} onClick={handleHint} />
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
