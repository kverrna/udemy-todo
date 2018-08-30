import React from 'react';
import { View, Text } from 'react-native';

const TodoList = ({ todos = [] }) => (
  <View style={{ margin: 15 }}>
    {todos.map(todo => <Text key={todo.id}>{todo.text}</Text>)}
    <Text>kakaka</Text>
  </View>
);

export default TodoList;
