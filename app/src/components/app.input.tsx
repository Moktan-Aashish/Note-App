import { Eye, EyeOff } from "lucide-react-native";
import { ReactNode, useState } from "react";
import { Pressable, TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps & {
  icon?: ReactNode;
  secure?: boolean;
};

export default function AppInput({ icon, secure, ...props }: Props) {
  const [hidden, setHidden] = useState(true);

  return (
    <View>
      {icon && <View className="absolute top-5 left-4">{icon}</View>}

      <TextInput
        secureTextEntry={secure ? hidden : false}
        className="app-input"
        style={{
          fontSize: 17.5,
          textAlignVertical: "center",
          includeFontPadding: false,
          fontFamily: "PoppinsRegular",
        }}
        {...props}
      />

      {secure && (
        <View className="absolute top-5 right-4">
          <Pressable onPress={() => setHidden(!hidden)}>
            {hidden ? <EyeOff size={24} /> : <Eye size={24} />}
          </Pressable>
        </View>
      )}
    </View>
  );
}
