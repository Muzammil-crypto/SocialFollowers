import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../utils/theme";
// import { theme } from "../core/theme";

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === "outlined" && {
          backgroundColor: "transparent",
          borderColor: theme.colors.primary,
        },
        style,
      ]}
      labelStyle={[
        styles.text,
        mode === "outlined" && {
          color: theme.colors.primary,
        },
      ]}
      mode={mode}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 12,
    borderColor: "#2FBAE3",
    width: "80%",
    marginVertical: 30,
    height: 50,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
    color: "white",
  },
});
