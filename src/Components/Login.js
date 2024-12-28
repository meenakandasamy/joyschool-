import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

function App() {
  return (
    <Box p={5}>
      <Text fontSize="xl" mb={4}>
        Welcome to Chakra UI!
      </Text>
      <Button colorScheme="teal" size="lg">
        Click Me
      </Button>
    </Box>
  );
}

export default App;