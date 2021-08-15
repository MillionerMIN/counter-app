import { Dispatch } from "redux";
import { AppRootStateType } from "./store";

export const INCRIMENT = 'INCRIMENT';
export const RESET = 'RESET';
const SET_VALUE_FROM_LOCAL_STORAGE = 'SET_VALUE_FROM_LOCAL_STORAGE';


export type ActionType = ReturnType<typeof incValueAC>
   | ReturnType<typeof resValueAC>
   | ReturnType<typeof setValueFromLocalStorageAC>

export type initilitionStateType = typeof initilitionState

const initilitionState = {
   value: 0,
}

export const counterReducer = (state: initilitionStateType = initilitionState, action: ActionType): initilitionStateType => {
   switch (action.type) {
      case INCRIMENT:
         return { ...state, value: state.value + 1 }
      case RESET:
         return { ...state, value: state.value = 0 }
      case SET_VALUE_FROM_LOCAL_STORAGE:
         return { ...state, value: action.value }
      default:
         return state;
   }
}

export const incValueAC = () => ({ type: INCRIMENT } as const)
export const resValueAC = () => ({ type: RESET } as const)
export const setValueFromLocalStorageAC = (value: number) => ({ type: SET_VALUE_FROM_LOCAL_STORAGE, value } as const)

//THUNK

export const incValueTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
   let currentValue = getState().counterState.value;
   localStorage.setItem('counterValue', JSON.stringify(currentValue + 1))
   dispatch(incValueAC())
}

export const setValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
   const velueAsString = localStorage.getItem('counterValue');
   if (velueAsString) {
      const newValue = JSON.parse(velueAsString);
      dispatch(setValueFromLocalStorageAC(newValue));
   }
}