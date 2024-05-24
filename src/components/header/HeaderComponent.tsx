import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Image,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import ButtonContact from "./ButtonContact";
import IconHeader from "./IconHeader";
import NavBar from "./NavBar";

type HeaderComponentType = {
  scrollTo: any;
};

export default function HeaderComponent({ scrollTo }: HeaderComponentType) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: MutableRefObject<any> = useRef();
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xlg: false,
  });

  const [isSticky, setSticky] = useState(false);

  const checkScroll = () => {
    const offset = window.scrollY;
    if (offset > window.innerHeight) {
      // Maior que 100vh
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  return (
    <Flex
      position="absolute"
      top={isSticky ? "0" : "auto"}
      left="50%"
      transform="translateX(-50%)"
      background={isSticky ? "rgba(0, 0, 0, 0.5)" : "none"}
      h={isWideVersion ? "60px" : "150px"}
      w={"100%"}
      maxW={"1280px"}
      align={"end"}
      pb={"10px"}
      justify={isWideVersion ? "space-around" : "space-evenly"}
      zIndex={2}
      borderBottom={"1px solid white"}
    >
      <Flex
        display={isWideVersion ? "flex" : "none"}
        mb={"10px"}
        w={"33%"}
        justify={"center"}
      >
        <Image
          src="/Icons/hamburguerIcon.png"
          ref={btnRef}
          onClick={onOpen}
          cursor={"pointer"}
        />
        <Drawer
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={"black"} opacity={"60%"}>
            <DrawerCloseButton left={5} top={5} size={"lg"} color={"white"} />

            <DrawerBody textAlign={"center"} mt={"30px"} mb={"10px"}>
              <NavBar scrollTo={scrollTo} onclose={onClose} />
            </DrawerBody>

            <DrawerFooter justifyContent={"center"}>
              <ButtonContact />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Flex mb={isWideVersion ? "10px" : "0px"} w={"20%"} justify={"center"}>
        <IconHeader />
      </Flex>
      <Flex
        gap={"40px"}
        fontSize={"20px"}
        color="white"
        textStyle={"Regular"}
        display={isWideVersion ? "none" : "flex"}
      >
        <NavBar scrollTo={scrollTo} />
      </Flex>
      <Flex w={"20%"} justify={"center"}>
        <ButtonContact />
      </Flex>
    </Flex>
  );
}
