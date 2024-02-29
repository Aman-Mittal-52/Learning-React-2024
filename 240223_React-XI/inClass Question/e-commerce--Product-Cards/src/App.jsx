import { Box, Image, Text, Heading, SimpleGrid, Container } from '@chakra-ui/react'
import './App.css'

function App() {

  const breakpoints = {
    base: 1, // 0px
    sm: 2, // ~480px. em is a relative unit and is dependant on the font size.
    md: 3 // ~1536px
  };
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3  ,lg:4}} gap={3}>
      <Box border={'3px solid red'} m={30} boxShadow='outline' p='6' rounded='md'>
        <Image src='https://placehold.co/400x100' />
        <Heading>Product Card</Heading>
      </Box>
      <Box bg='purple' m={30} boxShadow='outline' p='6' rounded='md'>
        <Image src='https://placehold.co/400x100' />
        <Heading>Product Card</Heading>
      </Box>
      <Box bg='pink' m={30} boxShadow='outline' p='6' rounded='md'>
        <Image src='https://placehold.co/400x100' />
        <Heading>Product Card</Heading>
      </Box>
    </SimpleGrid>
  )
}

export default App
