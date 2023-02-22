import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Image,
  Center,
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ben Pritchard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <main className={styles.main}>
        <div
          className={styles.container}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
          }}
        >
          <Box w="100%" h="300px" bgImage="/img/cover-image(1).png">
            <Image
              src="/img/profilepic.png"
              alt="logo"
              width={200}
              height={200}
              borderRadius="full"
            />
          </Box>
        </div>
      </main>
    </>
  );
}
