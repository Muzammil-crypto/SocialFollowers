import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../styles/App.component.style";
export default function ClickAbleText({ linkText }) {
  return (
    <TouchableOpacity>
      <Text style={styles.clickAbleText}>{linkText}</Text>
    </TouchableOpacity>
  );
}
