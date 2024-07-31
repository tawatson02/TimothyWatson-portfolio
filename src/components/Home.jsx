import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/pexels-fwstudio-33348-164005.jpg';

const Home = () => {
  return (
    <Box 
    bgImage={`url(${backgroundImage})`} 
    bgSize={'cover'}
    bgPos={'center'}
    filter={'grayscale(100%)'}
    textAlign={"center"} 
    py={20} 
    px={6}
    minH={'100vh'}
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'}>
      <Box 
      as={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      bg="rgba(0, 0, 0, 0.7)"
      p={10}
      borderRadius="md"
      >
      <Heading color={'white'}as={"h2"} size={"xl"}  mb={4}>
        Hi, I'm Tim!
      </Heading>
      <Text color={'white'} fontSize={'xl'} mb={6}>
        I'm a full-stack developer specializing in modern web development.
      </Text>
      <Button
        color={'white'}
        as={RouterLink}
        to="/projects"
        colorScheme={"white"}
        variant={"outline"}
        size={'lg'}
        mt={10}
      >
        View My Projects
      </Button>
      </Box>
    </Box>
  );
};

export default Home;