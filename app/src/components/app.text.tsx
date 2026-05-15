import { Text } from "react-native";

type Props = {
  text: string;
  className?: string;
};

export default function AppText({ text, className }: Props) {
  return (
    <Text
      style={{
        fontFamily: " PoppinsRegular",
      }}
      className={`text-center text-base ${className ?? ""}`}
    >
      {text}
    </Text>
  );
}
