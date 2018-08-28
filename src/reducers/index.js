import { ADD_TODO } from '../actions';

const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // adicionar o Todo
    default:
      return state;
  }
};
export default todoListReducer;
