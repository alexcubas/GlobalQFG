import {
  Flex,
  useBreakpointValue,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import TextWithGradient from "../patterns/textWithGradient";

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
        <TextWithGradient text="PREGAÇÕES" fontWeight={"bold"} />
      </Flex>

      <Grid
        templateColumns={{ base: "1fr", md: "2fr 1fr" }}
        gap={4}
        mt={8}
        w="100%"
      >
        <GridItem>
          <Image
            borderRadius={"50px"}
            src="/QFGPregacoes/pregacoes-1.png" // substitua pelo caminho da sua imagem grande
            alt="Large Image"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </GridItem>
        <GridItem>
          <Grid templateRows="1fr 1fr" gap={4} h="100%">
            <GridItem>
              <Image
                borderRadius={"50px"}
                src="/QFGPregacoes/pregacoes-3.png" // substitua pelo caminho da sua primeira imagem pequena
                alt="Small Image 1"
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </GridItem>
            <GridItem>
              <Image
                borderRadius={"50px"}
                src="/QFGPregacoes/pregacoes-2.png" // substitua pelo caminho da sua segunda imagem pequena
                alt="Small Image 2"
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Flex>
  );
}
