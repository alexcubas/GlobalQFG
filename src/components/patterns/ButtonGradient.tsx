import { Flex, Text, Image, Button, Link } from "@chakra-ui/react";

type ButtonGradientType = {
  text: string;
  withImage?: string;
  width?: string;
  borderType?: string;
  backGround: string;
  textSize?: string;
  height?: string;
  noBorder?: boolean;
  isSubmit?: boolean;
  borderRadiusButton?: string;
};
export default function ButtonGradient({
  text,
  withImage,
  width,
  borderType,
  backGround,
  textSize,
  height,
  noBorder,
  isSubmit,
  borderRadiusButton,
}: ButtonGradientType) {
  const whatsappUrl =
    "https://wa.me/41999731035?text=" +
    encodeURIComponent("Olá, gostaria de um orçamento");

  return isSubmit ? (
    <Flex
      sx={
        noBorder
          ? { background: "none" }
          : {
              background: [
                "linear-gradient(60deg, #CBA558, #E9CF86, #ECD38D, #E9CF86, #CBA558) border-box",
              ],
            }
      }
      align={"center"}
      justify={"center"}
      borderTopLeftRadius={"20px"}
      borderTopRightRadius={borderType === "Left" ? "0px" : "20px"}
      borderBottomLeftRadius={borderType === "Left" ? "0px" : "20px"}
      borderBottomRightRadius={"20px"}
      width={width ? width : "full"}
      minW={width ? width : "full"}
    >
      <Flex
        align="center" // Alinha verticalmente ao centro
        justify="center" // Alinha horizontalmente ao centro
        bg={backGround}
        _hover={{ opacity: "90%" }}
        _active={{ opacity: "70%" }}
        cursor={"pointer"}
        fontWeight={"bold"}
        my="1px" // Margin vertical (top e bottom)
        mx="1px" // Margin horizontal (left e right)
        p={textSize ? "15px 10px" : "5px 10px"}
        w="full"
        h={height ? height : "90px"}
        borderTopLeftRadius={"20px"}
        borderTopRightRadius={borderType === "Left" ? "0px" : "20px"}
        borderBottomLeftRadius={borderType === "Left" ? "0px" : "20px"}
        borderBottomRightRadius={"20px"}
        fontSize={textSize ? textSize : "25px"}
      >
        <Image
          src={withImage}
          display={withImage ? "flex" : "none"}
          alt="whatsicon"
          w="30px"
          mr="10px" // Adiciona margem à direita da imagem para separar do texto
        />
        <Text
          bgGradient={
            !noBorder
              ? "linear(to-r, #CBA558, #E9CF86, #ECD38D, #E9CF86, #CBA558)"
              : ""
          }
          bgClip={!noBorder ? "text" : ""}
        >
          {text}
        </Text>
      </Flex>
    </Flex>
  ) : (
    <Link
      href={whatsappUrl}
      isExternal
      textDecoration="none"
      _hover={{ textDecoration: "none" }}
    >
      <Flex
        sx={
          noBorder
            ? { background: "none" }
            : {
                background: [
                  "linear-gradient(60deg, #CBA558, #E9CF86, #ECD38D, #E9CF86, #CBA558) border-box",
                ],
              }
        }
        align={"center"}
        justify={"center"}
        borderTopLeftRadius={"40px"}
        borderTopRightRadius={borderType === "Left" ? "0px" : "40px"}
        borderBottomLeftRadius={borderType === "Left" ? "0px" : "40px"}
        borderBottomRightRadius={"40px"}
        width={width ? width : "full"}
        minW={width ? width : "full"}
      >
        <Flex
          align="center" // Alinha verticalmente ao centro
          justify="center" // Alinha horizontalmente ao centro
          bg={backGround}
          _hover={{ opacity: "90%" }}
          _active={{ opacity: "70%" }}
          cursor={"pointer"}
          fontWeight={"bold"}
          my="1px" // Margin vertical (top e bottom)
          mx="1px" // Margin horizontal (left e right)
          p={textSize ? "15px 10px" : "5px 10px"}
          w="full"
          h={height ? height : "90px"}
          borderTopLeftRadius={"40px"}
          borderTopRightRadius={borderType === "Left" ? "0px" : "40px"}
          borderBottomLeftRadius={borderType === "Left" ? "0px" : "40px"}
          borderBottomRightRadius={"40px"}
          fontSize={textSize ? textSize : "25px"}
        >
          <Image
            src={withImage}
            display={withImage ? "flex" : "none"}
            alt="whatsicon"
            w="30px"
            mr="10px" // Adiciona margem à direita da imagem para separar do texto
          />
          <Text
            bgGradient={
              !noBorder
                ? "linear(to-r, #CBA558, #E9CF86, #ECD38D, #E9CF86, #CBA558)"
                : ""
            }
            bgClip={!noBorder ? "text" : ""}
          >
            {text}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}
