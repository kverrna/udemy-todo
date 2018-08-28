import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoForm from './components/TodoForm';

export default class TodoApp extends React.Component {
  render() {
    return (
      <View style={{ margin: 50 }}>
        <TodoForm />
      </View>);
  }
}
