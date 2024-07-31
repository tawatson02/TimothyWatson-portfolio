import React from 'react';
import { Box, Heading, Text, SimpleGrid, IconButton, Link, Image, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Flavor Saver',
    description: 'Welcome to Flavor Saver, your go-to recipe database app designed to help you save, share, and explore delicious recipes with ease.',
    imageUrl: "src/assets/1000114952.png",
    link: 'https://github.com/tawatson02/flavor-saver'
  },
  {
    title: 'Poker Pulse',
    description: 'A companion app that allows players to manage their profiles, track tournament schedules, and receive real-time updates.',
    imageUrl: 'src/assets/Designer (2).png',
    link: 'https://github.com/andrewhamerly/flavor-saver'
  },
  {
    title: 'Movie Night',
    description: 'Our app generates a random movie and provides details like the title, poster, summary, and rating, along with streaming availability.',
    imageUrl: 'src/assets/Designer (4).png',
    link: 'https://github.com/tawatson02/movie-night'
  }
  
];

const Projects = () => {
  return (
    <Box bg={'#343942'} mx="auto" p={8} minH={'100vh'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Heading 
      as={motion.h3}
      color={'#E2E8F0'} 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1}}
      fontWeight={'extrabold'}
      fontSize={'x-large'}
      size="2x1" 
      mb={8} 
      textAlign={"center"}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={10} justifyContent={"center"} maxW={"1200px"}>
        {projects.map((project, index) => (
          <Box as={motion.div}
            whileHover={{ scale: 1.05 }}
            key={index}
            bg={'#9F977F'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            maxW={'300px'}
            m="auto"
          >


            <Image src={project.imageUrl}
              alt={project.title}
              width="100%"
              height="auto"
              objectFit="cover" />




            <Box p={6}>
              <Heading as="h4" size="md" mb={2} color={'#343942'}>
                {project.title}
              </Heading>
              <Text mt={4} fontSize={'sm'} color={'#343942'}>{project.description}</Text>
              <Link href={project.link} color="#3182ce" fontWeight={'bold'} isExternal>
              <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              color="#343942"
              _hover={{ bg: 'gray.600', color: 'brand.blue' }}
              size={'lg'}
            />
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

    </Box>
  );
};

export default Projects;