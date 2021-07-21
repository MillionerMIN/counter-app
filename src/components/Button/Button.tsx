import React from "react";
import s from './Button.module.css';

type ButtonType = {
   title: string
   onClick: () => void
   disabled: boolean
}

const Button = ({ title, onClick, disabled }: ButtonType) => {
   return (
      <button className={disabled !== true ? `${s.button}` : `${s.disabled}`} onClick={onClick} disabled={disabled}>{title}</button>
   )
}

export {
   Button
}