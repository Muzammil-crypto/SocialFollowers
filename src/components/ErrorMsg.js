import React from "react";
import { Text } from "react-native";
import { theme } from "../utils/theme";
export default function ErrorMsg({ value }) {
  return (
    <Text style={{ fontSize: 10, color: theme.colors.error }}>{value}</Text>
  );
}
