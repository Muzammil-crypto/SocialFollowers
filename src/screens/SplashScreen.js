import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Background from "../components/Background";
import styles from "../styles/App.component.style";

const slides = [
  {
    key: 1,

    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../assets/images/mg.png"),
    // backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../assets/images/mg.png"),
    // backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../assets/images/mg.png"),
    // backgroundColor: "#22bcb5",
  },
];

export default class Splash extends React.Component {
  state = {
    showRealApp: false,
  };
  _renderItem = ({ item }) => {
    return (
      //   <Background>
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
      //   </Background>
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
        <AppIntroSlider
          //   style={{ backgroundColor: "red" }}
          scrollEnabled={false}
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
        />
      );
    }
  }
}
