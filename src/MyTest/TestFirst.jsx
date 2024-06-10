import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const TestFirst = () => {
    const name = "Jyoti Prakash";
    const [task, setTask] = useState('');
    const [result, setResult] = useState(0);
    const [isPressed, setIsPressed] = useState(false);

    const styles = StyleSheet.create({
        atext: {
            color: "#0000ff",
            fontWeight: 'bold',
            fontSize: 25,
        },
        btext: {
            color: "#000",
            fontSize: 25,
        },
        ctext: {
            color: "#808080",
            fontWeight: 'bold',
            fontSize: 20,
        },
        dtext: {
            color: "#0000ff",
            fontWeight: 'bold',
            fontSize: 20,
        },
        input: {
            borderWidth: 1,
            borderColor: '#ff0000',
            paddingHorizontal: 10,
            marginVertical: 10,
            borderRadius: 10,
        },
        calculate: {
            backgroundColor: isPressed ? '#adff2f' : '#000000',
            padding: 10,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    const handlePressIn = () => {
        setIsPressed(true);
    };
    
    const handlePressOut = () => {
        setIsPressed(false);
    };

    const validation = (text) => {
        if(text <= 171) {
            setTask(text);
        }
        else {
            setTask("10");
        }
    }

    const factorial = (a) => {
        if (a <= 1) {
            return 1;
        }
        else {
            return a * factorial(a - 1);
        }
    };
    
    const calculateResult = () => {
        const calculatedResult = factorial(Number(task));
        setResult(calculatedResult);
        // console.log('Result:', calculatedResult);
    };

    return (
        <View>
            <Text style={styles.atext}>Welcome to React Native</Text>
            <Text style={styles.btext}>We love React Native</Text>
            <Text style={styles.ctext}>Hi, My name is {name}</Text>

            <Text>Enter input value will be less than 11</Text>

            <TextInput multiline numberOfLines={3} style={styles.input} value={task} onChangeText={validation} keyboardType="numeric"></TextInput>

            <Text style={styles.dtext}>Factorial = {factorial(task)}</Text>

            <TouchableOpacity style={styles.calculate} onPress={calculateResult} onPressIn={handlePressIn} onPressOut={handlePressOut}>
                <Text style={{color: isPressed ? '#ff0000' : '#adff2f'}}>Calculate</Text>
            </TouchableOpacity>
            
            <Text style={styles.dtext}>Factorial Result = {result}</Text>
        </View>
    );
};

export default TestFirst;
