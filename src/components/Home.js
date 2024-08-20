import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { backgroundColor } from "../constants";

const HomeComponent = ({ color, textColor }) => {
  return (
    <Box
      id="home"
      position="relative"
      bg={backgroundColor}
      color={textColor}
      overflow="hidden"
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 16 }}
     
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
      >
        {/* Left side: Text content */}
        <Box mw={{ base: "100%", md: "50%" }} mb={{ base: 8, md: 0 }} ml={{ base: 0, md: 16 }}>
          <Heading as="h1" size="xl" mb={4}>
            Votre Premier choix vers le digital
          </Heading>
          <Text fontSize="lg">
            Nous concevons et développons des applications et des services
            destinés aux entreprises comme au grand public
          </Text>
        </Box>

        {/* Right side: Placeholder for the graphic */}
        <Box
          h={{ base: "400px", md: "500px" }} // Increase the height
          w={{ base: "100%", md: "60%" }} // Optionally, increase the width for larger screens
          position="relative"
        >
          {/* Image Component with Adjustments */}
          <Image
            src="dev_image.png"
            alt="Development Illustration"
            objectFit="contain" // Ensure the image scales correctly
            objectPosition="center" // Center the image
            h="100%"
            w="100%"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeComponent;
