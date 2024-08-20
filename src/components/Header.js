import React from 'react';
import { Box, Flex, Text, HStack, Link, IconButton, useDisclosure, Menu, MenuButton, MenuList, MenuItem, Button, Image, VStack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { secondary } from '../constants'; // Assuming secondary color is defined in constants
import { RiFileWordLine } from 'react-icons/ri';
import { BiGlobe, BiWorld } from 'react-icons/bi';
import { HashLink } from 'react-router-hash-link';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textHover = { color: secondary }; // Color for desktop hover
  //todo fix the mobile hover
  const textHoverMobile = { bg: secondary }; // Background color for mobile hover

  return (
    <Box as="header" bg="white" color="black" px={4} py={3} boxShadow="sm" position={'sticky'} top={0} zIndex={999}>
      <Flex alignItems="center" justifyContent="space-between" position="relative">
        {/* Title on the Left */}
        <Box p={"10px"} align={'left'} >
        <Text  fontSize="3xl" fontWeight="bold">
          Hi Boss
        </Text>
        <Text fontSize="sm">The future</Text>
        </Box>

        {/* Navigation Links centered */}
        <HStack
          spacing={8}
          alignItems="center"
          display={{ base: 'none', md: 'flex' }}
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
        >
          <Link smooth href="#home" _hover={textHover}>Acceuil</Link>
          <Link smooth href="#services" _hover={textHover}>Services</Link>
          <Link smooth href="#contact" _hover={textHover}>Contact</Link>
          <Link smooth href="#about" _hover={textHover}>À propos</Link>
        </HStack>

        {/* Language Menu on the Right */}
        <HStack spacing={4} alignItems="center">
          <Menu>
            <MenuButton as={Button} bg='none' rightIcon={<ChevronDownIcon />}>
              <BiGlobe/>
            </MenuButton>
            <MenuList>
              <MenuItem icon={<Image src='US.svg' boxSize={8} ></Image>} >English</MenuItem>
              <MenuItem icon={<Image src='FR.svg' boxSize={8} ></Image>} >Francais</MenuItem>
              {/* <MenuItem>Español</MenuItem> */}
              {/* Add more languages here */}
            </MenuList>
          </Menu>

          {/* Mobile Menu Button */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </HStack>
      </Flex>

      {/* Mobile Navigation Links */}
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }} w="100%">
          <Flex direction="column" alignItems="center">
            <HashLink smooth to="#home" py={2} _hover={textHoverMobile}>Acceuil</HashLink>
            <HashLink smooth to="#services" py={2} _hover={textHoverMobile}>Services</HashLink>
            <HashLink smooth to="#contact" py={2} _hover={textHoverMobile}>Contact</HashLink>
            <HashLink smooth to="#about" py={2} _hover={textHoverMobile}>À propos</HashLink>
          </Flex>
        </Box>
      ) : null}
    </Box>
  );
}

export default Header;
