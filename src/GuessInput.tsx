type GuessInputProps = {
  tuneTitle: string;
  handleWin: Function;
  handleWrongGuess: Function;
};

const GuessInput: React.FC<GuessInputProps> = ({
  tuneTitle,
  handleWin,
  handleWrongGuess,
}) => {
  function check(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      guess: { value: string };
    };
    if (formElements.guess.value === tuneTitle) {
      handleWin();
    } else {
      handleWrongGuess();
    }
  }

  return (
    <form onSubmit={check}>
      <input id="guess" />
      <button type="submit">Guess</button>
    </form>
  );
};

export default GuessInput;
