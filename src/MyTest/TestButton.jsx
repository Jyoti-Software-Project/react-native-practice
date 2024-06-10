import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const TestButton = () => {
    const [texts, setTexts] = useState([]);

    const showText = () => {
        setTexts([...texts, 'You clicked me']);
        if (texts.length === 9) {
            Alert.alert("Button will disable now");
        }
    };

    const resetText = () => {
        if (texts.length > 0) {
            Alert.alert("Resetting texts");
            setTimeout(() => {
                setTexts([]);
            }, 1500);
        }
    };
    
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Button</Text>
            </View>
            <View style={styles.buttonRow}>
                <View style={styles.buttonContainer}>
                    <Button title={"click me " + texts.length} onPress={showText} disabled={texts.length > 9} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={"Reset " + (texts.length === 0 ? '0' : '')} onPress={resetText} disabled={texts.length === 0} style={styles.button} />
                </View>
            </View>
            {texts.map((text, index) => (
                <Text key={index}>{text}</Text>
            ))}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        opacity: 0.5,
        marginVertical: 30,
    },
    title: {
        color: "black",
        fontSize: 25,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        paddingHorizontal: 0,
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 5,
        width: "50%",
        marginVertical: 15,
    },
});

export default TestButton;