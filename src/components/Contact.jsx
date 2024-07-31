import React from 'react';
import { Box, Card, CardHeader, CardBody, CardFooter, Heading, Text, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form } from 'react-router-dom';

const Contact = () => {
  const [formState, setFormState] = useState({
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormState({ ...formState, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rmv9inm', 'template_b74yn4l', e.target, 'YLY-LbqlBfBFsGoQ9')
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
    }, (error) => {
      console.log(error.text);
      alert("Failed to send message. Please try again later.");
    });
    setFormState({email: '', message: ''});
  };
  return (
    <Box bg={"#343942"} mx="auto" p={4}>
      <Card bg={'#9F977F'}>
      <CardHeader as="h3" fontSize="xl" fontWeight={'bold'}>
        Let's Connect
      </CardHeader>
      <CardBody>
        <Text>I'm always open to new opportunities and collaborations.  If you’re looking for a developer with a passion for learning and growth, feel free to reach out!</Text>
        <Form onSubmit={handleSubmit}>
      <FormControl id="email" mb={4} isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={formState.email} onChange={handleChange} />
      </FormControl>
      <FormControl id="message" mb={4} isRequired>
        <FormLabel>Message</FormLabel>
        <Textarea value={formState.message} onChange={handleChange}/>
      </FormControl>
      <Button bg={'#343942'} color={'#9F977F'} type="submit">
        Send Message
      </Button>
      </Form>
      </CardBody>
      </Card>
    </Box>
  );
};

export default Contact;