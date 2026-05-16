import { Pressable, View } from "react-native";
import { Lock, Mail, User } from "lucide-react-native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import AppText from "../../components/app.text";
import AppScreen from "../../components/app.screen";
import BackButton from "../../components/app.back";
import AppInput from "../../components/app.input";

import { AuthRootStackParamList } from "../../types/auth.types";
import { signupSchema, SignupSchema } from "../../schemas/signup.schema";
import { COLORS } from "../../constants/colors";

type Props = NativeStackScreenProps<AuthRootStackParamList, "Signup">;

export default function SignupScreen({ navigation }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const handleSignup = (data: SignupSchema) => {
    console.log(data);
  };

  const goToLogin = () => navigation.navigate("Login");

  const usernameError = errors.username?.message;
  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;

  const usernameIconColor = usernameError ? COLORS.error : COLORS.default;
  const emailIconColor = emailError ? COLORS.error : COLORS.default;
  const passwordIconColor = passwordError ? COLORS.error : COLORS.default;

  return (
    <AppScreen className="justify-between">
      <BackButton />

      <View className="flex-1 mt-4">
        <View className="mb-10">
          <AppText
            text="Let's get"
            className="heading text-left mb-2"
            weight="bold"
          />
          <AppText text="Started" className="heading text-left" weight="bold" />
        </View>

        <View className="gap-6 mb-16">
          <Controller
            control={control}
            name="username"
            render={({ field: { value, onChange } }) => (
              <AppInput
                value={value}
                onChangeText={onChange}
                icon={<User size={24} color={usernameIconColor} />}
                placeholder="Enter your username"
                error={usernameError}
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

          <Pressable
            onPress={handleSubmit(handleSignup)}
            className="bg-black rounded-2xl py-5 items-center"
          >
            <AppText
              text="Sign Up"
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
        <AppText text="Already have an account?" />
        <Pressable onPress={goToLogin}>
          <AppText text="Sign in" weight="semibold" />
        </Pressable>
      </View>
    </AppScreen>
  );
}
