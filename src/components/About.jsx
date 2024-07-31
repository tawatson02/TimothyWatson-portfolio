import React from 'react';
import { Box, Heading, Text, Stack, List, Badge, ListItem, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} bg={'#343942'} mx={"auto"} p={8} textAlign={"center"} minH={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      
        <Heading as={motion.h3} size={"2xl"} mb={4} color={"#E2E8F0"} initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
          About Me
        </Heading>
        <Text mb={4} fontSize={'lg'} color={'white'}>
          Hello! I'm Tim, a passionate and dedicated web developer with a knack for building dynamic and responsive web applications. My journey in web development has equipped me with a diverse set of skills and a strong foundation in modern technologies. I thrive in collaborative environments and am always eager to take on new challenges.
        </Text>
        
          <Box width={'full'} textAlign={'left'}>
            <Heading as={"h4"} size={"lg"} mb={4} color={"#E2E8F0"}>
              Skills
            </Heading>
            <List spacing={4} mt={2}>
              <ListItem color={'white'}>
              <Badge bg={'#9F977F'} mr={2}>Front-End Development:</Badge>
                 Proficient in HTML, CSS, JavaScript, and modern frameworks like React.
              </ListItem>
              <ListItem color={'white'}>
              <Badge bg={'#9F977F'} mr={2}>Back-End Development:</Badge>
                 Experienced with Node.js, Express.js, and PostgreSQL.
              </ListItem>
              <ListItem color={'white'}>
              <Badge bg={'#9F977F'} mr={2}>Full-Stack Development:</Badge>
                 Comfortable with the MERN stack, including MongoDB and GraphQL.
              </ListItem>
              <ListItem color={'white'}>
              <Badge bg={'#9F977F'} mr={2}>Styling and Design:</Badge>
                 Skilled in using Tailwind CSS, Chakra UI, and CSS-in-JS libraries for creating polished and responsive UIs.
              </ListItem>
              <ListItem color={'white'}>
              <Badge bg={'#9F977F'} mr={2}>Deployment and Version Control:</Badge>
                 Proficient with Git, GitHub, and deploying applications on platforms like Render and Netlify.
              </ListItem>
            </List>
          </Box>
        
      
    </Box>
  );
};

export default About;