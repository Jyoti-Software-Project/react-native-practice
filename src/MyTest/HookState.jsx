import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HookState = () => {
    const [number, setNumber] = useState(0);

    const add = (n) => {
        setNumber(prevNumber => prevNumber + n);
    }

    const reset = () => {
        setNumber(0);
    }

    const sub = (n) => {
        setNumber(prevNumber => prevNumber - n);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>HookState using</Text>
            <Text style={styles.number}>{number}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Add (+10)" onPress={() => add(10)} />
                <Button title="Reset" onPress={reset} />
                <Button title="Add (-10)" onPress={() => sub(10)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 25,
        color: "#219fff",
        marginBottom: 20,
    },
    number: {
        fontSize: 50,
        color: "#ff9600",
    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '90%',
    },
});

export default HookState;
