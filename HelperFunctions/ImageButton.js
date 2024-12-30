import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const ImageButton = ({ onPress, imageSource, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={imageSource} style={style} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    //flex: 1,
    //backgroundColor: "red", // This is just for debugging
    // Other styles...
  },
  image: {
    //flex: 1,
    //resizeMode: "contain",
    // Remove undefined width and height if you're using flex
  },
});

export default ImageButton;

// Usage example:
// <ImageButton
//   onPress={() => console.log('Button pressed')}
//   imageSource={require('path-to-your-image.png')}
// />
