import { DefaultTheme } from "react-native-paper";
import { Dimensions } from "react-native";

export const theme = {
  ...DefaultTheme,
  colors: {
    // ...DefaultTheme.colors,
    themer: "light",
    block: "#302E2E",
    text: "#302E2E",
    primary: "#FF4754",
    backgroundColor: "#FFF0E4",
    secondary: "#F07100",
    error: "#FF4754",
  },
  darkTheme: {
    themer: "dark",

    text: "white",
    primary: "black",
    secondary: "white",
    error: "#009243",
  },
  dimensions: {
    windowWidth: Dimensions.get("window").width,
    windowHeight: Dimensions.get("window").height,
  },
};
