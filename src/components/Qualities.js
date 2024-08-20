import { Box, Center, Flex, Image, Text, VStack } from "@chakra-ui/react";
import QualitiesComponent from "./Details";

const Qualities = () => {
  return (
    <Center w="100%" p={"50px"}>
      <VStack>
      <Flex direction="column" align="center" textAlign="center">
        <Image src="hi_boss.jpg" mb={4} h={'70px'}  w={"300px"}/>
        <Text fontSize="lg" w="100%" maxW="50%">
          L'équipe de Hi Boss s'efforce chaque jour de faire de son mieux pour s’adapter à l'évolution constante de la technologie et répondre aux besoins des clients.
        </Text>
      </Flex>
      <Box h={'30px'} />
      <QualitiesComponent/>
      </VStack>
      
    </Center>
  );
};

export default Qualities;
