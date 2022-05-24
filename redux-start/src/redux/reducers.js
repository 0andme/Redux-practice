//state
// ['코딩','점심먹기']

import { ADD_TODO } from "./actions.js";
// state의 초기값
const initialState = [];

function todoApp(previousState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }
  return previousState;
}
