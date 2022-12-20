import { StyleSheet } from "react-native";
import { theme } from "../utils/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: theme.colors.backgroundColor,
  },
  loginContainer: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    // backgroundColor: theme.colors.secondary,
    width: theme.dimensions.windowWidth / 1.15,

    height: theme.dimensions.windowHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  textInputs: {
    paddingLeft: 10,
    height: 40,
    width: theme.dimensions.windowWidth * 0.85,
    margin: 10,
    backgroundColor: theme.colors.backgroundColor,
    borderColor: theme.colors.text,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 22,
  },
  clickAbleText: {
    marginTop: theme.dimensions.windowHeight * 0.005,
    fontSize: 10,
    color: theme.colors.primary,
    // marginRight: theme.dimensions.windowWidth * 0.15,
    marginLeft: 5,
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#2FBAE3",
    borderRadius: 24,
    borderColor: "#2FBAE3",
    width: "80%",
    marginVertical: 20,
    height: 50,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
    color: "white",
  },
});
