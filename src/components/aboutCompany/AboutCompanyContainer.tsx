import {
  Flex,
  Text,
  Image,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import ButtonGradient from "../patterns/ButtonGradient";
import TextWithGradient from "../patterns/textWithGradient";
import ImageCarouselSecond from "../QFGComponents/QFGSecondCarroussel";

export default function AboutCompanyContainer() {
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xlg: false,
  });
  return (
    <Flex
      direction={"column"}
      id="quemSomos"
      align={"center"}
      textColor={"white"}
      w={"95%"}
      mt={"50px"}
    >
      <ImageCarouselSecond />
    </Flex>
  );
}
