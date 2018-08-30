import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import devToolsEnhencer from 'remote-redux-devtools';

import TodoForm from './components/TodoForm';
import rootReducer from './reducers';

const store = createStore(rootReducer, devToolsEnhencer());

export default class TodoApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ margin: 50 }}>
          <TodoForm />
        </View>
      </Provider>
    );
  }
}
