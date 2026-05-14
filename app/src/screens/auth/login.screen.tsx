import { Pressable, Text, View } from "react-native";

import AppText from "../../components/app.text";
import AppScreen from "../../components/app.screen";
import BackButton from "../../components/app.back";
import AppInput from "../../components/app.input";
import { Lock, Mail } from "lucide-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthRootStackParamList } from "../../types/auth.types";
import { useState } from "react";

type props = NativeStackScreenProps<AuthRootStackParamList, "Login">;

export default function LoginScreen({ navigation }: props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email: " + email);
    console.log("Password: " + password);
  };

  const handleSignupNavigation = () => {
    navigation.navigate("Signup");
  };

  return (
    <AppScreen className="justify-between">
      <BackButton />

      <View className="flex-1 mt-4">
        <View className="mb-8">
          <Text className="heading">Hey,</Text>
          <Text className="heading">Welcome</Text>
          <Text className="heading">Back</Text>
        </View>

        <View className="gap-6 mb-16">
          <AppInput
            value={email}
            onChangeText={setEmail}
            icon={<Mail size={24} />}
            placeholder="enter your email"
          />

          <AppInput
            value={password}
            onChangeText={setPassword}
            icon={<Lock size={24} />}
            placeholder="enter your password"
            secure
          />

          <Pressable>
            <AppText
              text="Forgot Password?"
              className="text-right font-semibold"
            />
          </Pressable>

          <Pressable
            onPress={handleLogin}
            className="bg-black rounded-full py-5"
          >
            <AppText text="Login" className="text-white text-xl font-bold" />
          </Pressable>
        </View>

        <View className="items-center gap-8">
          <AppText text="or continue with" />

          <Pressable className="w-full border-2 border-primary-black rounded-full py-4">
            <AppText text="Google" className="text-xl font-bold" />
          </Pressable>
        </View>
      </View>

      <View className="flex-row justify-center gap-2 mb-4">
        <AppText text="Don't have an account?" />
        <Pressable onPress={handleSignupNavigation}>
          <AppText text="Sign up" className="font-semibold" />
        </Pressable>
      </View>
    </AppScreen>
  );
}
