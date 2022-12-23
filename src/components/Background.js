import React from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { theme } from "../utils/theme";

export default function Background({ children }) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      // enabled={true}
    >
      {children}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.backgroundColor,
  },
  container: {
    height: theme.dimensions.windowHeight * 1.05,
    flex: 1,
    flexGrow: 1,
    flexDirection: "column",

    paddingTop: 30,
    width: theme.dimensions.windowWidth,

    // maxWidth: 340,
    // maxHeight: 900,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.backgroundColor,
  },
});
