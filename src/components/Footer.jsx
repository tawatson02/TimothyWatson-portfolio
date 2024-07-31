import React from 'react';
import { Box, Flex, Link, IconButton, Divider, Center } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <Box bg="#343942" color="white" py={6} >
      <Divider mb={4} borderColor={'#9F977F'}/>
        <Center>
        <Flex gap={4}>
          <Link href="https://github.com/tawatson02" isExternal>
          <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              color="#9F977F"
              _hover={{ bg: 'gray.600', color: 'brand.blue' }}
              size={'lg'}
            />
          </Link>
          <Link href="https://linkedin.com" isExternal>
          <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              color="#9F977F"
              _hover={{ bg: 'gray.600', color: 'brand.blue' }}
              size={'lg'}
            />
          </Link>
        </Flex>
        </Center>
    </Box>
  );
};

export default Footer;