import AboutContainer from "@/components/about/AboutContainer";
import AboutCompanyContainer from "@/components/aboutCompany/AboutCompanyContainer";
import AboutCompanyContainerMobile from "@/components/aboutCompany/AboutCompanyContainerMob";
import FaleConoscoBlock from "@/components/faleConosco/faleConoscoBlock";
import FooterContainer from "@/components/footer/FooterContainer";
import FooterContainerMobile from "@/components/footer/FooterContainerMob";
import HeaderComponent from "@/components/header/HeaderComponent";
import BlockNossosServicos from "@/components/mainContent/blockNossosServicos";
import MainContent from "@/components/mainContent/MainContent";
import MainContentMobile from "@/components/mainContent/MainContentMob";
import BlockQuemSomos from "@/components/method/BlockQuemSomos";
import { Flex, useBreakpointValue, Image } from "@chakra-ui/react";
import Head from "next/head";
import { scroller } from "react-scroll";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xlg: false,
  });
  function scrollTo(className: string) {
    scroller.scrollTo(className, {
      duration: 0,
      delay: 0,
      smooth: "easeInOutQuad",
    });
  }
  return (
    <>
      <Head>
        <title>Tudo Limpo - Especialistas em Limpeza e Conservação</title>
        <meta
          name="description"
          content="Na Tudo Limpo, somos especialistas em limpeza e conservação para condomínios, espaços comerciais e corporativos em Curitiba, PR. Garantimos que cada canto do seu espaço reflita profissionalismo e dedicação."
        />
      </Head>
      <Flex
        align={"center"}
        bg={"#35275D"}
        direction={"column"}
        minHeight="100vh"
      >
        {/* <Image
          display={isWideVersion ? "block" : "none"}
          src="/Images/bgImgMobileLeft.png"
          position={"absolute"}
          left={0}
          top="0"
          height="100%"
          objectFit="contain"
          opacity="1"
          transition="opacity 0.3s ease"
        />
        <Image
          display={isWideVersion ? "block" : "none"}
          src="/Images/bgImgMobileLeft.png"
          position={"absolute"}
          right={0}
          top="0"
          h={"100vh"}
          height="100%"
          objectFit="contain"
          opacity="1"
          transition="opacity 0.3s ease"
        /> */}
        <Flex
          w={"100%"}
          direction={"column"}
          h={isWideVersion ? "100%" : "100vh"}
        >
          <Flex direction={"column"}>
            <HeaderComponent scrollTo={scrollTo} />
            {isWideVersion ? (
              <MainContentMobile scrollTo={scrollTo} />
            ) : (
              <MainContent scrollTo={scrollTo} />
            )}
          </Flex>
        </Flex>
        <Flex w={"100%"} className={"Conhecer"}>
          <BlockNossosServicos />
        </Flex>
        <Flex w={"100%"} justify={"center"} className={"Quem somos?"}>
          <AboutCompanyContainer />
        </Flex>
        <Flex w={"100%"} justify={"center"} className={"Fale conosco"}>
          <FaleConoscoBlock />
        </Flex>
        <Flex w={"100%"} className={"Contate-nos"}>
          {isWideVersion ? <FooterContainerMobile /> : <FooterContainer />}
        </Flex>
      </Flex>
    </>
  );
}
