import React from "react";
import { View, ActivityIndicator, ImageBackground, StyleSheet } from "react-native";

const LodingPage = () => {
    return (
        <ImageBackground source={require("../../public/images/Wallpaper-3.jpg")} resizeMode="cover">
            <View style={styles.lodingContainer}>
                <ActivityIndicator size={150} color="#adff2f" />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    lodingContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
})

export default LodingPage;
