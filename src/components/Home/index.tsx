import {
  Grid,
  GridItem,
  Divider,
  Image,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";

interface HomeProps {
  title: string;
  description: string;
}

const Home = ({ title, description }: HomeProps) => (
  <Grid
    h="100vh"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(12, 1fr)"
    gap={1}
  >
    <GridItem rowSpan={2} colSpan={1} bg="brand.700">
      <Box position="relative" top="50%">
        <Image
          h={80}
          w="100%"
          borderRadius={5}
          src="https://e0.pxfuel.com/wallpapers/33/172/desktop-wallpaper-map-curves-dark-pattern-background-bw-black-and-white-liquid-art.jpg"
        />
      </Box>
    </GridItem>
    <GridItem rowSpan={2} colSpan={8} bg="brand.700">
      <Flex alignItems="center" flexDirection="column" position="relative">
        <Heading
          mt="24"
          as="h1"
          fontSize={{ base: "2xl", md: "9xl" }}
          noOfLines={1}
          w="90%"
          fontFamily="Hanuman, serif"
          fontWeight="200"
        >
          {title}
        </Heading>
        <Heading
          as="p"
          fontSize={{ base: "2xl", md: "6xl" }}
          noOfLines={0}
          mt="16"
          maxW="82%"
          textAlign="start"
          fontFamily="Fira sans, sans-serif"
          fontWeight="100"
        >
          {description}
        </Heading>
        <Divider
          borderColor="black"
          maxW="85%"
          my="16"
          borderWidth="1px"
          borderRadius="lg"
        />
      </Flex>
    </GridItem>
    <GridItem rowSpan={2} colSpan={3} bg="brand.700">
      <Box position="relative" top="50%">
        <Image
          h={80}
          w="100%"
          borderRadius={5}
          src="https://e0.pxfuel.com/wallpapers/33/172/desktop-wallpaper-map-curves-dark-pattern-background-bw-black-and-white-liquid-art.jpg"
        />
      </Box>
    </GridItem>
  </Grid>
);
export default Home;
