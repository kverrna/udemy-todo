import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { toggleTodo, setEditingTodo } from '../actions';

const TodoList = ({ todos, dispatchToggleTodo, dispatchSetEditingTodo }) => (
  <View style={{ margin: 1, padding: 10 }}>

    {todos.map(todo => (
      <TouchableOpacity
        onLongPress={() => {
          dispatchSetEditingTodo(todo);
        }}
        onPress={() => { dispatchToggleTodo(todo.id); }}
      >
        <Text key={todo.id} style={[{ padding: 10, margin: 2 }, todo.done ? { backgroundColor: '#33e' } : { backgroundColor: '#fff' }]}>
          {todo.text}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);
const mapStateToProps = (state) => {
  const { todos } = state;
  return { todos };
};
export default connect(mapStateToProps, {
  dispatchToggleTodo: toggleTodo,
  dispatchSetEditingTodo: setEditingTodo,
})(TodoList);
