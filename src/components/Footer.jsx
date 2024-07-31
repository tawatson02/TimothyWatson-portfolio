import React from 'react';
import { Box, Flex, Link, IconButton, Center } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <Box bg="#343942" color="white" py={4} >
      <Flex  mx="auto"  justify="space-between">
        
        <Flex gap={2}>
          <Link href="https://github.com" isExternal>
          <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              color="#9F977F"
              _hover={{ bg: 'gray.600', color: 'brand.blue' }}
            />
          </Link>
          <Link href="https://linkedin.com" isExternal>
          <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              color="#9F977F"
              _hover={{ bg: 'gray.600', color: 'brand.blue' }}
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;