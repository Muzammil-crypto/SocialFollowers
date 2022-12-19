import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { theme } from "../utils/theme";

const Stack = createStackNavigator();

export default function NavigationItems() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={() => ({
          title: "Social Followers",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerLeft: () => null,
        })}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={() => ({
          title: "Social Followers",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerLeft: () => null,
        })}
      />
    </Stack.Navigator>
  );
}
