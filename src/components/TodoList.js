import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

const TodoList = ({ todos }) => (
  <View style={{ margin: 15 }}>
    {todos.map(todo => <Text key={todo.id}>{todo.text}</Text>)}
  </View>
);
const mapStateToProps = (state) => {
  const { todos } = state;
  return { todos };
};
export default connect(mapStateToProps)(TodoList);
