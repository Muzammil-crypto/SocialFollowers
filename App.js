import React, { useState, useEffect } from "react";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "./src/utils/themeContext";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { theme } from "./src/utils/theme";
import NavigationItems from "./src/navigation/Navigations";

export default function App() {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    let eventListner = EventRegister.addEventListener("changeTheme", (data) => {
      setMode(data);
    });
    return () => {
      EventRegister.removeAllListeners(eventListner);
    };
  });
  return (
    <themeContext.Provider
      value={mode === true ? theme.darkTheme : theme.colors}
    >
      <NavigationContainer theme={mode === true ? DarkTheme : DefaultTheme}>
        <NavigationItems />
      </NavigationContainer>
    </themeContext.Provider>
  );
}
