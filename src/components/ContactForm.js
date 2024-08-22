import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  Icon,
} from "@chakra-ui/react";
import { backgroundColor, primary, secondary, secondary2 } from "../constants";
import InformativeCard from "./InformativeCard";
import { MdOutlineAlternateEmail , MdPhone ,MdLocationOn } from "react-icons/md";



const ContactForm = () => {
  return (
    <Box
    id="contact"
      bg={backgroundColor}
      px={{ md: "250px", base: "10px" }}
      py={20}
      borderRadius="md"
    >
      <Flex justify="center" mb={4}>
        <Heading as="h1" color={secondary} fontSize="4xl" fontWeight="bold">
          Contactez-nous
        </Heading>
      </Flex>
      <Text textAlign="center" mb={8} color={"#7e3c21"}>
        Entrez vos coordonnées, nous vous contacterons pour répondre à vos
        besoins.
      </Text>

      <Flex justify="space-between" mb={8} wrap="wrap" spacing={2}>
        <InformativeCard
          content={"hiboss.contact@gmail.com"}
          icon={MdOutlineAlternateEmail}
        />
        <InformativeCard content={"0658729171"} icon={MdPhone} />
        <InformativeCard
          content={
            "Todo address"
          }
          icon={MdLocationOn}
        />
      </Flex>
      <Box bg="white" p={8} borderRadius="md" boxShadow="xl">
        <form>
          <>
            <Text>Votre Nom</Text>
            <Input mb={2} size="lg" borderColor="gray.300" />
          </>
          <>
            <Text>Votre e-mail</Text>
            <Input mb={2} size="lg" borderColor="gray.300" />
          </>
          <>
            <Text>Laissez un commentaire...</Text>
            <Textarea mb={4} size="lg" borderColor="gray.300" />
          </>
          <Button bg={secondary} size="lg" w="100%" color={'white'} _hover={{bg: secondary2}}>
            Envoyer
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
