import { useState } from "react";
import { Image, View, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import AppText from "../../components/app.text";
import AppScreen from "../../components/app.screen";
import { AuthRootStackParamList } from "../../types/auth.types";

type Props = NativeStackScreenProps<AuthRootStackParamList, "Welcome">;

export default function WelcomeScreen({ navigation }: Props) {
  const [selected, setSelected] = useState<"login" | "signup">("login");

  const isLogin = selected === "login";
  const isSignup = selected === "signup";

  const handleNavigate = (
    screen: "Login" | "Signup",
    type: "login" | "signup",
  ) => {
    setSelected(type);
    navigation.navigate(screen);
  };

  return (
    <AppScreen>
      <View className="flex-1 justify-center">
        <Image
          source={require("../../../assets/images/welcome-img.png")}
          className="w-full h-80 mb-16 scale-125"
        />

        <AppText
          text="Notes Made Simple"
          className="heading text-center mb-2"
          weight="bold"
        />

        <AppText text="Keep your thoughts, plans, and daily ideas organized in one clean and secure workspace designed for effortless productivity." />
      </View>

      <View className="bg-primary-black mb-2 flex-row rounded-2xl p-1">
        <Pressable
          onPress={() => handleNavigate("Login", "login")}
          className={`action-button ${isLogin ? "bg-black" : "bg-transparent"}`}
        >
          <AppText
            text="Log in"
            className="text-lg text-white text-center"
            weight="semibold"
          />
        </Pressable>

        <Pressable
          onPress={() => handleNavigate("Signup", "signup")}
          className={`action-button ${isSignup ? "bg-black" : "bg-transparent"}`}
        >
          <AppText
            text="Sign up"
            className="text-lg text-white text-center"
            weight="semibold"
          />
        </Pressable>
      </View>
    </AppScreen>
  );
}
