import { Flex, Text, Image, Button } from "@chakra-ui/react";

type ButtonGradientType = {
  text: string;
  withImage?: string;
  width?: string;
  borderType?: string;
  backGround: string;
  textSize?: string;
};
export default function ButtonGradientWhithImage({
  text,
  withImage,
  width,
  borderType,
  backGround,
  textSize,
}: ButtonGradientType) {
  return (
    <Button
      variant="ghost" // Usa o estilo ghost para manter a transparência
      w={"340px"}
      h={"92px"}
      borderColor="transparent" // Define a cor da borda como transparente
      position="relative"
      _hover={{ opacity: "70%" }} // Ajusta a opacidade e a cor da borda no hover
      _focus={{ borderColor: "transparent" }} // Remove a borda ao focar
      _active={{ borderColor: "transparent", opacity: "100%" }} // Remove a borda ao clicar
      sx={{
        backgroundImage: `url('/Icons/borderButton.png')`, // Define a imagem de fundo
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      fontWeight="extrabold"
      fontSize={textSize ? textSize : "25px"}
    >
      <Text
        bgGradient="linear(to-r, #CBA558, #E9CF86, #ECD38D, #E9CF86, #CBA558)"
        bgClip="text"
      >
        {text}
      </Text>
    </Button>
  );
}
