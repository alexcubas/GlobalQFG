import phoneLogic from "@/helpers/phoneLogic";
import {
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
  Link as LinkChakra,
} from "@chakra-ui/react";
import ButtonGradient from "../patterns/ButtonGradient";
import ImageWithText from "../patterns/ImageWithText";
import { Link } from "react-scroll";
import { TfiEmail } from "react-icons/tfi";

export default function FooterContainerMobile() {
  const whatsappUrl =
    "https://wa.me/41999731035?text=" +
    encodeURIComponent("Olá, gostaria de mais informações!");
  const instagramUrl = "https://instagram.com/tudolimpocuritiba";
  return (
    <Flex
      w={"100%"}
      align={"center"}
      justify={"space-evenly"}
      bg={"#9F1C46"}
      h={"auto"}
      textColor={"white"}
      textStyle={"Regular"}
      fontSize={"20px"}
      pt={"30px"}
      pb={"50px"}
      zIndex={1}
    >
      <Flex direction={"column"} alignItems={"start"} gap={"20px"}>
        <Image
          src={"/Icons/TL_LogoIcon.png"}
          alt={"imagem footer"}
          ml={"20px"}
          w={"35px"}
        />
        <ButtonGradient
          text={"Solicite um orçamento"}
          width="200px"
          height="60px"
          borderType="Left"
          withImage="/Icons/WhatsLogo.png"
          backGround="#9F1C46"
          textSize="12px"
        />
        <Flex gap={"10px"} align={"center"} fontSize="12px">
          <Image
            src={"/Icons/phoneIcon.png"}
            alt={"phoneicon"}
            height="20px"
            width="20px"
          />
          <Text>(41) 3014-8922</Text>
        </Flex>
        <LinkChakra
          href={whatsappUrl}
          isExternal
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
        >
          <Flex gap={"10px"} align={"center"} fontSize="12px">
            <Image
              src={"/Icons/WhatsIcon.png"}
              alt={"whatsicon"}
              w={"20px"}
              h={"20px"}
            />
            <Text>(41) 99973-1035</Text>
          </Flex>
        </LinkChakra>
        <LinkChakra href="mailto:contato@tudolimpocuritiba.com.br?subject=Assunto%20Interessante&body=Olá!%20Estou%20interessado%20em%20seus%20serviços.">
          <Flex gap={"10px"} align={"center"} fontSize="12px">
            <TfiEmail size={"20px"} />
            <Text>contato@tudolimpocuritiba.com.br</Text>
          </Flex>
        </LinkChakra>
      </Flex>
      <Flex direction={"column"} gap={"20px"}>
        <Text textStyle={"Bold"} fontSize={"16px"}>
          Menu
        </Text>
        <Flex direction={"column"} gap={"10px"} fontSize={"12px"}>
          <Link to="home" smooth={false} duration={200}>
            <Text cursor={"pointer"}>Home</Text>
          </Link>
          <Link to="nossosServicos" smooth={false} duration={200}>
            <Text cursor={"pointer"}>Serviços</Text>
          </Link>
          <Link to="quemSomos" smooth={false} duration={200}>
            <Text cursor={"pointer"}>Quem Somos</Text>
          </Link>
          <Link to="Contato" smooth={false} duration={200}>
            <Text cursor={"pointer"}>Contato</Text>
          </Link>
        </Flex>
        <Flex gap={"30px"}>
          <LinkChakra href={instagramUrl} isExternal>
            <Image
              src="/Icons/InstaIcon.png"
              alt="InstaIcon"
              w={"30px"}
              h={"30px"}
            />
          </LinkChakra>
          <LinkChakra href={whatsappUrl} isExternal>
            <Image
              src="/Icons/WhatsIcon.png"
              alt="WhatsIcon"
              w={"32px"}
              h={"32px"}
            />
          </LinkChakra>
        </Flex>
      </Flex>

      <Text position={"absolute"} bottom={"10px"} fontSize={"12px"} mb={"5px"}>
        @ 2024. Todos os Direitos Reservados.
      </Text>
    </Flex>
  );
}
