
import { useState, useEffect } from 'react';
import '../App.css';

function App() {
  const [age, setAge] = useState("")
  const [isAgeSet, setIsAgeSet] = useState(false)
  const [AIGuess, setAIGuess] = useState("")
  const [AINumber, SetAINumber] = useState([1, 100])
  const [higherLowerClicked, setHigherLowerClicked] = useState(false)
  
  function setAgeFunc (e) {
    setAge(e.target.value)
  }
  
  useEffect(() => {
    console.log("useEffect", AINumber)
  }, [AINumber])
  
  function handleSubmit(e) {
    e.preventDefault()
    let robotAgeGuess = Math.floor(Math.random() * (AINumber[1] - AINumber[0] + 1) + AINumber[0])
    console.log(robotAgeGuess)
    setAIGuess(robotAgeGuess)
    setIsAgeSet(true)
  }

  function isHigher () {
    SetAINumber([AIGuess, AINumber[1]])
    setHigherLowerClicked(true)
  }
  
  function isLower () {
    SetAINumber([AINumber[0], AIGuess])
    setHigherLowerClicked(true)
  }

  return (
    <div className="App App-header">
       <form onSubmit={handleSubmit}>
        <label htmlFor="yourAge">Put In Your Age</label>
        <input id="yourAge" onChange={setAgeFunc} type="number" min="1" max="100" value={age}></input>
        <button>Submit</button>
       </form>

      {isAgeSet ? <h1>The AI guessed that you were {AIGuess}</h1> : null}
      {AIGuess == age  && isAgeSet ? <h2>Guessed Your Age</h2> : null}
      {AIGuess && AIGuess !== age ? <div><h2>Is your age higher or lower</h2><button onClick={isHigher}>Higher</button><button onClick={isLower}>Lower</button></div> : null}
      {higherLowerClicked && AIGuess != age? 
      <form onSubmit={handleSubmit}>
        <button>Guess Again</button>  
      </form> :
      null}
    </div>
  );
}

export default App;
