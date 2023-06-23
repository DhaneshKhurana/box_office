import { useEffect, useReducer } from 'react';

const LIKE = 'like';
const UNLIKE = 'unlike';

const reducerFn = (state, action) => {
  console.log('reduceFn:: current state', state);
  switch (action.type) {
    case LIKE:
      return [...state, action.showId];
    case UNLIKE:
      return state.filter(val => action.showId !== val);
    default:
      console.log('Sorry to say, neither like nor dislike pressed');
      break;
  }
};

export const useStorageHook = ({ redFn = reducerFn, initVal, storeKey }) => {
  const [state, dispatch] = useReducer(redFn, initVal, initVal => {
    const storedVal = localStorage.getItem(storeKey);
    console.log('Use Storage hook initialization ', storedVal);
    return storedVal ? JSON.parse(storedVal) : initVal;
  });

  console.log('CustomHooks:: value of state now', state);

  useEffect(() => {
    localStorage.setItem(storeKey, JSON.stringify(state));
    console.log('CustomHooks::use effect fav shows changed', state);
  }, [state, storeKey]);

  return [state, dispatch];
};
