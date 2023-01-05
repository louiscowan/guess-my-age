
import { useState } from 'react';
import '../App.css';

function App() {
  const [age, setAge] = useState("")
  const [isAgeSet, setIsAgeSet] = useState(false)
  const [AIGuess, setAIGuess] = useState("")
  const [AINumber, SetAINumber] = useState([1, 100])

  function setAgeFunc (e) {
    setAge(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    let robotAgeGuess = Math.floor(Math.random() * (AINumber[1] - AINumber[0] + 1) * AINumber[0])
    console.log(robotAgeGuess)
    setAIGuess(robotAgeGuess)
    setIsAgeSet(true)
  }

  function GuessAgain () {
    let robotAgeGuess = Math.floor(Math.random() * (AINumber[1] - AINumber[0] + 1) * AINumber[0])
    console.log(robotAgeGuess)
    setAIGuess(robotAgeGuess)
    setIsAgeSet(true)
  }

  function isHigher () {
    SetAINumber([AIGuess, AINumber[1]])
    let robotAgeGuess = Math.floor(Math.random() * (AINumber[0] - AINumber[1] + 1) * AINumber[1])
    setAIGuess(robotAgeGuess)
    GuessAgain()
    console.log("higher", AINumber)
  }

  function isLower () {
    SetAINumber([AINumber[0], AIGuess])
    let robotAgeGuess = Math.floor(Math.random() * (AINumber[0] - AINumber[1] + 1) * AINumber[1])
    setAIGuess(robotAgeGuess)
    GuessAgain()
    console.log("Lower", AINumber)
  }


  return (
    <div className="App App-header">
       <form onSubmit={handleSubmit}>
        <label htmlFor="yourAge">Put In Your Age</label>
        <input id="yourAge" onChange={setAgeFunc} type="number" min="1" max="100" value={age}></input>
        <button>Submit</button>
       </form>

      {isAgeSet ? <h1>The AI guessed that you were {AIGuess}</h1> : null}
      {AIGuess === age && isAgeSet ? <h2>Guessed Your Age</h2> : null}
      {AIGuess && AIGuess !== age ? <div><h2>Is your age higher or lower</h2><button onClick={isHigher}>Higher</button><button onClick={isLower}>Lower</button></div> : null}
    </div>
  );
}

export default App;
