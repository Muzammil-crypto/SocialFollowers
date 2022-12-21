import * as React from "react";
import { View, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { theme } from "../utils/theme";
export default function ThirdPartyButton({ title, icon }) {
  const loginWithFacebook = () => {
    console.log("Button pressed");
  };

  return (
    <View style={styles.container}>
      <FontAwesome.Button
        name={icon}
        iconStyle={{ color: "red" }}
        color={theme.colors.text}
        backgroundColor={theme.colors.backgroundColor}
        style={{
          fontFamily: "Roboto",
          color: theme.colors.text,
          flexGrow: 1,
          width: "100%",
          height: "100%",
        }}
        onPress={loginWithFacebook}
      >
        {title}
      </FontAwesome.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: theme.colors.text,
    width: "95%",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 22,
    margin: theme.dimensions.windowHeight * 0.015,
    justifyContent: "center",
    alignItems: "center",
  },
});
