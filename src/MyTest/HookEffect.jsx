import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HookEffect = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hook Effect</Text>
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
});

export default HookEffect;
