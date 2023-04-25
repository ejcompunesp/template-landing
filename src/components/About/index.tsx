import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Stack
      gap="20"
      direction="column"
      pb="12"
      px="48"
      bg="black"
      justifyContent="center"
      alignItems="center"
      w="100%"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        gap="0"
        h="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Flex direction="column" mt="40" h="100%" w="40%" lineHeight="5rem">
          <Flex>
            <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
              02
            </Text>
            <Text mx="2" color="gray.600" fontSize={{ base: "md", md: "lg" }}>
              /
            </Text>
            <Text color="white" fontSize={{ base: "md", md: "lg" }} as="b">
              ABOUT
            </Text>
          </Flex>
          <Box>
            <Text color="gray.600" fontSize={{ base: "2xl", md: "7xl" }}>
              We are
            </Text>
            <Text color="white" fontSize={{ base: "2xl", md: "7xl" }}>
              Creatives.
            </Text>
          </Box>
          <Flex alignItems="center" mt="16" display={{ base: "none" }}>
            <Divider
              h="8rem"
              orientation="vertical"
              borderColor="#613fe5"
              borderWidth="1px"
              borderRadius="lg"
            />
          </Flex>
        </Flex>
        <Flex direction="column" h="100%" w="52%">
          <Image
            borderRadius="lg"
            fit="cover"
            w="100%"
            h="40%"
            src="https://t4.ftcdn.net/jpg/04/76/55/87/360_F_476558773_ScdwyFAUN4T7hWO8rdMIufbfVKP3xq9I.jpg"
          />
          <Text color="gray.600" my="8" fontSize={{ base: "md", md: "2xl" }}>
            <b style={{ color: "whitesmoke" }}>Creative-minded people</b> with a
            lot of joyful experience in visual art that will help you turn your
            ideas into useful and beautiful products. We're based in{" "}
            <b style={{ color: "whitesmoke" }}>Canada and Germany</b>.
          </Text>
          <Text color="gray.600" fontSize={{ base: "md", md: "2xl" }} mt="10">
            Visual art is our field of expertise. We help people create good
            engagement through{" "}
            <b style={{ color: "whitesmoke" }}>design and process</b>. We
            believe in teamwork and tenacity.
          </Text>
          <Flex mt="5">
            <Divider
              mr="5"
              borderColor="#613fe5"
              maxW="30%"
              my="16"
              borderWidth="3px"
              borderRadius="lg"
            />
            <Divider
              borderColor="#613fe5"
              maxW="10%"
              my="16"
              borderWidth="3px"
              borderRadius="lg"
              mr="5"
            />
            <Divider
              borderColor="#613fe5"
              maxW="10%"
              my="16"
              borderWidth="3px"
              borderRadius="lg"
              mr="5"
            />
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default About;
