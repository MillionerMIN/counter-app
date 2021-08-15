import React, { useEffect, useState } from 'react';
import { Display } from '../Display/Display';
import s from './App.module.css';

function App() {
  let [counter, setCounter] = useState<number>(0);


  useEffect(() => {
    const velueAsString = localStorage.getItem('counterValue');
    if (velueAsString) {
      const newValue = JSON.parse(velueAsString);
      setCounter(newValue);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('counterValue', JSON.stringify(counter))
  }, [counter]);

  const minValue = 0,
    maxValue = 5;

  const inc = () => {
    let newValue = counter++;
    if (newValue > maxValue) {
      newValue = maxValue
    } else {
      setCounter(newValue)
    }
  }


  function reset() {
    setCounter(minValue)
  }

  return (
    <div className={s.app}>
      <div className={s.wrapper}>
        <Display value={counter} increment={inc}  reset={reset}/>
      </div>
    </div>
  )
}

export default App;
