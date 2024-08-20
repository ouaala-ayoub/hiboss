import React from "react";
import { Box, Flex, Text, VStack, Image, Heading } from "@chakra-ui/react";
import { backgroundColor, secondary, secondary2 } from "../constants";

const expertiseItems = [
  {
    icon: "brain.svg",
    title: "Systèmes intelligents",
    description:
      "Face à vos problèmes les plus complexes, nous utilisons l'intelligence artificielle pour déployer des solutions de pointes.",
  },
  {
    icon: "responsive.png",
    title: "Applications mobiles et Web",
    description:
      "Nous concevons et développons des applications web et mobiles adaptées aux besoins de votre entreprise et aux défis de votre secteur.",
  },
  {
    icon: "cloud.png",
    title: "Services numériques",
    description:
      "Pubsilson créera et maintiendra tous vos services numériques. Nous ferons de votre transformation numérique un beau voyage.",
  },
  {
    icon: "software_design.png",
    title: "Conception sur mesure",
    description:
      "Nous créons votre propre design personnalisé à vos exigences et vision. Une réalisation spécifique, unique et original.",
  },
];

const ExpertiseSection = () => {
  return (
    <Box id="services" bg={backgroundColor} py={10} px={5} textAlign="center">
      <Heading color={secondary} fontSize={{ base: "2xl", md: "5xl" }} mb={4}>
        Notre expertise
      </Heading>
      <Text
        color={secondary2}
        mb={10}
        fontSize="md"
        w={{ base: "100%", md: "50%" }}
        mx="auto"
        textAlign="center"
      >
        Chez Hi Boss, nous relevons chaque défi pour concevoir la solution
        idéale que vous méritez. Notre expertise allie savoir-faire technique et
        recherche scientifique pour vous offrir le meilleur.
      </Text>

      <Flex justify="space-around" wrap="wrap">
        {expertiseItems.map((item, index) => (
          <VStack
            key={index}
            spacing={3}
            w={{ base: "100%", md: "22%" }}
            mb={6}
          >
            <Image src={item.icon} alt={item.title} boxSize="100px" />
            <Box h={1}></Box>
            <Text fontWeight="bold" fontSize="lg" color="#7e3c21">
              {item.title}
            </Text>
            <Text color="#7e3c21" textAlign="center" fontSize="sm">
              {item.description}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
};

export default ExpertiseSection;
