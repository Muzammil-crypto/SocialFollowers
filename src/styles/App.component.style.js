import { StyleSheet } from "react-native";
import { theme } from "../utils/theme";

export default StyleSheet.create({
  container: {
    height: theme.dimensions.windowHeight,
    width: theme.dimensions.windowWidth,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.backgroundColor,
  },
  loginContainer: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    // backgroundColor: theme.colors.secondary,
    width: "85%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputs: {
    paddingLeft: "2%",
    height: 40,
    width: "80%",
    margin: 10,
    backgroundColor: "white",
    borderColor: theme.colors.primary,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderRadius: 8,
  },
  clickAbleText: {
    marginTop: theme.dimensions.windowHeight * 0.04,
    fontSize: 10,
    color: theme.colors.secondary,
    marginLeft: 10,
    marginRight: 10,
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
