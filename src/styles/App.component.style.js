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
    marginLeft: 20,
    fontStyle: "italic",
    marginRight: 20,
    textAlign: "center",
  },

  text: {
    marginVertical: 5,
    fontSize: 20,
    color: theme.colors.text,
  },
  slide: {
    borderRadius: 24,
    // backgroundColor: "#2FBAE3",
    marginVertical: 5,
    fontSize: 40,
    height: theme.dimensions.windowHeight,
    width: "100%",
  },
  title: {
    marginTop: "10%",
    textAlign: "right",
  },
  image: {
    alignSelf: "center",
    height: theme.dimensions.windowHeight * 0.5,
    width: theme.dimensions.windowWidth * 0.9,
    marginTop: theme.dimensions.windowHeight * 0.13,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
