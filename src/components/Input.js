import React from 'react';
import { View, TextInput } from 'react-native';

const Input = ({ onChangeText, value }) => (
  <TextInput
    style={{ backgroundColor: '#222', padding: 10, color: '#fff' }}
    onChangeText={onChangeText}
    value={value}
  />
);
export default Input;
