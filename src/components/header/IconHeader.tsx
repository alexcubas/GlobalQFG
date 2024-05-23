import { Text, Image, useBreakpointValue } from "@chakra-ui/react";

export default function IconHeader() {
  const versionMob = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xlg: false,
  });
  return (
    <>
      {versionMob ? (
        <Image
          w={"30px"}
          src={"/Icons/TL_LogoIcon.png"}
          alignSelf={"center"}
          alt={"TudoLimpoIcone"}
        />
      ) : (
        <Image
          w={"120px"}
          src={"/Icons/TL_LogoFull.png"}
          alignSelf={"center"}
          mx={"-4px"}
          alt={"TudoLimpoIcone"}
        />
      )}
    </>
  );
}
