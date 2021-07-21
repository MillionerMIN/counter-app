import React, { useState } from 'react';
import { Counter } from '../Counter/Counter';
import s from './App.module.css';

function App() {
  let [counter, setCounter] = useState<number>(0);

  const minValue = 0,
    maxValue = 5;



  function inc() {
    let newCounter = counter++;
    if (newCounter > maxValue) {
      newCounter = maxValue
    } else {
      setCounter(newCounter)
    }
  }

  function reset() {
    setCounter(minValue)
  }


  return (
    <div className={s.app}>
      <div className={s.wrapper}>
        <Counter counter={counter} increment={inc} reset={reset}/>
      </div>
    </div>
  )
}

export default App;
