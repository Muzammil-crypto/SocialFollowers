import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../utils/theme";

export default function Header(props) {
  return <Text style={styles.header} {...props} />;
}

const styles = StyleSheet.create({
  header: {
    marginLeft: theme.dimensions.windowWidth * 0.035,
    alignSelf: "flex-start",
    // textAlign: "left",
    fontSize: 20,
    color: theme.colors.text,
    fontWeight: "bold",
    fontStyle: "italic",
    paddingVertical: theme.dimensions.windowHeight * 0.025,
  },
});
