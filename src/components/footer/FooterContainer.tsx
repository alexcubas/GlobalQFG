import { Flex, Image, Link as LinkChakra, Text } from "@chakra-ui/react";
import ButtonGradient from "../patterns/ButtonGradient";
import { Link } from "react-scroll";
import { TfiEmail } from "react-icons/tfi";

export default function FooterContainer() {
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
      h={"350px"}
      textColor={"white"}
      textStyle={"Regular"}
      fontSize={"20px"}
    >
      <Flex direction={"column"} alignItems={"center"} gap={"20px"}>
        <Image
          src={"/Icons/TL_LogoIcon.png"}
          alt={"imagem footer"}
          w={"100px"}
        />
        <ButtonGradient
          text={"Solicite um orçamento"}
          width="350px"
          borderType="Left"
          withImage="/Icons/WhatsLogo.png"
          backGround="#9F1C46"
        />
      </Flex>
      <Flex direction={"column"} gap={"20px"}>
        <Text textStyle={"Bold"} fontSize={"30px"}>
          Menu
        </Text>
        <Flex direction={"column"} gap={"10px"}>
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
      </Flex>
      <Flex direction={"column"} gap={"10px"}>
        <Flex gap={"10px"} align={"center"}>
          <Image
            src={"/Icons/phoneIcon.png"}
            alt={"phoneicon"}
            w={"30px"}
            h={"30px"}
          />
          <Text>(41) 3014-8922</Text>
        </Flex>
        <LinkChakra
          href={whatsappUrl}
          isExternal
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
        >
          <Flex gap={"10px"} align={"center"}>
            <Image
              src={"/Icons/WhatsIcon.png"}
              alt={"whatsicon"}
              w={"30px"}
              h={"30px"}
            />
            <Text>(41) 99973-1035</Text>
          </Flex>
        </LinkChakra>
        <LinkChakra
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
          href="mailto:contato@tudolimpocuritiba.com.br?subject=Assunto%20Interessante&body=Olá!%20Estou%20interessado%20em%20seus%20serviços."
        >
          <Flex gap={"10px"} align={"center"}>
            <TfiEmail size={"30px"} />
            <Text>contato@tudolimpocuritiba.com.br</Text>
          </Flex>
        </LinkChakra>
        <Flex gap={"30px"}>
          <LinkChakra href={instagramUrl} isExternal>
            <Image
              src="/Icons/InstaIcon.png"
              alt="InstaIcon"
              w={"40px"}
              h={"40px"}
            />
          </LinkChakra>
          <LinkChakra href={whatsappUrl} isExternal>
            <Image
              src="/Icons/WhatsIcon.png"
              alt="WhatsIcon"
              w={"42px"}
              h={"42px"}
            />
          </LinkChakra>
        </Flex>
      </Flex>
      <Text position={"absolute"} bottom={"10px"}>
        @ 2024. Todos os Direitos Reservados.
      </Text>
    </Flex>
  );
}
