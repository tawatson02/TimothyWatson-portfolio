import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box bg={'gray.900'}textAlign={"center"} py={10} px={6}>
      <Heading color={'white'}as={"h2"} size={"xl"} mt={6} mb={2}>
        Hi, I'm Adam!
      </Heading>
      <Text color={'white'}>
        I'm a full-stack developer specializing in modern web development.
      </Text>
      <Button
        color={'white'}
        as={RouterLink}
        to="/projects"
        colorScheme={"white"}
        variant={"outline"}
        mt={10}
      >
        View My Projects
      </Button>
    </Box>
  );
};

export default Home;