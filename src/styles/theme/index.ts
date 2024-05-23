import { extendTheme } from "@chakra-ui/react";

//Usa isso pra validar a página que vc quer
const breakpoints = {
  base: "0rem",
  sm: "30rem", //480px
  md: "64rem", //1024px
  lg: "86rem", // 1360px
  xlg: "120rem", //1920px
};

export const theme = extendTheme({
  breakpoints,

  colors: {
    pink1: "#DF4076",
    pink2: "#BE2A5C",
    pink3: "#9F1C46",
    gold1: "#E9CF86",
    gold2: "#ECD38D",
    gold3: "#C09642",
  },

  fonts: {
    heading: "Inter, Lato, Noto Sans, Arial, sans-serif",
    body: "Lato, Inter, Noto Sans, Arial, sans-serif",
  },

  textStyles: {
    Light: {
      fontFamily: "Inter, Lato, Noto Sans, Arial, sans-serif",
      fontWeight: "200",
    },
    Regular: {
      fontFamily: "Inter, Lato, Noto Sans, Arial, sans-serif",
      fontWeight: "400",
    },
    Bold: {
      fontFamily: "Inter, Lato, Noto Sans, Arial, sans-serif",
      fontWeight: "700",
    },
    JBold: {
      fontFamily: "Inter, Lato, Noto Sans, Arial, sans-serif",
      fontWeight: "700",
    },
    JLight: {
      fontFamily: "Inter, Lato, Noto Sans, Arial, sans-serif",
      fontWeight: "500",
    },
  },

  styles: {
    global: {
      body: {
        bg: "#fff",
        color: "#151932",
      },
    },
  },
});
