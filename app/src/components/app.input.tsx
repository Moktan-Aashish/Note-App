import { Eye, EyeOff } from "lucide-react-native";
import { ReactNode, useState } from "react";
import { Pressable, TextInput, TextInputProps, View } from "react-native";
import AppText from "./app.text";
import { COLORS } from "../constants/colors";

type Props = TextInputProps & {
  icon?: ReactNode;
  secure?: boolean;
  error?: string;
};

export default function AppInput({ icon, secure, error, ...props }: Props) {
  const [hidden, setHidden] = useState(true);

  const iconColor = error ? COLORS.error : COLORS.default;

  return (
    <View className="gap-2">
      {error && <AppText text={error} className="text-left error" />}

      <View>
        {icon && <View className="absolute top-5 left-4">{icon}</View>}

        <TextInput
          secureTextEntry={secure ? hidden : false}
          className={`app-input ${error ? "error error-bordered" : ""}`}
          placeholderTextColor={iconColor}
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
            <Pressable onPress={() => setHidden(!hidden)} className="p-1">
              {hidden ? (
                <EyeOff size={22} color={iconColor} />
              ) : (
                <Eye size={22} color={iconColor} />
              )}
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}
