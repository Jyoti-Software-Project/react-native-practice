import React from "react";
import { Text, View } from "react-native";
import Orientation from "../../public/ProjectProps/Orientation";

const Test = () => {
    const orientation = Orientation();
    
    return (
        <View>
            <Text>Use this for test</Text>
            <Text>{orientation}</Text>
        </View>
    );
};

export default Test;
