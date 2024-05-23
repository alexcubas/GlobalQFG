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
            w={"1280px"}
            h={"90%"}
            backgroundImage="url('/QFGImg/imagemBanner.png')"
            backgroundRepeat="no-repeat"
          >
            <Flex fontSize={"55px"} direction={"column"} textAlign={"center"}>
              <Text>As Melhores Soluções</Text>
              <Text>
                em <span style={{ color: "#DF4076" }}>Limpeza</span> e
                <span style={{ color: "#BE2A5C" }}> Conservação</span>
              </Text>
            </Flex>
            <Flex gap={"30px"} textAlign={"center"}>
              <Link to="nossosServicos" smooth={false} duration={200}>
                <ButtonGradient
                  text={"Nossos serviços"}
                  width="350px"
                  noBorder
                  borderType="Left"
                  backGround="#BE2A5C"
                  textSize="32px"
                />
              </Link>
              <LinkChakra
                href={whatsappUrl}
                isExternal
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                <ButtonGradientWhithImage
                  text={"Fale conosco"}
                  width="350px"
                  borderType="Left"
                  backGround="#BE2A5C"
                  textSize="32px"
                />
              </LinkChakra>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
