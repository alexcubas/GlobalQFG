import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import TextWithGradient from "./textWithGradient";

type BlockMainContentType = {
  text: string;
  image: string;
  titleFirst: string;
  titleSecond: string;
};

export default function BlockMainContent({
  image,
  text,
  titleFirst,
  titleSecond,
}: BlockMainContentType) {
  const [isOpen, setIsOpen] = useState(false);
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xlg: false,
  });

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Flex
      position="relative"
      w={isWideVersion ? "250px" : "400px"}
      h={isWideVersion ? "350px" : "550px"}
      borderBottom="1px solid #C09642"
      borderRadius="20px"
      justify="center"
      onClick={toggleOpen}
      cursor="pointer"
      overflow="hidden"
      zIndex={2}
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen
            ? isWideVersion
              ? "150px"
              : "250px"
            : isWideVersion
            ? "350px"
            : "550px",
        }}
        transition={{ duration: 0.5 }}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
        }}
      >
        <Flex
          w="80%"
          textColor="#C09642"
          opacity={isOpen ? 0 : 1}
          textAlign={"center"}
          fontSize={isWideVersion ? "22px" : "40px"}
          fontWeight="bold"
          position="absolute"
          top={"50%"}
          transition={"all 0.3s ease-in-out"}
          transform="translateY(-50%)"
          zIndex={2}
          direction={"column"}
        >
          <TextWithGradient text={titleFirst} fontWeight={"light"} />
          <TextWithGradient text={titleSecond} fontWeight={"bold"} />
        </Flex>
        <Flex
          w={isWideVersion ? "65%" : "72%"}
          textColor="#C09642"
          opacity={isOpen ? 1 : 0}
          textAlign={"start"}
          fontSize={isWideVersion ? "18px" : "30px"}
          fontWeight="bold"
          position="absolute"
          top={"60%"}
          transition={"all 0.3s ease-in-out"}
          transform="translateY(-50%)"
          zIndex={2}
          direction={"column"}
        >
          <TextWithGradient text={titleFirst} fontWeight={"light"} />
          <TextWithGradient text={titleSecond} fontWeight={"bold"} />
        </Flex>
        <Text
          position="absolute"
          bottom={isWideVersion ? 0 : 5}
          w="80%"
          textAlign="start"
          textColor={"white"}
          fontWeight={"regular"}
          p="20px"
          fontSize={isWideVersion ? "12px" : "16px"}
          opacity={isOpen ? 1 : 0}
          transition={"all 0.3s ease-in-out"}
          zIndex={0}
        >
          {text}
        </Text>
      </motion.div>
    </Flex>
  );
}
