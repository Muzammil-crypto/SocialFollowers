import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Button from "../components/Button";
import styles from "../styles/App.component.style";
import { theme } from "../utils/theme";

const slides = [
  {
    key: 1,

    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../assets/images/slide1.png"),
    // backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../assets/images/slide2.png"),
    // backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../assets/images/slide3.png"),
    // backgroundColor: "#22bcb5",
  },
];

export default class Splash extends React.Component {
  state = {
    showRealApp: false,
  };
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return <Splash />;
    } else {
      return (
        <>
          <AppIntroSlider
            //   style={{ backgroundColor: "red" }}
            scrollEnabled={false}
            renderItem={this._renderItem}
            data={slides}
            onDone={this._onDone}
          />
          <Button
            style={{ marginVertical: 12, alignSelf: "center" }}
            mode={"outlined"}
          >
            Sign up
          </Button>
          <Button
            style={{
              marginVertical: 12,
              backgroundColor: theme.colors.block,
              alignSelf: "center",
            }}
            mode={"contained"}
          >
            Log in
          </Button>
          <Button
            style={{
              marginVertical: 12,
              alignSelf: "center",
              marginBottom: "20%",
              borderColor: theme.colors.block,
            }}
            mode={"outlined"}
          >
            Skip
          </Button>
        </>
      );
    }
  }
}
