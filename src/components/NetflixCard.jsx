import React from "react";
import { Image, StyleSheet, Text, View, Button, Linking } from "react-native";

const NetflixCard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Netflix Card</Text>
            {/* <Image style={styles.image} resizeMode="cover"
                source={{
                    uri: "https://www.pinkvilla.com/files/all_dead_main_0.jpg",
                }}
            /> */}
            <View style={styles.cardContainer}>
                {/* <Image style={styles.image} source={{uri: "https://www.pinkvilla.com/files/all_dead_main_0.jpg"}} /> */}
                <Image style={styles.image} source={require("../../public/images/Wallpaper-1.jpg")} resizeMode="cover" />
                <Text style={styles.cardTitle}>All Of Are Dead</Text>
                <Text style={styles.cardText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum libero at velit sagittis, vitae suscipit urna posuere. Fusce ac est id ante fermentum vestibulum.
                </Text>
                <Button style={styles.cardButton} title={"Watch Now"} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=2nES00KwZuI&list=PLwGdqUZWnOp354xMD8u0hxX-1qmCvfLiY&index=33")} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        color: "red",
        marginBottom: 2,
    },
    cardContainer: {
        alignItems: "center",
        backgroundColor: "#dfdfdf",
        margin: 20,
        borderRadius: 10,
        paddingBottom: 18,
        paddingTop: 5,
    },
    cardTitle: {
        fontSize: 20,
        color: "#2196f3",
        marginTop: 10,
    },
    cardText: {
        fontSize: 16,
        color: "#2196f3",
        margin: 12,
    },
    image: {
        width: 300,
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    // image: {
    //     width: "100%",
    //     height: undefined,
    //     aspectRatio: 1,
    // },
    cardButton: {
        
    },
});

export default NetflixCard;