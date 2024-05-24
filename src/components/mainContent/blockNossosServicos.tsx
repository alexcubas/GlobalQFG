import {
  Flex,
  useBreakpointValue,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import BlockMainContent from "../patterns/BlockMainContent";
import BlockQualificationsContent from "../patterns/BlockQualificationsContent";
import ButtonGradient from "../patterns/ButtonGradient";
import TextWithGradient from "../patterns/textWithGradient";

export default function BlockNossosServicos() {
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xlg: false,
  });
  return (
    <Flex
      w={"100%"}
      justify={"space-between"}
      direction={"column"}
      align={"center"}
      id="nossosServicos"
      gap={isWideVersion ? "50px" : "50px"}
      mt={isWideVersion ? "50px" : "80px"}
    ></Flex>
  );
}
