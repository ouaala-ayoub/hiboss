import React from "react";
import { Box, Flex, Text, Image, Heading, Link } from "@chakra-ui/react";
import { primary } from "../constants";

const ProjectTrustSection = () => {
  return (
    <Box bg="white" px={{ base: 4, md: 8 }} py={{ base: 8, md: 16 }}>
      <Flex justify="space-between" align="center" wrap="wrap">
        {/* Text Section */}
        <Box
          w={{ base: "100%", md: "45%" }}
          textAlign={{ base: "center", md: "left" }}
          ml={{ base: 0, md: 16 }}  // Adds margin to the left on medium and larger screens
        >
          <Flex align="center" justify={{ base: "center", md: "start" }} mb={4}>
            <Heading fontSize="3xl" color="black">
              Faites-nous confiance pour réussir vos projets.
            </Heading>
          </Flex>
          <Text color="gray.500" fontSize="lg" mb={4}>
          Nous nous assurerons de trouver une solution à la fois satisfaisante et efficace.
          </Text>
          <Link href="#" color={primary} fontWeight="bold" fontSize="lg">
            Contactez Nous &rarr;
          </Link>
        </Box>

        {/* Images Section */}
        <Box w={{ base: "100%", md: "50%" }} mt={{ base: 8, md: 0 }}>
          <Image
            src="team.png"
            alt="Team"
            boxSize={{ base: "100%", md: "80%" }} // Adjusts the size to fit better
            objectFit="contain" // Ensures the image scales without distortion
            mx="auto" // Centers the image horizontally
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProjectTrustSection;
