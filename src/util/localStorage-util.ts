import { AppRootStateType } from "../redux/store";

export const loadState = () => {
   try {
      const serializeState = localStorage.getItem('app-state');
      if (serializeState === null) {
         return undefined;
      }
      return JSON.parse(serializeState);
   } catch (err) {
      return undefined;
   }
};

export const saveState = (state: AppRootStateType) => {
   try {
      const serializeState = JSON.stringify(state);
      localStorage.setItem('app-state', serializeState);
   } catch (err) {
      //ignore write errors
   }
};