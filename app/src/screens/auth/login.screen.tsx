import { Pressable, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import AppText from "../../components/app.text";
import AppScreen from "../../components/app.screen";
import BackButton from "../../components/app.back";
import AppInput from "../../components/app.input";

import { AuthRootStackParamList } from "../../types/auth.types";
import { loginSchema, LoginSchema } from "../../schemas/login.schema";
import { COLORS } from "../../constants/colors";

type Props = NativeStackScreenProps<AuthRootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (data: LoginSchema) => {
    console.log(data);
  };

  const goToSignup = () => navigation.navigate("Signup");

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;

  const emailIconColor = emailError ? COLORS.error : COLORS.default;
  const passwordIconColor = passwordError ? COLORS.error : COLORS.default;

  return (
    <AppScreen className="justify-between">
      <BackButton />

      <View className="flex-1 mt-4">
        <View className="mb-8">
          <AppText text="Hey," className="heading text-left" weight="bold" />
          <AppText text="Welcome" className="heading text-left" weight="bold" />
          <AppText text="Back" className="heading text-left" weight="bold" />
        </View>

        <View className="gap-6 mb-16">
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <AppInput
                value={value}
                onChangeText={onChange}
                icon={<Mail size={24} color={emailIconColor} />}
                placeholder="Enter your email"
                error={emailError}
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
                icon={<Lock size={24} color={passwordIconColor} />}
                placeholder="Enter your password"
                secure
                error={passwordError}
              />
            )}
          />

          <Pressable>
            <AppText
              text="Forgot Password?"
              className="text-right"
              weight="semibold"
            />
          </Pressable>

          <Pressable
            onPress={handleSubmit(handleLogin)}
            className="bg-black rounded-2xl py-5 items-center"
          >
            <AppText
              text="Login"
              className="text-white text-xl"
              weight="bold"
            />
          </Pressable>
        </View>

        <View className="items-center gap-8">
          <AppText text="or continue with" />

          <Pressable className="w-full border-2 border-primary-black rounded-2xl py-4 items-center">
            <AppText text="Google" className="text-xl" weight="bold" />
          </Pressable>
        </View>
      </View>

      <View className="flex-row justify-center gap-2 mb-4">
        <AppText text="Don't have an account?" />
        <Pressable onPress={goToSignup}>
          <AppText text="Sign up" weight="semibold" />
        </Pressable>
      </View>
    </AppScreen>
  );
}
