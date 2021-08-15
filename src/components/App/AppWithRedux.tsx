import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initilitionStateType, RESET, incValueAC, incValueTC, setValueFromLocalStorageTC } from '../../redux/counterReducer';
import { AppRootStateType } from '../../redux/store';
import { Display } from '../Display/Display';
import s from './App.module.css';



const AppWithRedux = React.memo(function () {
  const counter = useSelector<AppRootStateType, initilitionStateType>(state => state.counterState)

  const dispatch = useDispatch()

useEffect(() => {
  dispatch(setValueFromLocalStorageTC())
}, [])

const inc = () => {
  dispatch(incValueTC())
}

  function reset() {
      dispatch({ type: RESET })
  }

  return (
    <div className={s.app}>
      <div className={s.wrapper}>
         <Display value={counter.value} increment={inc} reset={reset} />
      </div>
    </div>
  )
})



export default AppWithRedux;
