import {Action} from 'actions/type';

export const ADD_NUMBERS: string = 'ADD_NUMBERS';

export const addNumbers = (payload: number[]): Action => ({
  type: ADD_NUMBERS,
  payload,
});
