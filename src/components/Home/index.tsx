import { ArrowForwardIcon, ChatIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Grid,
  GridItem,
  Divider,
  Image,
  Box,
  Heading,
  Flex,
  Stack,
  Button,
} from "@chakra-ui/react";

type HomeProps = {
  title: string;
  description: string;
};

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
      <Flex
        alignItems="center"
        flexDirection="column"
        position="relative"
        top="10%"
      >
        <Stack
          bgPosition="inline"
          top="5%"
          flexDirection="-moz-initial"
          display="inline"
          align="justifyItems"
          fontFamily="Hanuman, serif"
        >
          <Button colorScheme="gray" variant="ghost">
            Our works
          </Button>
          <Button colorScheme="gray" variant="ghost">
            Services
          </Button>
          <Button colorScheme="gray" variant="ghost">
            Product
          </Button>
          <Button size="lg" colorScheme="purple" mt="24px">
            Get in touch
            <ArrowForwardIcon display="inline" w={5} h={10} color="white" />
          </Button>
        </Stack>
        <Heading
          as="h1"
          fontSize="9xl"
          noOfLines={1}
          w="90%"
          fontFamily="Hanuman, serif"
          fontWeight="200"
        >
          {title},
        </Heading>
        <Heading
          as="p"
          fontSize="4rem"
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
          borderColor="RGBA(0, 0, 0, 0.16)"
          maxW="85%"
          my="16"
          borderWidth="1px"
          borderRadius="lg"
        />
      </Flex>
      <GridItem>
        <ChatIcon
          display="inline"
          w={5}
          h={10}
          color="red.500"
          margin="-0.5%"
        />
        <text> contact us</text>
        <PhoneIcon
          display="inline"
          w={5}
          h={10}
          color="red.500"
          padding="-20"
        />
      </GridItem>
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
