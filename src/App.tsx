import { useState } from "react";
import "./App.css";
import Xylophone from "./Xylophone";
import Button from "./Button";
import { bubbleSort } from "./utilities/BubbleSort";
import GuessInput from "./GuessInput";
import type { Tune } from "./types/Tune";
import { DUMMY_TUNE, GAME_OVER_TUNE, NOTE_DURATION } from "./constants";
import Header from "./Header";
import { createGuessEmojis } from "./utilities/CreateGuessEmojis";
import PlayButton from "./PlayButton";
import WinResults from "./WinResults";

function App() {
  const [tune, setTune] = useState<Tune>(DUMMY_TUNE);
  const [gameState, setGameState] = useState("PLAYING");
  const [tuneIsPlaying, setTuneIsPlaying] = useState(false);

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
      setTune(GAME_OVER_TUNE);
      handlePlayHint();
    }
  };

  const handleWin = () => {
    let tempTune = { ...tune };
    let [sortedArray] = bubbleSort(
      tempTune.shuffledArray,
      tempTune.remainingClues
    );
    tempTune.shuffledArray = sortedArray;
    setTune(tempTune);
    setGameState("WIN");
    handlePlayHint();
  };

  const handleWrongGuess = () => {
    if (tune.remainingClues > -1) {
      let tempTune = { ...tune };
      tempTune.remainingClues--;
      setTune(tempTune);
    } else {
      handleHint();
    }
  };

  const handlePlayHint = () => {
    setTuneIsPlaying(!tuneIsPlaying);
    setTimeout(() => {
      setTuneIsPlaying(false);
    }, tune.shuffledArray.length * NOTE_DURATION * 1000);
  };
  return (
    <>
      <Header />

      {/* GAME HEADER */}
      <div>
        {gameState === "PLAYING" ? (
          <>
            <p>Guess the scrambled tune.</p>
            <p>Click the hint button to gradually unscramble.</p>{" "}
            <p>
              Remaining guesses:{" "}
              {createGuessEmojis(tune.totalClues, tune.remainingClues)}
            </p>
          </>
        ) : gameState === "WIN" ? (
          <>
            <p>Correct!</p>
            <p>{tune.title}</p>
          </>
        ) : (
          <p>You ran out of guesses!</p>
        )}

        {/* GAME XYLO */}

        <Xylophone
          tune={tune}
          tuneIsPlaying={tuneIsPlaying}
          color={
            gameState === "WIN"
              ? "#4cdf53"
              : gameState === "LOSE"
              ? "#df4c4c"
              : "#ba81c5"
          }
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {/* GAME FOOTER */}

          {gameState === "PLAYING" ? (
            <>
              <div style={{display:"flex", gap:"1rem", alignItems:"center"}}>
                <Button text={"hint"} onClick={handleHint} />
                <PlayButton
                  isPlaying={tuneIsPlaying}
                  handlePlayHint={handlePlayHint}
                />
              </div>

              <GuessInput
                tuneTitle={tune.title}
                handleWin={handleWin}
                handleWrongGuess={handleWrongGuess}
              />
            </>
          ) : gameState === "WIN" ? (
            <>
              <PlayButton
                isPlaying={tuneIsPlaying}
                handlePlayHint={handlePlayHint}
              />
              <WinResults tune={tune} />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
