import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={navigation.goBack}>
      <Ionicons name="arrow-back" size={32} />
    </Pressable>
  );
}
