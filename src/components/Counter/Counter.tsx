import React from "react";
import { Button } from "../Button/Button";
import s from './Counter.module.css'

type CounterType = {
   counter: number
   increment: () => void
   reset: () => void

}

const Counter = ({ counter, increment,reset }: CounterType) => {
   return (<div className={s.counter}>
      <div className={s.display}>
         <div className={counter === 5 ? `${s.counterValue}`: ''}>{counter}</div>
      </div>
      <div className={s.buttons}>
         <Button title='RES' disabled={counter===0} onClick={reset} />
         <Button title='INC' disabled={counter === 5} onClick={increment} />
      </div>
   </div>
   )
}

export {
   Counter
}