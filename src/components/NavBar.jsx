import React from 'react';
import { Box, Flex, Link, Text, Spacer, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <Box bg={'#343942'} p={4} boxShadow={'md'}> 
      <Flex maxW="1200px" mx="auto" align="center">
        <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
        <Text as="span" fontSize="2xl" color="#9F977F">
            Timothy Watson
          </Text>
        </Link>
        <Spacer />
        <Flex gap={6}>
          <Link as={RouterLink} to="/about" color="white" fontSize={'lg'} _hover={{ color: '#9F977F' }}>
            About Me
          </Link>
          <Link as={RouterLink} to="/projects" color="white" fontSize={'lg'} _hover={{ color: '#9F977F' }}>
            Projects
          </Link>
          <Link as={RouterLink} to="/contact" color="white" fontSize={'lg'} _hover={{ color: '#9F977F' }}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;