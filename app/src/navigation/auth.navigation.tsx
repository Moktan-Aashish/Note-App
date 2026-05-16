import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/auth/welcome.screen";
import LoginScreen from "../screens/auth/login.screen";
import SignupScreen from "../screens/auth/signup.screen";
import { AuthRootStackParamList } from "../types/auth.types";

const Stack = createNativeStackNavigator<AuthRootStackParamList>();

const screenOptions = {
  headerShown: false,
};

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={screenOptions}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
