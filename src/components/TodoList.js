import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

const TodoList = ({ todos }) => (
  <View style={{ margin: 1, padding: 10 }}>

    {todos.map(todo => (
      <TouchableOpacity onPress={() => {}}>
        <Text key={todo.id} style={{ padding: 10, backgroundColor: '#ff1', margin: 2 }}>
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
export default connect(mapStateToProps)(TodoList);
