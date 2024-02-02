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
        <Center h="calc(100vh)" m="20px">
          <VStack align="left" maxW="48em">
            <Text>👋 Hey there! I'm</Text>
            <Heading as="h1">William Tran</Heading>

            <Box py="24px">
              <Box>
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
              <Box>
                <Highlight
                  query={["May 2024"]}
                  styles={{
                    px: "1.5",
                    py: "0.5",
                    rounded: "full",
                    bg: "red.100",
                  }}
                >
                  and I'll be graduating in May 2024
                </Highlight>
              </Box>
            </Box>

            <HStack pb="36px" spacing="12px">
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

            <Heading size="md">So far I've...</Heading>
            <UnorderedList pl="24px" lineHeight="1.6em">
              <ListItem>
                <Highlight
                  query={["4 internships in software engineering"]}
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
                  query={["3 employees as Founding Engineer"]}
                  styles={{
                    px: "1",
                    py: "0",
                    rounded: "full",
                    bg: "orange.100",
                  }}
                >
                  managed 3 employees as Founding Engineer at Elderado to launch
                  our product
                </Highlight>
              </ListItem>
              <ListItem>
                <Highlight
                  query={["2 teams as Technical Lead"]}
                  styles={{
                    px: "1",
                    py: "0",
                    rounded: "full",
                    bg: "orange.100",
                  }}
                >
                  directed 2 teams as Technical Lead to build web apps for NPOs
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

            <Heading size="md" pt={6}>
              What I've been up to...
            </Heading>
            <VStack align="left" spacing="18px">
              <Box>
                <Link
                  href="https://elderado.ca"
                  title="Elderado.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  isExternal
                >
                  <Text fontWeight="700">
                    Founding Engineer at Elderado{" "}
                    <ExternalLinkIcon pb="2px" pl="4px" />
                  </Text>
                </Link>
                <Text>
                  I joined Elderado in Sept 2023 and took the web app from MVP
                  to launch in three months. There, I managed a team of 2
                  contractors and 1 intern while also contributing much of the
                  code myself. I led a system re-architecture to use GCP and
                  Firebase as well as a migration from MongoDB and JavaScript to
                  PostgreSQL and TypeScript.
                </Text>
              </Box>

              <Box>
                <Link
                  href="https://github.com/uwblueprint/marillac-place"
                  title="Marillac Place"
                  target="_blank"
                  rel="noopener noreferrer"
                  isExternal
                >
                  <Text fontWeight="700">
                    Technical lead for Marillac Place{" "}
                    <ExternalLinkIcon pb="2px" pl="4px" />
                  </Text>
                </Link>
                <Text>
                  I started the Marillac Place team at UWBlueprint in Sept 2023
                  and directed 8 developers and co‑ordinated with design and PM
                  teams to create a gamified task‑tracking web app for an NPO
                  that provides support for homeless mothers and empowers them
                  to seek new opportunities.
                </Text>
              </Box>

              <Box>
                <Link
                  href="https://github.com/uwblueprint/focus-on-nature"
                  title="Focus on Nature"
                  target="_blank"
                  rel="noopener noreferrer"
                  isExternal
                >
                  <Text fontWeight="700">
                    Technical lead for Focus on Nature{" "}
                    <ExternalLinkIcon pb="2px" pl="4px" />
                  </Text>
                </Link>
                <Text>
                  During the final term of the Focus on Nature project at
                  UWBlueprint, I managed a team of 6 developers in implementing
                  and launching a camp booking web app for an NPO promoting
                  youth summer camps. Today, the web app handles the
                  registration of 7000+ campers per year.
                </Text>
              </Box>
            </VStack>

            <Box px={12} pt={6}>
              <Text
                fontSize="sm"
                color="gray.500"
                alignSelf="center"
                textAlign="center"
              >
                Thanks for sticking around!
              </Text>

              <Text
                fontSize="sm"
                color="gray.500"
                alignSelf="center"
                textAlign="center"
              >
                Here's a photo I took after hiking 3 hours up a hill through
                knee-deep mud in Tofino:
              </Text>
            </Box>

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
