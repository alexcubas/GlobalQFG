import { Flex, Image, Text, ImageProps } from "@chakra-ui/react";

type ImageWithTextType = {
  searce: string;
  alt: string;
  width?: string;
  height?: string;
  text: string;
  fontSize?: string;
};
export default function ImageWithText({
  searce,
  alt,
  width,
  height,
  text,
  fontSize,
}: ImageWithTextType) {
  return (
    <Flex gap={"10px"} align={"center"} fontSize={fontSize}>
      <Image
        src={searce}
        alt={alt}
        w={width ? width : "30px"}
        h={height ? height : "30px"}
      />
      <Text>{text}</Text>
    </Flex>
  );
}
