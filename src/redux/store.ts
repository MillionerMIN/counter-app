import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./counterReducer";
import { loadState, saveState } from '../util/localStorage-util';

const persistedState = loadState();

const rootReducer = combineReducers({
   counter: counterReducer
})

export const store = createStore(rootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(()=> {
   saveState({
      counter: store.getState().counter
   });
});

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;