import { Flex, Image, Link, useBreakpointValue } from "@chakra-ui/react";

export default function ButtonContact() {
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xlg: false,
  });
  const whatsappUrl =
    "https://wa.me/41999731035?text=" +
    encodeURIComponent("Olá, gostaria de mais informações!");
  const instagramUrl = "https://instagram.com/tudolimpocuritiba";
  return (
    <Flex gap={"20px"}>
      <Link href={instagramUrl} isExternal>
        <Image
          src="/QFGIcons/instagramLogo.png"
          alt="InstaLogo"
          w={isWideVersion ? "36px" : "35px"}
          h={isWideVersion ? "36px" : "35px"}
          cursor={"pointer"}
        />
      </Link>
      <Link href={whatsappUrl} isExternal>
        <Image
          src="/QFGIcons/faceLogo.png"
          alt="WhatsLogo"
          w={isWideVersion ? "30px" : "35px"}
          h={isWideVersion ? "30px" : "35px"}
          cursor={"pointer"}
        />
      </Link>
      <Link href={whatsappUrl} isExternal>
        <Image
          src="/QFGIcons/youtubeLogo.png"
          alt="WhatsLogo"
          w={isWideVersion ? "30px" : "35px"}
          h={isWideVersion ? "30px" : "35px"}
          cursor={"pointer"}
        />
      </Link>
    </Flex>
  );
}
