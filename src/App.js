import { useState, useEffect } from "react";
import Die from "./components/Die"
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti'

function App() {  
  const [diceArray, setDiceArray] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(()=> {
    const allHeld = diceArray.every(item => item.isHeld);
    const firstValue = diceArray[0].value;
    const allSameValue = diceArray.every(item => item.value === firstValue);
    
    if (allHeld && allSameValue)
    {
      setTenzies(true);
    }
  }, [diceArray])

  function generateNewDie()
  {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6), 
      isHeld: false
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDice()
  {
    if (!tenzies)
    {
      setDiceArray(prevArray => prevArray.map(item => 
        {
          return item.isHeld ? item : generateNewDie();
        })
      )
    } else 
    {
      setTenzies(false);
      setDiceArray(allNewDice());
    }
  }

  function holdDice(id)
  {
    setDiceArray(prevArray => prevArray.map(item => 
      {
        return item.id === id ? 
        {...item, isHeld: !item.isHeld} : item
      })
    )
  }

  const diceElements = diceArray.map(item => 
    <Die 
      id={item.id} 
      value={item.value} 
      isHeld={item.isHeld}
      handleClick={() => holdDice(item.id)}
  />)

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button 
        className="button-roll" 
        onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  );
}

export default App;
