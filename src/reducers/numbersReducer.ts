import {Action} from 'actions/type';
import {ADD_NUMBERS} from 'actions/numbersActions';

export interface NumbersState {
  list: number[][];
}

const initialState = {
  list: [],
};

export default (state: NumbersState = initialState, action: Action) => {
  switch (action.type) {
    case ADD_NUMBERS:
      return {...state, list: [...state.list, action.payload]};
    default:
      return state;
  }
};
