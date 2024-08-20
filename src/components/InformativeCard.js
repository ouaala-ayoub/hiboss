import { Flex, Text, Icon } from "@chakra-ui/react";
import { secondary } from "../constants";

const InformativeCard = ({ content, icon }) => {
  return (
    <Flex
      direction="column"
      align="center"
      bg="white"
      p={4}
      borderRadius="md"
      w={{ base: "100%", md: "30%" }}
      boxShadow="md" // Adds a subtle shadow
    >
      <Icon as={icon} w={8} h={8} color={secondary} />
      <Text mt={4} fontSize="md" fontWeight="500" textAlign="center">
        {content}
      </Text>
    </Flex>
  );
};

export default InformativeCard;
