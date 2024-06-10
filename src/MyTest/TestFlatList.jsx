import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import data from '../../public/json/Data.json';

const TestFlatList = () => {
    // const data1 = require('../../public/json/Data.json');

    const names = [
        { name: "India" },
        { name: "Afghanistan" },
        { name: "Aland Islands" },
        { name: "Albania" },
        { name: "Algeria" },
        { name: "AmericanSamoa" },
        { name: "Andorra" },
        { name: "Angola" },
        { name: "Anguilla" },
        { name: "Antarctica" },
        { name: "Antigua and Barbuda" },
        { name: "Argentina" },
        { name: "Armenia" },
        { name: "Aruba" },
        { name: "Australia" },
        { name: "Austria" },
        { name: "Azerbaijan" },
        { name: "Bahamas" },
        { name: "Bangladesh" },
        { name: "Barbados" },
    ];

    return <View style={styles.mainContainer}>
            <Text style={styles.title}>All JSON names will shown below</Text>

            <FlatList style={styles.textContainer} keyExtractor={(key) => {
                return key.id;
            }}
            data={data} renderItem={({ item, index }) => (
                <Text style={styles.atext}>{index + 1} . {item.name}</Text>
            )} />

            <Text style={styles.title}>All names will shown below</Text>

            {/* <FlatList data={names} horizontal renderItem={(item) => {
                return console.log(item);
            }} /> */}
            <FlatList data={names}
            horizontal
            // numColumns={1}
            inverted
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <Text style={styles.btext}>{item.name}</Text>
            )}  />
        </View>;
};

const styles = StyleSheet.create({
    // mainContainer: {
    //     overflow: "scroll",
    // },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#000000',
        textDecorationLine: 'underline',
    },
    textContainer: {
        width: "auto",
        height: 200,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "red",
    },
    atext: {
        color: "#ad0000",
        backgroundColor: "#808080",
        marginVertical: 5,
        padding: 5,
        fontWeight: '500',
        fontSize: 18,
    },
    btext: {
        color: "#ad0000",
        backgroundColor: "#808080",
        marginHorizontal: 5,
        padding: 5,
        fontWeight: '500',
        fontSize: 18,
    },
});

export default TestFlatList;
