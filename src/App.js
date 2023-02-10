import React from "react";
import Die from "./components/Die"
import {nanoid} from 'nanoid';

function App() {
  const [diceArray, setDiceArray] = React.useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push({
          id: nanoid(),
          value: Math.ceil(Math.random() * 6), 
          isHeld: false
        })
    }
    return newDice
  }

  function rollDice()
  {
    setDiceArray(allNewDice());
  }

  const diceElements = diceArray.map(item => 
    <Die id={item.id} value={item.value} isHeld={item.isHeld} 
  />)

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="button-roll" onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
