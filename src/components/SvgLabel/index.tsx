import { FiInstagram, FiDribbble, FiLinkedin } from "react-icons/fi";
import { Text, Flex } from "@chakra-ui/react";

type SvgLabelProps = {
  variant: string;
  label: string;
};

const SvgLabel = ({ variant, label }: SvgLabelProps) => {
  return (
    <>
      <Flex w="100%" justifyContent="space-evenly">
        <Flex alignItems="center">
          <Flex
            w="50px"
            h="50px"
            p="1"
            borderRadius={"full"}
            bg="#613fe5"
            alignItems="center"
            justifyContent="center"
          >
            <FiInstagram color="white" size={30} />
          </Flex>
          <Text
            ml="3"
            fontSize="1.7rem"
            fontFamily="Fira sans, sans-serif"
            fontWeight="100"
          >
            Instagram
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Flex
            w="50px"
            h="50px"
            p="1"
            borderRadius={"full"}
            bg="#613fe5"
            alignItems="center"
            justifyContent="center"
          >
            <FiDribbble color="white" size={30} />
          </Flex>
          <Text
            ml="3"
            fontSize="1.7rem"
            fontFamily="Fira sans, sans-serif"
            fontWeight="100"
          >
            Dribble
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Flex
            w="50px"
            h="50px"
            p="1"
            borderRadius={"full"}
            bg="#613fe5"
            alignItems="center"
            justifyContent="center"
          >
            <FiLinkedin color="white" size={30} />
          </Flex>
          <Text
            ml="3"
            fontSize="1.7rem"
            fontFamily="Fira sans, sans-serif"
            fontWeight="100"
          >
            Linkedin
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default SvgLabel;
