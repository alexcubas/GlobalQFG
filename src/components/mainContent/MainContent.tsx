import {
  Flex,
  Text,
  Image,
  Link as LinkChakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import ButtonGradient from "../patterns/ButtonGradient";
import ButtonGradientWhithImage from "../patterns/ButtonGradientWithImage";
import { Link } from "react-scroll";

type MainContentType = {
  scrollTo: any;
};

export default function MainContent({ scrollTo }: MainContentType) {
  const whatsappUrl =
    "https://wa.me/41999731035?text=" +
    encodeURIComponent("Olá, gostaria de mais informações!");
  return (
    <Flex id="home">
      <Flex>
        <Flex position={"relative"}>
          <Image
            h={"full"}
            alt={"Imagem de uma empresa limpa"}
            src="QFGImg/BackgroundImage.png"
          />
          <Flex
            color="white"
            position="absolute"
            top="50%"
            left="50%"
            textStyle={"Regular"}
            transform="translate(-50%, -50%)" // Centraliza vertical e horizontalmente
            flexDirection="column"
            alignItems="center" // Alinha itens no centro verticalmente
            justify={"center"}
            gap={"30px"}
            minW={"1280px"}
            h={"90%"}
            backgroundImage="url('/QFGImg/imagemBanner.png')"
            backgroundRepeat="no-repeat"
          >
            <Flex fontSize={"55px"} direction={"column"} textAlign={"center"}>
              <Text>CONHEÇA A QFG</Text>
            </Flex>
            <Flex gap={"30px"} textAlign={"center"}>
              <LinkChakra
                href={whatsappUrl}
                isExternal
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                <ButtonGradientWhithImage
                  text={"SAIBA MAIS"}
                  width="350px"
                  borderType="Left"
                  backGround="#BE2A5C"
                  textSize="23px"
                />
              </LinkChakra>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
