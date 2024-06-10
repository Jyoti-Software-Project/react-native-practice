import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MultipleCss = () => {
    return (
        <View>
            <Text style={[styles.text, styles.text1]}>gggggg</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
    text1: {
        fontSize: 25,
        backgroundColor: "red",
    },
});

export default MultipleCss;
