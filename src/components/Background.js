import React from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { theme } from "../utils/theme";

export default function Background({ children }) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
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
    height: theme.dimensions.windowHeight,
    // flex: 1,
    flexGrow: 1,

    padding: 10,
    width: "100%",
    // maxWidth: 340,
    maxHeight: 900,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.backgroundColor,
  },
});
