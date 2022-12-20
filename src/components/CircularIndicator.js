import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { theme } from "../utils/theme";
theme;
const CircularIndicator = () => {
  return (
    <ActivityIndicator
      animating={true}
      size={30}
      style={{
        alignSelf: "center",
        marginTop: theme.dimensions.windowHeight / 2.3,
      }}
      color={theme.colors.primary}
    />
  );
};

export default CircularIndicator;
