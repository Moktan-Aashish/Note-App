import { ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { withUniwind } from "uniwind";

type Props = {
  children: ReactNode;
  className?: string;
};

const StyledSafeAreaView = withUniwind(SafeAreaView);

export default function AppScreen({ children, className }: Props) {
  return (
    <StyledSafeAreaView className="flex-1 px-6 py-6">
      <View className={`flex-1 ${className ?? ""}`}>{children}</View>
    </StyledSafeAreaView>
  );
}
