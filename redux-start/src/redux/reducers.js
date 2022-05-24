//state
// {todos:[{text:'code',done:false}],filter:'ALL'}

import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from "./actions.js";
import { combineReducers } from "redux";
// state의 초기값
const initialState = { todos: [], filter: "ALL" };
const todosInitialState = initialState.todos;
const filterInitialState = initialState.filter;

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});
export default reducer;

function todosReducer(previousState = todosInitialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
  }
  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true };
      }
    });
  }

  return previousState;
}

function filterReducer(previousState = filterInitialState, action) {
  if (action.type === SHOW_ALL) {
    return "ALL";
  }
  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }
  return previousState;
}
