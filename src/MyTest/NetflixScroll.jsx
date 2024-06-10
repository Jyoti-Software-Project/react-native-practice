import React from "react";
import { FlatList, Text, View, ImageBackground } from "react-native";
import styles from "../../public/CssProps/NetflixScrollCss";

const NetflixScroll = () => {
    const Netflix = require("../../public/json/Netflix.json");

    return (
        <View>
            <Text style={styles.title}>All card show here</Text>
            <FlatList data={Netflix} horizontal showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) => (
                    <View style={styles.cardContainer}>
                        <ImageBackground style={styles.backgroundImage} imageStyle={{ borderRadius: 18, }} source={index % 2 === 0 ? require("../../public/images/Wallpaper-2.jpg") : require("../../public/images/Wallpaper-3.jpg")}>
                            <Text style={styles.cardTitle}>{item.name}</Text>
                            <Text style={styles.cardYear}>{item.year}</Text>
                            <Text style={styles.cardText}>{item.creator}</Text>
                            <Text style={styles.cardText}>{item.genre}</Text>
                        </ImageBackground>
                    </View>
                )}
                keyExtractor={(key) => {
                    return key.id;
                }} />
        </View>
    );
};

export default NetflixScroll;
