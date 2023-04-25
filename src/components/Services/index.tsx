import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const posts = [
  {
    title: "03.",
    description: "Illustrations.",
  },
  {
    title: "04.",
    description: "Motion Desing.",
  },
  {
    title: "05.",
    description: "Developments.",
  },
];

type Post = {
  title: string;
  description: string;
};

const Post = ({ title, description }: Post) => {
  return (
    <VStack p="6" bg="gray.50" borderRadius="lg" h="700px">
      <Text fontSize="2xl" as="b">
        {title}
      </Text>
      <Divider color="gray.200" />
      {description.split("").map((char, index) => (
        <Text
          key={index}
          fontSize="2xl"
          display="inline-block"
          transform="rotate(90deg)"
        >
          {char}
        </Text>
      ))}
    </VStack>
  );
};

const ExtendedPost = () => {
  return (
    <VStack bg="black" p="8" h="700px">
      <Flex direction="column">
        <Text color="gray.600" fontSize="2xl">
          02.
        </Text>
        <Text color="white" fontSize="6xl" as="b">
          Branding
        </Text>
        <Text color="white" fontSize="4xl">
          Design
        </Text>
        <Divider my="6" />
        <Box my="20">
          <Text color="whiteAlpha.400" fontSize="lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aut
            voluptatibus veniam ex quo ab. Repellat, non repudiandae dignissimos
            error natus pariatur nobis temporibus voluptatem. Molestiae eligendi
            labore repellat neque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sapiente, sint alias dolorem quasi ex mollitia
            cumque natus tempora quaerat quam eligendi perferendis autem
            obcaecati ea deleniti fugit atque vero sed?
          </Text>
        </Box>
      </Flex>
      <Flex
        w="100%"
        justifyContent="flex-end"
        display={{ base: "none", md: "flex" }}
      >
        <Button size="lg" bg="purple.700" color="white" borderRadius="0">
          Discover Now
        </Button>
      </Flex>
    </VStack>
  );
};

const Services = () => {
  return (
    <Stack
      direction="column"
      gap={{ base: "0", md: "40" }}
      py="12"
      px={{ base: "5", md: "60" }}
      bg="white"
      justifyContent="center"
      alignItems="center"
    >
      <Flex direction="column">
        <Flex>
          <Text color="gray.600" fontSize="lg">
            04
          </Text>
          <Text mx="2" color="gray.600" fontSize="lg">
            /
          </Text>
          <Text fontSize="lg" as="b">
            SERVICES
          </Text>
        </Flex>
        <Text py="8" fontSize={{ base: "2xl", md: "6xl" }} as="b">
          "Providing Visual Services."
        </Text>
        <Text my="6" fontSize={{ base: "lg", md: "4xl" }}>
          "We focused on turning idea into useful and amazing products. Love to
          see our service is match to clients."
        </Text>
      </Flex>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Post title="01." description="Graphic Desing." />
        <ExtendedPost />
        {posts.map((post) => (
          <Post {...post} />
        ))}
      </Flex>
    </Stack>
  );
};

export default Services;
