import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";

const SecondTestImages = () => {
  const [imageItem, setImageItem] = useState("");
  const defaultImage = require("../../public/images/Wallpaper-4.jpg");

  const showImage = (imageName) => {
    setImageItem(imageName);
  };

  const imagePaths = [
    { name: require("../../public/images/Wallpaper-1.jpg") },
    { name: require("../../public/images/Wallpaper-2.jpg") },
    { name: require("../../public/images/Wallpaper-3.jpg") },
    { name: require("../../public/images/Wallpaper-4.jpg") },
  ];

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.text}>Add an Image</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.imageContainer}
          data={imagePaths}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => showImage(item.name)}>
              <Image style={styles.image} source={item.name} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.showImageContainer}>
        <Text style={styles.text}>Show an Image</Text>
        <Image style={styles.image} source={imageItem || defaultImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "Roboto",
    marginVertical: 10,
  },
  showImageContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  imageContainer: {
    maxHeight: 200,
  },
  image: {
    width: 200,
    height: 200,
    marginHorizontal: 10,
  },
});

export default SecondTestImages;
