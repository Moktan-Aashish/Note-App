import { Text } from "react-native";

type Props = {
  text: string;
  className?: string;
};

export default function AppText({ text, className }: Props) {
  return (
    <Text
      className={`text-primary-black font-regular text-center text-base ${className ?? ""}`}
    >
      {text}
    </Text>
  );
}
