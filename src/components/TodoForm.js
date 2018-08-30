import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import Input from './Input';
import { addTodo } from '../actions';

class TodoForm extends React.Component {
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

  onPress() {
    const { dispacthAddTodo } = this.props;
    const { text } = this.state;
    dispacthAddTodo(text);
    this.setState({
      text: '',
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
          <Button
            title="add"
            onPress={() => {
              this.onPress();
            }}
          />
        </View>
      </View>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   dispacthAddTodo: text => dispatch(addTodo(text)),
// });
// export default connect(null, mapDispatchToProps)(TodoForm);
export default connect(null, { dispacthAddTodo: addTodo })(TodoForm);
