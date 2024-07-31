import React from 'react';
import { Box, Heading, Text, SimpleGrid, Link, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Flavor Saver',
    description: 'Welcome to Flavor Saver, your go-to recipe database app designed to help you save, share, and explore delicious recipes with ease.',
    imageUrl: "src/assets/1000114952.png",
    hoverImageUrl: 'src/assets/screenshot_2024-06-05_at_5.46.07_pm_720.png',
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
  },
  {
    title: 'Project 4',
    description: 'Description of project 2',
    imageUrl: '/path/to/image2.jpg',
    link: '#'
  }
];

const Projects = () => {
  return (
    <Box bg={'#343942'} mx="auto" p={4}>
      <Heading color={'#9F977F'} as="h3" size="lg" mb={4} textAlign={"center"}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={6} justifyContent={"center"}>
        {projects.map((project, index) => (
          <Box as={motion.div}
          whileHover={{ scale: 1.05 }}
          key={index}
          bg={'#9F977F'}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          maxW={'250px'}
          maxH={'350px'}
          m="auto"
          >
            <Box position="relative">
            <motion.div
              whileHover={{ opacity: 0 }}
              style={{ position: 'relative' }}
            >
            <Image src={project.imageUrl}
              alt={project.title}
              width="100%"
              height="auto"
              objectFit="cover"
              display="block"/>
            <Image
                src={project.hoverImageUrl}
                alt={project.title}
                width="100%"
                height="auto"
                display="block"
                position="absolute"
                top="0"
                left="0"
                objectFit="cover"
                transition="opacity 0.3s ease"
                opacity="0"
                _groupHover={{ opacity: 1 }}
              />
              
            </motion.div>
            </Box>
            <Box p={4}>
              <Heading as="h4" size="sm">
                {project.title}
              </Heading>
              <Text mt={2} fontSize={'xx-small'}>{project.description}</Text>
              <Link href={project.link} color="#343942" display="block" fontSize={'x-small'}>
                Check it out!
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      
    </Box>
  );
};

export default Projects;