import React from 'react';
import { Box, Heading, Text, Stack, List, ListItem, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} bg={'#343942'} mx={"auto"} p={4} textAlign={"center"}>
      <Box color={'#9F977F'}>
        <Heading as={"h3"} size={"lg"} mb={4}>
          About Me
        </Heading>
        <Text mb={4}>
          Hello! I'm Tim, a passionate and dedicated web developer with a knack for building dynamic and responsive web applications. My journey in web development has equipped me with a diverse set of skills and a strong foundation in modern technologies. I thrive in collaborative environments and am always eager to take on new challenges.
        </Text>
        <Stack spacing={4}>
          <Box>
            <Heading as={"h4"} size={"md"} mb={2}>
              Skills
            </Heading>
            <List spacing={2} mt={2}>
              <ListItem>Front-End Development: Proficient in HTML, CSS, JavaScript, and modern frameworks like React.
              </ListItem>
              <ListItem>Back-End Development: Experienced with Node.js, Express.js, and PostgreSQL.
              </ListItem>
              <ListItem>Full-Stack Development: Comfortable with the MERN stack, including MongoDB and GraphQL.
              </ListItem>
              <ListItem>Styling and Design: Skilled in using Tailwind CSS, Chakra UI, and CSS-in-JS libraries for creating polished and responsive UIs.
              </ListItem>
              <ListItem>Deployment and Version Control: Proficient with Git, GitHub, and deploying applications on platforms like Render and Netlify.
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default About;