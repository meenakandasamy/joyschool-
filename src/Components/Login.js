import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import student from "../Image/studentimage.jpg";

// Define reusable Card components
const Card = {
  Root: ({ children }) => (
    <Box
 width="auto"
      mx="auto"
      p={10}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      {children}
    </Box>
  ),
  Header: ({ children }) => (
    <Box  textAlign="center">
      <Text fontSize="2xl" fontWeight="bold">
        {children}
      </Text>
    </Box>
  ),
  Body: ({ children }) => <Stack spacing={4}>{children}</Stack>,
  Footer: ({ children }) => <Box mt={4}>{children}</Box>,
};

function Login() {
  return (
    <div >
        
        <div  style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card.Root>
        <Card.Header>Login</Card.Header>
        <Card.Body>
        <Box display="flex" alignItems="center">
            <Image src={student} alt="Student" style={{width:"150px",marginLeft:"2%"}} />
            <Box flex="1"style={{marginLeft:"5%"}}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>
              <FormControl id="password" isRequired mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your password" />
              </FormControl>
              <Card.Footer>
                <Button colorScheme="teal" size="lg" width="full">
                  Login
                </Button>
              </Card.Footer>
            </Box>
          </Box>
        </Card.Body>
      </Card.Root>
      </div>
    </div>
  );
}

export default Login;
