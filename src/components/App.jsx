
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
    const robotAgeGuess = Math.floor(Math.random() * (AINumber[0] - AINumber[1] + 1) * AINumber[1])
    setAIGuess(robotAgeGuess)
    setIsAgeSet(true)
  }

  function isHigher () {
    setAIGuess([AIGuess, AINumber[1]])
    const robotAgeGuess = Math.floor(Math.random() * (AINumber[0] - AINumber[1] + 1) * AINumber[1])
    setAIGuess(robotAgeGuess)
  }

  function isLower () {
    setAIGuess([AIGuess, AINumber[1]])
    const robotAgeGuess = Math.floor(Math.random() * (AINumber[0] - AINumber[1] + 1) * AINumber[1])
    setAIGuess(robotAgeGuess)
  }


  return (
    <div className="App App-header">
       <form onSubmit={handleSubmit}>
        <label htmlFor="yourAge">Put In Your Age</label>
        <input id="yourAge" onChange={setAgeFunc} type="number" min="1" max="100" value={age}></input>
        <button>Submit</button>
       </form>

      {isAgeSet ? <h1>The AI guessed that you were {AIGuess}</h1> : null}
      {AIGuess ? <div><h2>Is your age higher or lower</h2><button onCLick={() => isHigher()}>Higher</button><button onCLick={() => isLower()}>Lower</button></div> : null}
    </div>
  );
}

export default App;
