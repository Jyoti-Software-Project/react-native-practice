// Test.jsx
import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const MyTest = () => {
  const name = "Jyoti";
  const line = <Text style={styles.text}>I eat rice</Text>;

  return (
    <View>
        <Text style={styles.text}>Write Your Text Here</Text>
        <Text style={styles.text}>My name is {name}</Text>
        {line}
        <TextInput multiline value='gg' style={styles.textInput}></TextInput>
        <TouchableOpacity style={styles.addButton}>
            <Text>Submitt</Text>
        </TouchableOpacity>

        <View>
          <Text>Welcome to react native learning</Text>
          <Text>We love react native</Text>
          <Text>Hi, My name is {name}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    text: {
        color: "#000",
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#696969',
      borderRadius: 5,
      width: '100%',
      minHeight: 100,
      paddingHorizontal: 10,
      paddingTop: 10,
      color: '#000',
      marginVertical: 10,
  },
  addButton: {
    backgroundColor: 'lightblue',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyTest;
