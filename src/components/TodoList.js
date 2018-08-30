import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

const TodoList = ({ todos }) => (
  <View style={{ margin: 1, padding: 10 }}>
    {todos.map(todo => <Text key={todo.id} style={{ padding: 10, backgroundColor: '#ff1', margin: 2 }}>{todo.text}</Text>)}
  </View>
);
const mapStateToProps = (state) => {
  const { todos } = state;
  return { todos };
};
export default connect(mapStateToProps)(TodoList);
