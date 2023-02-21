import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";

const colors = {
  brand: {
    900: "#1a365d",
  },
};

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NavBar children={undefined} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
