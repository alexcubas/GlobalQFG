import { Text, TextProps } from "@chakra-ui/react";

type TextWithGradientType = TextProps & {
  text: string;
};

export default function TextWithGradient({
  text,
  ...rest
}: TextWithGradientType) {
  return (
    <Text
      position={"relative"}
      bgGradient={"linear(to-r, #CBA558, #E9CF86, #ECD38D, #E9CF86, #CBA558)"}
      bgClip={"text"}
      {...rest}
    >
      {text}
    </Text>
  );
}
