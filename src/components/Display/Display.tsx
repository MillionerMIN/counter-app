import React from "react";

import { Button } from "../Button/Button";
import s from './Display.module.css'



export type DisplayType = {
   value: number
   increment: () => void
   reset: () => void
}

const Display = ({ value, reset, increment }: DisplayType) => {
   return (<div className={s.counter}>
      <div className={s.display}>
         <div className={value === 5 ? `${s.counterValue}` : ''}>{value}</div>
      </div>
      <div className={s.buttons}>
         <Button title='RESET' disabled={value === 0} onClick={reset} />
         <Button title='INCRIMENT' disabled={value === 5} onClick={increment} />
      </div>
   </div>
   )
}

export {
   Display
}