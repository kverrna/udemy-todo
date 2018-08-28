import React from 'react';
import { View, Button } from 'react-native';
import Input from './Input';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onChangeText(txt) {
    this.setState({
      text: txt,
    });
  }

  render() {
    const { text } = this.state;
    return (
      <View>
        <View>
          <Input
            onChangeText={t => this.onChangeText(t)}
            value={text}
          />
        </View>
        <View>
          <Button title="add" onPress={() => {}} />
        </View>
      </View>
    );
  }
}
