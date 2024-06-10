// Test.jsx
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

const MyTest = () => {
  const [text, setText] = useState('');

  const addTask = () => {
      if (task.trim() !== '') {
          setTasks([...tasks, { id: Date.now(), text: task }]);
          setTask('');
      }
  };

  return (
    <View>
        <TextInput multiline numberOfLines={2} style={styles.textInput} value={text} onChangeText={(newText) => setText(newText)} />
        {/* <view> */}
            <TouchableOpacity onPress={addTask} style={styles.addButton}>
                <Text>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={addTask} style={styles.addButton}>
                <Text>Add</Text>
            </TouchableOpacity>
        {/* </view> */}
    </View>
  );
};

const styles = StyleSheet.create({
    textStyle: {
        color: 'red',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: '100%',
        minHeight: 100,
        paddingHorizontal: 10,
        paddingTop: 10,
        color: 'green',
        marginVertical: 10,
    },
    addButton: {
        display: 'inline',
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        width: '50%',
    },
});

export default MyTest;
