import React from "react";
import { Text, View } from "react-native";
import CardDetail from "../components/CardDetail";
import NetflixCard from "../components/NetflixCard";

const DemoComponent = () => {
    return (
        <View>
            <Text></Text>
            <CardDetail textData="My First" />
            <NetflixCard />
        </View>
    );
};

export default DemoComponent;