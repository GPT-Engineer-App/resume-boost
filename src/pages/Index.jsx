import { Container, Text, VStack, Heading, Button, Box, Input, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const toast = useToast();

  const handleGenerateResume = () => {
    // Placeholder for AI-powered resume generation logic
    toast({
      title: "Resume Generated",
      description: "Your resume has been tailored to the job description.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">AI-Powered Resume Builder</Heading>
        <Box width="100%">
          <Text mb={2}>Enter your resume:</Text>
          <Textarea value={resume} onChange={(e) => setResume(e.target.value)} placeholder="Paste your resume here..." size="sm" />
        </Box>
        <Box width="100%">
          <Text mb={2}>Enter the job description:</Text>
          <Textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} placeholder="Paste the job description here..." size="sm" />
        </Box>
        <Button colorScheme="teal" size="md" onClick={handleGenerateResume}>Generate Tailored Resume</Button>
      </VStack>
    </Container>
  );
};

export default Index;