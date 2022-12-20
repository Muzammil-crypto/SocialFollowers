import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../utils/theme";

export default function Seperator() {
  return (
    <Text style={styles.text}>
      ----------------------- OR -----------------------
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 5,
    color: theme.colors.secondary,
  },
});
