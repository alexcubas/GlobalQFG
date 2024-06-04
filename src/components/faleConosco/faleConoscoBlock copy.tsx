import {
  Flex,
  useBreakpointValue,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import TextWithGradient from "../patterns/textWithGradient";
import RadioPlayer from "../QFGComponents/RadioPlayer";

export default function FaleConoscoBlock() {
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xlg: false,
  });

  return (
    <Flex
      id="Contato"
      direction={"column"}
      textColor={"white"}
      align={"center"}
      w={"70%"}
    >
      <Flex gap="15px" fontSize={isWideVersion ? "25px" : "55px"}>
        <TextWithGradient text="RÁDIO" fontWeight={"bold"} />
      </Flex>
      <Flex>
        <Text>Sábado às 15h</Text>
      </Flex>

      <RadioPlayer />
    </Flex>
  );
}
