import { FiInstagram, FiDribbble, FiLinkedin } from "react-icons/fi";
import { Flex } from "@chakra-ui/react";

const SvgLabel = () => {
  return (
    <Flex w="100%" justifyContent="space-evenly">
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
    </Flex>
  );
};

export default SvgLabel;
