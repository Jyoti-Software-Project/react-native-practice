import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const InputBox = ({ error, keyboardType, onChangeText, secureTextEntry, value, pHolder, color }) => {
  return (
    <View>
      <TextInput
        style={[styles.textBox, { color: color }]}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        value={value}
        placeholder={pHolder}
      />
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
    </View>
  );
};

const YourComponent = () => {
  const [Pword, setPword] = useState('');
  const [PwordError, setPwordError] = useState('');

  // Password change handler
  const handlePwordChange = (text) => {
    setPword(text);
    // Validate password logic
    // Set PwordError accordingly
  };

  return (
    <View style={styles.container}>
      <InputBox
        error={PwordError}
        keyboardType={'default'}
        onChangeText={handlePwordChange}
        secureTextEntry={true}
        value={Pword}
        pHolder={"Password"}
        color={'white'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginBottom: 10,
  },
  errorMessage: {
    color: 'red',
    marginLeft: 10,
  },
});

export default YourComponent;
