import React from 'react';
import { Box, Heading, Text, Stack, List, ListItem, Divider, Button, Center } from '@chakra-ui/react';

const Resume = () => {
  return (
    <Box bg="#f5f5f5" p={6} maxW="900px" mx="auto" borderRadius="md" boxShadow="md">
      <Center mb={6}>
        <Heading as="h1" size="xl" mb={2}>
          Timothy Watson
        </Heading>
      </Center>

      <Box bg="#ffffff" p={4} borderRadius="md" boxShadow="md">
        <Heading as="h2" size="lg" mb={4}>
          Contact Information
        </Heading>
        <Text mb={2}>704 3rd Ave S, Amory, MS 38821</Text>
        <Text mb={2}>(662) 315-7271</Text>
        <Text mb={4}>ta_watson@live.com</Text>

        <Heading as="h2" size="lg" mb={4}>
          Profile
        </Heading>
        <Text mb={4}>
          Aspiring full-stack developer with a strong background in sales and technical support at AT&T. Currently completing a bootcamp in full-stack web development, with hands-on experience in building web applications using Node.js, React, GraphQL, and MongoDB. Passionate about creating user-friendly, responsive, and interactive web applications.
        </Text>

        <Heading as="h2" size="lg" mb={4}>
          Skills
        </Heading>
        <List spacing={2} mb={4}>
          <ListItem>Languages: JavaScript, HTML, CSS</ListItem>
          <ListItem>Frameworks/Libraries: Node.js, React, Express.js, Tailwind CSS, Chakra UI, Bootstrap</ListItem>
          <ListItem>Databases: PostgreSQL, MongoDB, Mongoose</ListItem>
          <ListItem>Tools: Git, Inquirer, Webpack, Vite, Apollo Server, GraphQL</ListItem>
          <ListItem>Other: JWT Authentication, PWA Development, RESTful APIs, Responsive Design</ListItem>
        </List>

        <Heading as="h2" size="lg" mb={4}>
          Projects
        </Heading>
        <Stack spacing={4} mb={4}>
          <Box p={4} bg="#eeeeee" borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Vegas Poker Pulse
            </Heading>
            <Text mb={2}>
              Built using React, MongoDB, GraphQL, and Chakra UI for styling. Developed a web application for real-time poker statistics and player tracking. Enabled users to view detailed event information, including dates, times, and special features. Implemented features for scheduling and managing poker calendars effortlessly. Included real-time updates, personalized schedules, and interactive filters to ensure users never miss out on the action.
            </Text>
          </Box>
          <Box p={4} bg="#eeeeee" borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Command-line Employee Database Application
            </Heading>
            <Text>
              Utilized Node.js, Inquirer, and PostgreSQL to manage company employee data. Developed functions for viewing, adding, updating, and deleting employee information.
            </Text>
          </Box>
        </Stack>

        <Heading as="h2" size="lg" mb={4}>
          Notable Coursework and Achievements
        </Heading>
        <Text mb={4}>
          Successfully resolved various project-specific issues, including module installation and database schema corrections. Actively participated in a team project to create a MERN stack single-page application, implementing GraphQL, JWT authentication, and polished UI design. Developed expertise in Tailwind CSS and implemented various plugins for enhanced styling.
        </Text>

        <Heading as="h2" size="lg" mb={4}>
          Experience
        </Heading>
        <Stack spacing={4} mb={4}>
          <Box p={4} bg="#eeeeee" borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              AT&T, Amory, MS - Retail Sales Associate
            </Heading>
            <Text mb={2}>
              August 2019 - July 2024
            </Text>
            <Text>
              Addressed and resolved technical issues for customers, providing exceptional service and support. Leveraged technical knowledge to improve sales and customer satisfaction.
            </Text>
          </Box>
          <Box p={4} bg="#eeeeee" borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              WoodmenLife, Amory, MS - Sales Representative
            </Heading>
            <Text mb={2}>
              October 2018 - August 2019
            </Text>
            <Text>
              Provided outstanding customer service. Insurance, IRAs, and Investments. Cold calling. Identified sales opportunities and acted on leads. Set up appointments with clients. Answered product and service related questions. Independent operator.
            </Text>
          </Box>
        </Stack>

        <Heading as="h2" size="lg" mb={4}>
          Education
        </Heading>
        <Stack spacing={4}>
          <Box p={4} bg="#eeeeee" borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Case Western Reserve University, Online
            </Heading>
            <Text mb={2}>
              February 2024 - Present
            </Text>
            <Text>
              Full Stack Web Development Certificate
            </Text>
          </Box>
          <Box p={4} bg="#eeeeee" borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Itawamba Community College, Fulton, MS
            </Heading>
            <Text mb={2}>
              August 2010 - May 2013
            </Text>
            <Text>
              Associate in Associates of Arts
            </Text>
          </Box>
        </Stack>
      </Box>
      <Button
        as="a"
        href="src/assets/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        colorScheme="#353839"
        color="#9F977F"
        mt={4}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default Resume;
