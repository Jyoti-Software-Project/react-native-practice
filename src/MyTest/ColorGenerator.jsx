import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from "react-native";

const ColorGenerator = () => {
    const [backgroundColor, setBackgroundColor] = useState([]);

    const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Random Color Generator</Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                setBackgroundColor([...backgroundColor, randomColor()])
            }}>
                <Text style={styles.buttonTextStyle}>Generate</Text>
            </TouchableOpacity>

            <ScrollView style={styles.colorContainer}>
                <FlatList style={{width: "100%",}} data={backgroundColor} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => {
                    return (
                        <View style={[styles.color, {backgroundColor: item}]}>
                            <Text style={{color: "#000"}}>{item}</Text>
                            <Text style={{color: "#fff"}}>{item}</Text>
                        </View>
                    )
                }} />
            </ScrollView>
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
    buttonStyle: {
        backgroundColor: "#2196f3",
        position: "relative",
        overflow: "hidden",
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    buttonTextStyle: {
        color: "#fff",
        textTransform: "uppercase",
    },
    colorContainer: {
        marginTop: 20,
        width: "95%",
        height: 600,
    },
    color: {
        backgroundColor: "rgba(255, 255, 0, 0.7)",
        width: "100%",
        height: 50,
        borderRadius: 10,
        marginVertical: 5,
        alignItems: "center",
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
});

export default ColorGenerator;
