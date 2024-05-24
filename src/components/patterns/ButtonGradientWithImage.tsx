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
      w={"220px"}
      h={"66px"}
      borderColor="transparent" // Define a cor da borda como transparente
      position="relative"
      _hover={{ width: "250px", height: "75px", fontSize: "25px" }} // Ajusta a opacidade e a cor da borda no hover
      _focus={{ borderColor: "transparent" }} // Remove a borda ao focar
      _active={{ width: "220px", height: "66px", fontSize: "23px" }} // Remove a borda ao clicar
      sx={{
        backgroundImage: `url('/QFGIcons/borderButton.png')`, // Define a imagem de fundo
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "all 0.3s ease", // Adiciona a transição para todas as propriedades
      }}
      fontWeight="Regular"
      fontSize={textSize ? textSize : "25px"}
    >
      <Text color={"white"}>{text}</Text>
    </Button>
  );
}
