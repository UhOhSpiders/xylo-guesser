import React from 'react'

const GuessInput = ({tuneTitle, handleWin, handleWrongGuess}) => {
    function check(formInput: string){
        if(formInput.get("guess") === tuneTitle){
            handleWin()
        }else{
            handleWrongGuess()
        }
    }

  return (
    <form action={check}>
    <input name="guess" />
    <button type="submit">Guess</button>
</form>
  )
}

export default GuessInput