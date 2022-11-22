import * as React from "react";
import {
  Box,
  Center,
  ChakraProvider,
  Heading,
  Highlight,
  HStack,
  ListItem,
  Link,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import theme from "../@chakra-ui/gatsby-plugin/theme";
import {
  FaLinkedinIn,
  FaRegEnvelope,
  FaGithub,
  FaRegFileAlt,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  const links = [
    {
      icon: FaRegFileAlt,
      title: "Resume",
      href: "/William_Tran_Resume.pdf",
    },
    {
      icon: FaLinkedinIn,
      title: "LinkedIn",
      href: "https://linkedin.com/in/williamtran10",
    },
    {
      icon: FaGithub,
      title: "Github",
      href: "https://github.com/williamtran10",
    },
    {
      icon: FaRegEnvelope,
      title: "Email",
      href: "mailto:me@williamtran.net",
    },
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>William Tran</title>
        <meta name="description" content="William Tran Personal Website" />
      </Helmet>
      <ChakraProvider theme={theme}>
        <Center h="calc(100vh)">
          <VStack align="left">
            <Text>👋 Hey there! I'm</Text>
            <Heading>William Tran</Heading>

            <Box py="24px">
              <Highlight
                query={["computer science", "University of Waterloo"]}
                styles={{
                  px: "1.5",
                  py: "0.5",
                  rounded: "full",
                  bg: "red.100",
                }}
              >
                I'm a computer science student at the University of Waterloo
              </Highlight>
            </Box>

            <Text>So far I've...</Text>
            <UnorderedList pl="24px" lineHeight="1.6em">
              <ListItem>
                <Highlight
                  query={["4 internships"]}
                  styles={{
                    px: "1",
                    py: "0",
                    rounded: "full",
                    bg: "orange.100",
                  }}
                >
                  completed 4 internships in software engineering and web
                  development
                </Highlight>
              </ListItem>
              <ListItem>
                <Highlight
                  query={["3 cryptocurrency features"]}
                  styles={{
                    px: "1",
                    py: "0",
                    rounded: "full",
                    bg: "orange.100",
                  }}
                >
                  enabled 3 cryptocurrency features on our platform by adding
                  support for STX tokens
                </Highlight>
              </ListItem>
              <ListItem>
                <Highlight
                  query={["2 cross-team initiatives"]}
                  styles={{
                    px: "1",
                    py: "0",
                    rounded: "full",
                    bg: "orange.100",
                  }}
                >
                  led 2 cross-team initiatives including planning, development,
                  and testing
                </Highlight>
              </ListItem>
              <ListItem>
                <Link
                  href="https://medium.com/swlh/how-to-build-a-raspberry-pi-arcade-machine-3de4df2894c6"
                  title="Arcade Cabinet Article"
                  target="_blank"
                  rel="noopener noreferrer"
                  isExternal
                >
                  <Highlight
                    query={["1 full-size arcade cabinet"]}
                    styles={{
                      px: "1",
                      py: "0",
                      rounded: "full",
                      bg: "orange.100",
                    }}
                  >
                    built 1 full-size arcade cabinet built on a Raspberry Pi
                  </Highlight>
                  <ExternalLinkIcon pb="2px" pl="4px" />
                </Link>
              </ListItem>
            </UnorderedList>

            <HStack pt="30px" pb="56px" spacing="12px">
              {links.map((link) => (
                <a
                  href={link.href}
                  title={link.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    _hover={{
                      opacity: "50%",
                    }}
                    as={link.icon}
                    size="24px"
                  />
                </a>
              ))}
            </HStack>

            <StaticImage
              src="../images/web.jpg"
              alt="A sunset on a hill"
              placeholder="blurred"
              width="100%"
            />
          </VStack>
        </Center>
      </ChakraProvider>
    </>
  );
}
