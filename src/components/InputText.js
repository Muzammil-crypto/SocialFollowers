import React from "react";
import { TextInput } from "react-native";
import { theme } from "../utils/theme";
export default function InputText({
  name,
  placeholder,
  style,
  onChangeText,
  onBlur,
  value,
  keyboardType,
  secureTextEntry,
}) {
  return (
    <TextInput
      cursorColor={theme.colors.primary}
      placeholderTextColor={theme.colors.block}
      name={name}
      placeholder={placeholder}
      style={style}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
}
