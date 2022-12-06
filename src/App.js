import React,{useState} from 'react';
import  Generator  from './Component/generator'
import './index.scss';

export default function App() {
  const [randomNum, setRandomNum] = useState(allNewNumber());

  function allNewNumber() {
    const NewNumber = []
    for (let i = 0; i < 10; i++) {
        NewNumber.push(Math.ceil(Math.random() * 6))
    }
    return NewNumber

    }
    function rollDice() {
      setRandomNum(allNewNumber())
  }
    const randNumber = randomNum.map(num => <Generator value={num}/>)
    return (
        <main>
            <div className="dice-container">
              {randNumber}
            </div>
            <button className="generate-btn" onClick={rollDice}>Generate</button>
        </main>
    )
}
