import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Button from "../components/Button";
import styles from "../styles/App.component.style";
import { theme } from "../utils/theme";
import { slides } from "../components/Splash/SlideList";

export default class Splash extends React.Component {
  state = {
    showRealApp: false,
  };
  renderDoneButton = () => {
    return (
      <Button
        style={{
          marginVertical: 12,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          alignSelf: "center",
        }}
        mode={"outlined"}
      >
        Done
      </Button>
    );
  };

  renderNextButton = () => {
    return (
      <Button
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          alignSelf: "center",
          //   justifyContent: "center",
          marginVertical: 12,
          //   alignSelf: "center",
        }}
        mode={"outlined"}
      >
        Next
      </Button>
    );
  };
  _navigateSomewhere = () => {
    this.props.navigation.navigate("LoginScreen");
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
    // () => this._navigateSomewhere;
  };
  render() {
    if (this.state.showRealApp) {
      return <Splash />;
    } else {
      return (
        <>
          <AppIntroSlider
            contentContainerStyle={{
              justifyContent: "center",
              alignContent: "center",
            }}
            showNextButton={true}
            activeDotStyle={{
              backgroundColor: theme.colors.primary,
              marginBottom: theme.dimensions.windowHeight * 0.2,
            }}
            renderDoneButton={this.renderDoneButton}
            renderNextButton={this.renderNextButton}
            dotStyle={{
              backgroundColor: theme.colors.block,
              borderColor: "black",
              marginBottom: theme.dimensions.windowHeight * 0.2,
            }}
            scrollEnabled={false}
            renderItem={this._renderItem}
            data={slides}
            onDone={this._onDone}
          />
          <Button
            style={{
              marginVertical: 12,
              alignSelf: "center",
              backgroundColor: theme.colors.block,
            }}
            mode={"contained"}
          >
            Sign up
          </Button>
          <Button
            onPress={this._onDone}
            style={{
              marginBottom: "10%",
              borderColor: "black",

              marginVertical: 12,
              alignSelf: "center",
            }}
            mode={"outlined"}
          >
            Log in
          </Button>
        </>
      );
    }
  }
}
