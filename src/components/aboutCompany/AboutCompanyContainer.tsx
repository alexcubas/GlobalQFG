import {
  Flex,
  Text,
  Image,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import ButtonGradient from "../patterns/ButtonGradient";
import TextWithGradient from "../patterns/textWithGradient";

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
      <Flex
        w="70%"
        h="1px"
        mb={isWideVersion ? "20px" : "50px"}
        justify="center"
        align="center"
        bgGradient="linear(to-r, rgba(203, 165, 88, 0.1), rgba(233, 207, 134, 0.3), rgba(236, 211, 141, 0.5), rgba(233, 207, 134, 0.3), rgba(203, 165, 88, 0.1))"
      />
      <Flex
        my={isWideVersion ? "30px" : "60px"}
        direction={"column"}
        justify={"center"}
        align={"center"}
      >
        <Flex
          gap="15px"
          w={isWideVersion ? "100%" : "700px"}
          minW={"250px"}
          position={"relative"}
          h={"auto"}
          justify={isWideVersion ? "center" : "center"}
        >
          <Text
            zIndex={1}
            fontSize={isWideVersion ? "24px" : "55px"}
            fontWeight={"bold"}
          >
            QUEM
          </Text>
          <Text
            zIndex={1}
            fontSize={isWideVersion ? "24px" : "55px"}
            fontWeight={"Regular"}
            mr={isWideVersion ? "0px" : "35px"}
          >
            SOMOS
          </Text>
          <Image
            src="/Images/ImageBGText.png"
            position={"absolute"}
            bottom={isWideVersion ? "0px" : -4}
            left={0}
          />
        </Flex>
      </Flex>
      <Flex
        gap={"50px"}
        align={"center"}
        direction={isWideVersion ? "column" : "column"}
      >
        <Flex
          w={isWideVersion ? "70%" : "850px"}
          direction={"column"}
          textStyle={isWideVersion ? "Bold" : "Regular"}
          gap={"20px"}
          fontSize={isWideVersion ? "13px" : "25px"}
          textAlign={"center"}
        >
          <TextWithGradient
            text={` Na Tudo Limpo, somos especialistas em limpeza e conservação para
            condomínios, espaços comerciais e corporativos. Com uma equipe
            treinada e dedicada, garantimos que cada canto do seu espaço reflita
            profissionalismo e dedicação.`}
          ></TextWithGradient>
          <TextWithGradient
            text={`Acreditamos que um ambiente limpo impulsiona a produtividade e o
            sucesso. Nosso compromisso com a excelência e atenção aos detalhes
            garante uma primeira impressão sempre positiva. Faça da limpeza a
            sua melhor apresentação conosco!`}
          ></TextWithGradient>
        </Flex>
        <Flex
          ml={isWideVersion ? "0px" : "50px"}
          w={isWideVersion ? "80%" : "800px"}
          justify={"center"}
        >
          <Image
            src={"/Images/quemSomosImg.png"}
            alt={"quemSomosImg"}
            w={isWideVersion ? "90%" : "750px"}
          />
        </Flex>
        <ButtonGradient
          text={"Solicite um orçamento"}
          width={isWideVersion ? "250px" : "350px"}
          textSize={isWideVersion ? "16px" : "25px"}
          height={isWideVersion ? "60px" : "90px"}
          borderType="Left"
          withImage="/Icons/WhatsLogo.png"
          backGround="#BE2A5C"
        />
      </Flex>
      <Flex
        my={isWideVersion ? "30px" : "80px"}
        w="70%"
        h="1px"
        justify="center"
        align="center"
        bgGradient="linear(to-r, rgba(203, 165, 88, 0.1), rgba(233, 207, 134, 0.3), rgba(236, 211, 141, 0.5), rgba(233, 207, 134, 0.3), rgba(203, 165, 88, 0.1))"
      />
    </Flex>
  );
}
