import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import Carousel from "components/Carousel";

const Projects = () => {
  return (
    <Stack
      gap="20"
      direction="column"
      py="12"
      px="48"
      bg="black"
      justifyContent="center"
      alignItems="center"
    >
      <HStack gap="50">
        <Flex direction="column">
          <Image
            borderRadius="lg"
            fit="cover"
            w="600px"
            h="200px"
            src="https://upload.wikimedia.org/wikipedia/commons/2/27/Robert_C._Martin_surrounded_by_computers.jpg"
          />
          <Box mt="4">
            <Text color="white" fontSize="2xl" as="b">
              Uncle Bob
            </Text>
            <Text color="gray.600" fontSize="xl">
              Software Developer
            </Text>
          </Box>
        </Flex>
        <Flex direction="column">
          <Flex>
            <Text color="gray.600" fontSize="lg">
              03
            </Text>
            <Text mx="2" color="gray.600" fontSize="lg">
              /
            </Text>
            <Text color="white" fontSize="lg" as="b">
              PROJECTS
            </Text>
          </Flex>
          <Text color="white" fontSize="6xl" as="b">
            "We crafted products that help people to solve problems"
          </Text>
        </Flex>
      </HStack>
      <Carousel />
    </Stack>
  );
};

export default Projects;
