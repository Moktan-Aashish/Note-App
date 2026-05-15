import { Pressable, Text, View } from "react-native";
import { Lock, Mail, User } from "lucide-react-native";

import AppText from "../../components/app.text";
import AppScreen from "../../components/app.screen";
import BackButton from "../../components/app.back";
import AppInput from "../../components/app.input";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthRootStackParamList } from "../../types/auth.types";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { signupSchema, SignupSchema } from "../../schemas/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";

type props = NativeStackScreenProps<AuthRootStackParamList, "Signup">;

export default function SignupScreen({ navigation }: props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignup = (data: SignupSchema) => {
    console.log("");
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
          <Controller
            control={control}
            name="username"
            render={({ field: { value, onChange } }) => (
              <AppInput
                value={value}
                onChangeText={onChange}
                icon={<User size={24} />}
                placeholder="enter your username"
                error={errors.username?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <AppInput
                value={value}
                onChangeText={onChange}
                icon={<Mail size={24} />}
                placeholder="enter your email"
                error={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <AppInput
                value={value}
                onChangeText={onChange}
                icon={<Lock size={24} />}
                placeholder="enter your password"
                secure
                error={errors.password?.message}
              />
            )}
          />

          <Pressable
            onPress={handleSubmit(handleSignup)}
            className="bg-black rounded-2xl py-5"
          >
            <AppText text="Sign Up" className="text-white text-xl font-bold" />
          </Pressable>
        </View>

        <View className="items-center gap-8">
          <AppText text="or continue with" />

          <Pressable className="w-full border-2 border-primary-black rounded-2xl py-4">
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
