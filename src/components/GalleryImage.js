import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { theme } from "../utils/theme";

export const GalleryImagecomp = ({ address }) => {
  return (
    <View
      style={{
        alignItems: "center",

        borderColor: theme.colors.text,
      }}
    >
      <Image style={styles.image} source={address} />
    </View>
  );
};

export default GalleryImagecomp;

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    justifyContent: "center",
    height: theme.dimensions.windowHeight * 0.18,
    width: theme.dimensions.windowWidth * 0.5,
    marginTop: theme.dimensions.windowHeight * 0.019,
    // marginBottom: -theme.dimensions.windowHeight * 0.25,

    margin: theme.dimensions.windowWidth * 0.02,
    marginRight: theme.dimensions.windowWidth * 0.28,
  },
});
