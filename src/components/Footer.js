import React from 'react';
import { Box, Flex, Text, Link, Icon, VStack } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box id='about' bg="gray.800" color="white" py={10}>
      <Flex
        maxW="1200px"
        mx="auto"
        justify="space-between"
        align="center"
        direction={{ base: 'column', md: 'row' }}
        px={4}
      >
        {/* Left Section */}
        <VStack align="center" spacing={4} mb={{ base: 6, md: 0 }} flex={1}>
          <Text fontSize="lg" fontWeight="bold">
            Hi Boss
          </Text>
          <Text fontSize="sm">The future</Text>
          <Text fontSize="sm">
            Hi Boss conçoit et développe des applications et des services destinés aux entreprises comme au grand public.
          </Text>
        </VStack>

        {/* Middle Section */}
        <VStack align="center" spacing={2} mb={{ base: 6, md: 0 }} flex={1}>
          <Text fontWeight="bold">Nous contacter</Text>
          <Text fontSize="sm">0658729171</Text>
          <Link fontSize="sm" href="mailto:hiboss.contact@gmail.com">
          hiboss.contact@gmail.com
          </Link>
          <Text fontSize="sm">Todo Address</Text>
        </VStack>

        {/* Right Section */}
        <VStack align="center" spacing={4} flex={0.5}>
          <Flex gap={4}>
            {/* ToDo */}
            <Link href="#" isExternal>
              <Icon as={FaFacebookF} boxSize={5} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaInstagram} boxSize={5} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaLinkedinIn} boxSize={5} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaTwitter} boxSize={5} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaYoutube} boxSize={5} />
            </Link>
          </Flex>
          <Text fontSize="sm">Hi Boss, Tous droits réservés 2024</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
