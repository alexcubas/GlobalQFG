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
          src={"/QFGIcons/GlobalLogo.png"}
          alignSelf={"center"}
          alt={"TudoLimpoIcone"}
        />
      ) : (
        <Image
          w={"60px"}
          src={"/QFGIcons/GlobalLogo.png"}
          alignSelf={"center"}
          alt={"TudoLimpoIcone"}
        />
      )}
    </>
  );
}
