import React from 'react';
import { Box, Flex, Link, Spacer, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <Box bg={'#343942'} p={4}> 
      <Flex maxW="1200px" mx="auto" align="center">
        <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
          
        </Link>
        <Spacer />
        <Flex gap={4}>
          <Link as={RouterLink} to="/about" color="#9F977F">
            About Me
          </Link>
          <Link as={RouterLink} to="/projects" color="#9F977F">
            Projects
          </Link>
          <Link as={RouterLink} to="/contact" color="#9F977F">
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;