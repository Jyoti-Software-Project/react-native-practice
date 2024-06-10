import React from "react";
import { Text, View } from "react-native";
import styles from "../../public/GlobalProps/GlobalPropsCss";

const Global = () => {
    return (
        <View style={[styles("backgroundColor", "#000").props, styles("height", 80).props]}>
            <Text style={[styles("color", "#fff").props]}>Hello, How are you</Text>
        </View>
    );
};

export default Global;
