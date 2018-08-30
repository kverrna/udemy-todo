import { Alert } from 'react-native';
import { ADD_TODO } from '../actions';

let nextId = 1;

const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: nextId += 1,
        text: action.text,
      };
      Alert.alert('teste redux', action.text);
      return [...state, newTodo];
    }
    default:
      return state;
  }
};
export default todoListReducer;
