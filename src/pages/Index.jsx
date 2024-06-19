import { Container, Text, VStack, Heading, Button, Box, Input, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";

const Index = () => {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
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

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const text = await pdfDoc.getTextContent();
      setResume(text.items.map(item => item.str).join(" "));
      // Here you can add logic to parse the text and populate the predefined fields
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">AI-Powered Resume Builder</Heading>
        <Box width="100%">
          <Text mb={2}>Upload your resume (PDF):</Text>
          <Input type="file" accept="application/pdf" onChange={handleFileUpload} />
        </Box>
        <Box width="100%">
          <Text mb={2}>Or enter your resume manually:</Text>
          <Textarea value={resume} onChange={(e) => setResume(e.target.value)} placeholder="Paste your resume here..." size="sm" />
        </Box>
        <Box width="100%">
          <Text mb={2}>Name:</Text>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" size="sm" />
        </Box>
        <Box width="100%">
          <Text mb={2}>Email:</Text>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" size="sm" />
        </Box>
        <Box width="100%">
          <Text mb={2}>Phone:</Text>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" size="sm" />
        </Box>
        <Box width="100%">
          <Text mb={2}>Education:</Text>
          <Textarea value={education} onChange={(e) => setEducation(e.target.value)} placeholder="Enter your education details" size="sm" />
        </Box>
        <Box width="100%">
          <Text mb={2}>Experience:</Text>
          <Textarea value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="Enter your experience details" size="sm" />
        </Box>
        <Box width="100%">
          <Text mb={2}>Skills:</Text>
          <Textarea value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Enter your skills" size="sm" />
        </Box>
        <Button colorScheme="teal" size="md" onClick={handleGenerateResume}>Generate Tailored Resume</Button>
      </VStack>
    </Container>
  );
};

export default Index;