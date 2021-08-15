import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incValueAC, initilitionStateType, RESET } from '../../redux/counterReducer';
import { AppRootStateType } from '../../redux/store';
import { Display } from '../Display/Display';
import s from './App.module.css';



const AppWithRedux = React.memo(function () {
  const counter = useSelector<AppRootStateType, initilitionStateType>(state => state.counter)

  const dispatch = useDispatch()

  const inc = () => {
    dispatch(incValueAC())
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
