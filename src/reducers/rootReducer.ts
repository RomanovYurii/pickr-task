import {combineReducers, Reducer} from 'redux';

import numbersReducer, {NumbersState} from 'reducers/numbersReducer';

export interface RootReducer {
  numbers: NumbersState;
}

export default combineReducers<Reducer>({
  numbers: numbersReducer,
});
