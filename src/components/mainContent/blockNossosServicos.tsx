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
    >
      <Flex
        gap="15px"
        alignSelf={isWideVersion ? "center" : "start"}
        justify={isWideVersion ? "center" : "start"}
        position={"relative"}
        w={isWideVersion ? "100%" : "700px"}
        ml={isWideVersion ? "0px" : "-30px"}
      >
        <TextWithGradient
          text="NOSSOS"
          fontSize={isWideVersion ? "24px" : "55px"}
          fontWeight={"bold"}
          zIndex={1}
          ml={isWideVersion ? "0px" : "65px"}
          mb={isWideVersion ? "0px" : "20px"}
        />
        <TextWithGradient
          text="SERVIÇOS"
          fontSize={isWideVersion ? "24px" : "55px"}
          zIndex={1}
          fontWeight={"light"}
        />
        <Image
          src="/Images/ImageBGText.png"
          position={"absolute"}
          bottom={0}
          left={0}
        />
      </Flex>
      <Flex
        align={isWideVersion ? "center" : "center"}
        direction={isWideVersion ? "column" : "row"}
        gap={isWideVersion ? "40px" : "20px"}
      >
        <BlockMainContent
          titleFirst="Limpeza e Coservação"
          titleSecond="Corporativos"
          text="As melhores soluções em limpeza e conservação para o seu ambiente corporativo"
          image="/Images/corporativosImg.png"
        />
        <BlockMainContent
          titleFirst="Limpeza e Coservação"
          titleSecond="Comercial"
          text="As melhores soluções em limpeza e conservação para o seu ambiente Comercial"
          image="/Images/comercialImg.png"
        />
        <BlockMainContent
          titleFirst="Limpeza e Coservação"
          titleSecond="Condominial"
          text="As melhores soluções em limpeza e conservação para o seu ambiente Condominial"
          image="/Images/condominalImg.png"
        />
      </Flex>
      <Flex w={"100%"} justify={"end"} ml={isWideVersion ? "0px" : "70px"}>
        <Image
          src="/Images/ImageBGText.png"
          w={isWideVersion ? "full" : "646px"}
        />
      </Flex>
      <Flex
        align={isWideVersion ? "center" : "center"}
        direction={isWideVersion ? "column" : "row"}
        gap={"5px"}
      >
        <Flex gap={"5px"}>
          <BlockQualificationsContent
            text="Atendimento Especializado"
            image="/Icons/AtendimentoIcon.png"
            borderSide="left"
          />
          <BlockQualificationsContent
            text="Profissionais Qualificados"
            image="/Icons/atuacaoIcon.png"
          />
        </Flex>
        <Flex gap={"5px"}>
          <BlockQualificationsContent
            text="Atuação Segmentada"
            image="/Icons/compromissoIcon.png"
          />
          <BlockQualificationsContent
            text="Compromisso e Qualidade"
            image="/Icons/profissionaisIcon.png"
            borderSide="right"
          />
        </Flex>
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
  );
}
