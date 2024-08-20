import { Box, Flex, Text, VStack, SimpleGrid, Image, Divider, Stack } from "@chakra-ui/react";
import { primary, primary2, secondary } from "../constants";

const qualities = [
  {
    icon: 'creative.svg',
    title: "Créatif",
    description: "Combiner l'expertise technique avec des méthodologies validées.",
  },
  {
    icon: 'operational.svg',
    title: "Opérationnel",
    description: "Nous vous garantissons l’efficacité, la qualité et la satisfaction.",
  },
  {
    icon: 'professional.svg',
    title: "Professionnel",
    description: "Nous traitons vos projets avec le plus grand professionnalisme et intégrité.",
  },
  {
    icon: "simple.svg",
    title: "Simple",
    description: "Des solutions qui rendent l’univers numérique agréable.",
  },
  {
    icon: 'light_bulb.svg',
    title: "Innovant",
    description: "Des solutions qui s'adaptent aux technologies de pointe.",
  },
  {
    icon: "flexible.svg",
    title: "Flexible",
    description: "Des solutions qui peuvent être standard ou sur mesure.",
  },
];

const QualitiesComponent = () => {
  return (
    <Box w="70%" display="flex" justifyContent="center">
      <Stack direction="row" spacing={10} divider={<Divider orientation="vertical" borderColor="gray.300" />}>
        <VStack align="start" spacing={6}>
          {qualities.slice(0, qualities.length / 2).map((quality, index) => (
            <Flex key={index} align="start">
              <Image src={quality.icon} boxSize={16} mr={4} />
              <VStack align="start">
                <Text fontWeight="bold" fontSize="xl" color={secondary}>
                  {quality.title}
                </Text>
                <Text fontSize="md" fontWeight={'100'}>
                  {quality.description}
                </Text>
              </VStack>
            </Flex>
          ))}
        </VStack>

        <VStack align="start" spacing={6}>
          {qualities.slice(qualities.length / 2).map((quality, index) => (
            <Flex key={index} align="start">
              <Image src={quality.icon} boxSize={16} mr={4} />
              <VStack align="start">
                <Text fontWeight="bold" fontSize="xl" color={secondary}>
                  {quality.title}
                </Text>
                <Text fontSize="md" fontWeight={'100'}>
                  {quality.description}
                </Text>
              </VStack>
            </Flex>
          ))}
        </VStack>
      </Stack>
    </Box>
  );
};

export default QualitiesComponent;
