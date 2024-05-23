import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { useEffect } from "react";

type BlockMainContentType = {
  text: string;
  image: string;
  borderSide?: string;
};

export default function BlockQualificationsContent({
  image,
  text,
  borderSide,
}: BlockMainContentType) {
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xlg: false,
  });

  const cardVariants: Variants = {
    offscreen: {
      opacity: 0.5,
      y: 200,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 2,
      },
    },
  };
  return (
    <Flex
      as={motion.div}
      variants={cardVariants}
      whileInView="onscreen"
      initial="offscreen"
      viewport={{ once: true }}
      w={isWideVersion ? "135px" : "300px"}
      h={isWideVersion ? "44px" : "100px"}
      align={"center"}
      justify={"center"}
      bg={"white"}
      paddingX={isWideVersion ? "20px" : "70px"}
      gap={"5px"}
      borderBottomRightRadius={borderSide === "right" ? "20px" : "0px"}
      borderTopLeftRadius={borderSide === "left" ? "20px" : "0px"}
      boxShadow={"-14px 14px 14px 3px #0000000F"}
    >
      <Image src={image} alt={image} h={isWideVersion ? "40px" : "70px"} />

      <Text
        textColor={"#BE2A5C"}
        textStyle={"Regular"}
        fontSize={isWideVersion ? "10px" : "20px"}
        textAlign={"center"}
      >
        {text}
      </Text>
    </Flex>
  );
}
