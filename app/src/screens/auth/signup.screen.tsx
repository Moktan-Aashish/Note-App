import { Pressable, Text, View } from "react-native";
import { Lock, Mail, User } from "lucide-react-native";

import AppText from "../../components/app.text";
import AppScreen from "../../components/app.screen";
import BackButton from "../../components/app.back";
import AppInput from "../../components/app.input";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthRootStackParamList } from "../../types/auth.types";
import { useState } from "react";

type props = NativeStackScreenProps<AuthRootStackParamList, "Signup">;

export default function SignupScreen({ navigation }: props) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Name: " + userName);
    console.log("Email: " + email);
    console.log("Password: " + password);
  };

  const handleSigninNavigation = () => {
    navigation.navigate("Login");
  };

  return (
    <AppScreen className="justify-between">
      <BackButton />

      <View className="flex-1 mt-4">
        <View className="mb-8">
          <Text className="heading">Let's get</Text>
          <Text className="heading">Started</Text>
        </View>

        <View className="gap-6 mb-16">
          <AppInput
            value={userName}
            onChangeText={setUserName}
            icon={<User size={24} />}
            placeholder="enter your name"
          />

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

          <Pressable
            onPress={handleSignup}
            className="bg-black rounded-full py-5"
          >
            <AppText text="Sign Up" className="text-white text-xl font-bold" />
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
        <AppText text="Already have an account?" />
        <Pressable onPress={handleSigninNavigation}>
          <AppText text="Sign in" className="font-semibold" />
        </Pressable>
      </View>
    </AppScreen>
  );
}
