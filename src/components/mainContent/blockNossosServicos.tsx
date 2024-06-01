import { Flex, useBreakpointValue } from "@chakra-ui/react";
import ImageCarousel from "../QFGComponents/QFGCarroussel";

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
      // mt={isWideVersion ? "50px" : "80px"}
    >
      <ImageCarousel />
    </Flex>
  );
}
