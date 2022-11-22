// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Spectral', sans-serif`,
    body: `'Spectral', sans-serif`,
  },
});

export default extendTheme(theme);
