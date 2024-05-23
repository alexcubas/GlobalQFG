import phoneLogic from "@/helpers/phoneLogic";
import {
  Flex,
  Text,
  Button,
  Image,
  useBreakpointValue,
  Img,
  Link as LinkChakra,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import ButtonGradient from "../patterns/ButtonGradient";
import ButtonGradientWhithImage from "../patterns/ButtonGradientWithImage";
import { Link } from "react-scroll";

type MainContentMobileType = {
  scrollTo: any;
};

export default function MainContentMobile({ scrollTo }: MainContentMobileType) {
  const whatsappUrl =
    "https://wa.me/41999731035?text=" +
    encodeURIComponent("Olá, gostaria de mais informações!");

  return (
    <Flex id="home">
      <Flex>
        <Flex position={"relative"}>
          <Image
            h={["250px", "auto", "auto", "auto", "auto", "auto"]}
            w={["auto", "100%", "100%", "100%", "100%", "100%"]}
            alt={"Imagem de uma empresa limpa"}
            src="Images/ImagemPrincipal.png"
          />
          <Flex
            color="white"
            position="absolute"
            top="60%"
            left={"50%"}
            w={"80%"}
            textStyle={"Regular"}
            transform="translate(-50%, -50%)" // Centraliza vertical e horizontalmente
            flexDirection="column"
            alignItems="center" // Alinha itens no centro verticalmente
            gap={"30px"}
          >
            <Flex
              fontSize={"24px"}
              direction={"column"}
              textAlign={"center"}
              mt={"20px"}
              mb={"-20px"}
            >
              <Text>As Melhores Soluções</Text>
              <Text>
                em{" "}
                <span style={{ color: "#DF4076", fontWeight: "bold" }}>
                  Limpeza
                </span>{" "}
                e
                <span style={{ color: "#BE2A5C", fontWeight: "bold" }}>
                  {" "}
                  Conservação
                </span>
              </Text>
            </Flex>
            <Flex
              gap={"20px"}
              textAlign={"center"}
              ml={["-25px", "0px", "0px", "0px", "0px", "0px", "0px"]}
            >
              <Link to="nossosServicos" smooth={false} duration={200}>
                <ButtonGradient
                  text={"Nossos serviços"}
                  width={"180px"}
                  height={"60px"}
                  textSize={"16px"}
                  noBorder
                  borderType="Left"
                  backGround="#BE2A5C"
                />
              </Link>
              <LinkChakra href={whatsappUrl} isExternal>
                <Img
                  src="/Images/ButtonImgMobile.png"
                  width={"180px"}
                  height={"60px"}
                  _hover={{ opacity: "70%" }}
                />
              </LinkChakra>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
