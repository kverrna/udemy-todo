import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import Input from './Input';
import { addTodo, updateTodo, setTodoText } from '../actions';

class TodoForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: '',
  //   };
  // }

  onChangeText(txt) {
    const { dispacthSetTodoText } = this.props;
    dispacthSetTodoText(txt);
  }

  onPress() {
    const { dispacthAddTodo, dispacthUpdateTodo, todo } = this.props;
    const { id, text } = todo;
    if (id) { dispacthUpdateTodo(todo); } else dispacthAddTodo(text);
  }

  render() {
    const { todo } = this.props;
    const { text } = todo;
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
            title={todo.id ? 'atualizar' : 'salvar'}
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

const mapStateToProps = state => ({
  todo: state.editingTodo,
});
export default connect(mapStateToProps,
  {
    dispacthAddTodo: addTodo,
    dispacthSetTodoText: setTodoText,
    dispacthUpdateTodo: updateTodo,
  })(TodoForm);
