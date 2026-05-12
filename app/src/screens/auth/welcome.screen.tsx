import { useState } from "react";
import { Pressable, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import AppText from "../../components/app.text";
import AppScreen from "../../components/app.screen";
import NotebookImage from "../../../assets/images/welcome-notebook.svg";

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

export default function WelcomeScreen({ navigation }: Props) {
  const [selected, setSelected] = useState<"login" | "signup">("login");

  const isLogin = selected === "login";
  const isSignup = selected === "signup";

  const handleLogin = () => {
    setSelected("login");
    navigation.navigate("Login");
  };

  const handleSignup = () => {
    setSelected("signup");
    navigation.navigate("Signup");
  };

  return (
    <AppScreen>
      <View className="flex-1 justify-center">
        <View className="h-1/2 mb-8">
          <NotebookImage width={"100%"} height={"100%"} />
        </View>

        <AppText
          className="heading text-4xl mb-6"
          text="Your Thoughts, Anytime"
        />

        <AppText text="Write, save, and organize your notes effortlessly. Everything you need stays in one simple, secure place, ready whenever you do." />
      </View>

      <View className="bg-secondary-gray mb-2 flex-row rounded-full p-1">
        <Pressable
          onPress={handleLogin}
          className={`action-button ${isLogin ? "bg-primary-black" : "bg-transparent"}`}
        >
          <AppText
            text="Log in"
            className={`text-lg ${isLogin ? "text-white" : "text-primary-black"}`}
          />
        </Pressable>

        <Pressable
          onPress={handleSignup}
          className={`action-button ${
            isSignup ? "bg-primary-black" : "bg-transparent"
          }`}
        >
          <AppText
            text="Sign up"
            className={`text-lg ${isSignup ? "text-white" : "text-primary-black"}`}
          />
        </Pressable>
      </View>
    </AppScreen>
  );
}
