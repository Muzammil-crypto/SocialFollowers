import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RecoverAccount from "../screens/ResetPasswordScreen";
import Splash from "../screens/SplashScreen";
import { theme } from "../utils/theme";

const Stack = createStackNavigator();

export default function NavigationItems() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={() => ({
          title: "Social Followers",
          headerShown: false,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          // headerTintColor: "white",
          headerTitleAlign: "center",
          headerLeft: () => null,
        })}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="RecoverAccount"
        component={RecoverAccount}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="SplashScreen"
        component={Splash}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}
