import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "../styles/App.component.style";

export default function ClickAbleText({ linkText, route }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(route)}>
      <Text style={styles.clickAbleText}>{linkText}</Text>
    </TouchableOpacity>
  );
}
