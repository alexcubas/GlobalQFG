import { Text, Button, useBreakpointValue, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, Element, Events, scrollSpy } from "react-scroll";

type NavBarType = {
  scrollTo: any;
  onclose?: any;
};

export default function NavBar({ scrollTo, onclose }: NavBarType) {
  const [activeSection, setActiveSection] = useState("home");
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xlg: false,
  });

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("beginning a scroll");
    });

    // Inicializa o scrollSpy apenas no lado do cliente
    if (typeof window !== "undefined") {
      scrollSpy.update();
    }

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);
  return (
    <Flex
      direction={isWideVersion ? "column" : "row"}
      gap={isWideVersion ? 8 : 10}
      fontSize={isWideVersion ? "20px" : "20px"}
      textColor={"white"}
    >
      <Link
        activeClass="active"
        spy={true}
        to="home"
        smooth={false}
        duration={200}
        className="link"
      >
        <Text cursor={"pointer"} fontWeight={"regular"}>
          Home
        </Text>
      </Link>
      <Link
        spy={true}
        activeClass="active"
        to="nossosServicos"
        smooth={false}
        duration={200}
        className="link"
      >
        <Text cursor={"pointer"}>Serviços</Text>
      </Link>
      <Link
        spy={true}
        activeClass="active"
        to="quemSomos"
        smooth={false}
        duration={200}
        className="link"
      >
        <Text cursor={"pointer"}>Quem somos</Text>
      </Link>
      <Link
        spy={true}
        activeClass="active"
        to="Contato"
        smooth={false}
        duration={200}
        className="link"
      >
        <Text cursor={"pointer"}>Contato</Text>
      </Link>
    </Flex>
  );
}
