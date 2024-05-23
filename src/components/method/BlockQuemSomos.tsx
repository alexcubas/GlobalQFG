import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import MethodComponentLeft from "./MethodComponentLeft";
import MethodComponentRight from "./MethodComponentRight";
import MethodComponentRightMob from "./MethodComponentRightMob";

export default function BlockQuemSomos() {
  const versionMob = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xlg: false,
  });
  return <Flex></Flex>;
}
