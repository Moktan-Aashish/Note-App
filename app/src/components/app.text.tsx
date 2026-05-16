import { Text } from "react-native";

type FontWeight = "regular" | "medium" | "semibold" | "bold";

const fontMap: Record<FontWeight, string> = {
  regular: "PoppinsRegular",
  medium: "PoppinsMedium",
  semibold: "PoppinsSemiBold",
  bold: "PoppinsBold",
};

type Props = {
  text: string;
  className?: string;
  weight?: FontWeight;
};

export default function AppText({
  text,
  className,
  weight = "regular",
}: Props) {
  return (
    <Text
      style={{ fontFamily: fontMap[weight] }}
      className={`text-center text-base ${className ?? ""}`}
    >
      {text}
    </Text>
  );
}
