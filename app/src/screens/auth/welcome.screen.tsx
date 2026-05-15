import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import AppText from "../../components/app.text";
import AppScreen from "../../components/app.screen";
import { AuthRootStackParamList } from "../../types/auth.types";

type Props = NativeStackScreenProps<AuthRootStackParamList, "Welcome">;

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
        <Image
          source={require("../../../assets/images/welcome-img.png")}
          className="w-full h-80 mb-16 scale-125"
        />

        <Text className="heading text-center mb-2">Notes Made Simple</Text>

        <AppText text="Keep your thoughts, plans, and daily ideas organized in one clean and secure workspace designed for effortless productivity." />
      </View>

      <View className="bg-primary-black mb-2 flex-row rounded-2xl p-1">
        <Pressable
          onPress={handleLogin}
          className={`action-button ${isLogin ? "bg-black" : "bg-transparent"}`}
        >
          <AppText
            text="Log in"
            className={`text-lg text-white font-semibold`}
          />
        </Pressable>

        <Pressable
          onPress={handleSignup}
          className={`action-button ${
            isSignup ? "bg-black" : "bg-transparent"
          }`}
        >
          <AppText
            text="Sign up"
            className={`text-lg text-white font-semibold`}
          />
        </Pressable>
      </View>
    </AppScreen>
  );
}
