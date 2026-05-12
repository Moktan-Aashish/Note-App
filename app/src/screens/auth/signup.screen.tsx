import { View } from "react-native";

import AppText from "../../components/app.text";
import AppScreen from "../../components/app.screen";
import BackButton from "../../components/app.back";

export default function SignupScreen() {
  return (
    <AppScreen className="justify-between">
      <BackButton />
      <View className="flex-1 justify-center">
        <AppText text="Signup Screen!" />
      </View>
    </AppScreen>
  );
}
