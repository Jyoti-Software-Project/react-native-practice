import React, { useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CardDetail from "../components/CardDetail";
// import NetflixCard from "../components/NetflixCard";

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
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Touchable Opacity</Text>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity onPress={showText} disabled={texts.length > 9}>
                    <Text style={texts.length > 9 ? styles.touchButtonDisable : styles.touchButton}>click me {texts.length}</Text>
                    <Image source={require("../../public/images/Wallpaper-3.jpg")} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={resetText} disabled={texts.length === 0}>
                    <Text style={texts.length === 0 ? styles.touchButtonDisable : styles.touchButton}>Reset {texts.length === 0 ? '0' : ''}</Text>
                </TouchableOpacity>
            </View>
            {texts.map((text, index) => (
                <Text key={index}>{text}</Text>
            ))}
            <ScrollView>
                <CardDetail textData="First" />
                <CardDetail textData="Second" />
                <CardDetail textData="Third" />
                {/* <NetflixCard /> */}
            </ScrollView>
            <Text style={styles.title}>Touchable Opacity End</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        opacity: 0.5,
        marginVertical: 30,
        overflow: "scroll",
    },
    title: {
        color: "black",
        fontSize: 25,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "evenly",
        width: "100%",
        paddingHorizontal: 0,
    },
    touchButton: {
        marginHorizontal: 18,
        paddingHorizontal: 40,
        paddingVertical: 10,
        width: "90%",
        color: "white",
        backgroundColor: "#2196f3",
        borderRadius: 18,
    },
    touchButtonDisable: {
        marginHorizontal: 18,
        paddingHorizontal: 40,
        paddingVertical: 10,
        width: "90%",
        color: "white",
        backgroundColor: "#dfdfdf",
        borderRadius: 18,
    },
    image: {
        width: 25,
        height: 25,
        borderRadius: 12,
        position: "absolute",
        top: 7.5,
        left: 27,
    },
});

export default TestButton;