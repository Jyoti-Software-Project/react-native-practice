import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";

const FetchData = () => {
    const [data, setData] = useState([]);

    const fetchDataFromAPI = async () => {
        try {
            const response = await fetch("https://microsoftedge.github.io/Demos/json-dummy-data/1MB.json");
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log("Error : " + error);
        }
    };

    useEffect(() => {
        fetchDataFromAPI();
    }, []);

    return (
        <View>
            <FlatList data={data}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => String(index)}
            />
        </View>
    );
};

export default FetchData;
