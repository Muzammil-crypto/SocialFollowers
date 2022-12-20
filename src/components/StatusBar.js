import React from "react";
import { StatusBar } from "react-native";
export default function StatusBarComp() {
  return (
    <StatusBar
      barStyle="light-content"
      hidden={false}
      backgroundColor="#F3B324"
      translucent={true}
      showHideTransition={true}
    />
  );
}
