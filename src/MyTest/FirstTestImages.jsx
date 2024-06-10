import React, { useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

const TestImages = () => {
  const [imageItem, setImageItem] = useState("");

  const showImage = (imageName) => {
    setImageItem(imageName);
  };

  const defaultImage = require("../../public/images/Wallpaper-4.jpg");

  const imagePaths = [
    require("../../public/images/Wallpaper-1.jpg"),
    require("../../public/images/Wallpaper-2.jpg"),
    require("../../public/images/Wallpaper-3.jpg"),
  ];

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.text}>Add an Image</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageContainer}>
          {imagePaths.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => showImage(image)}>
              <Image style={styles.image} source={image} />
            </TouchableOpacity>
          ))}
        </ScrollView>
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

export default TestImages;
