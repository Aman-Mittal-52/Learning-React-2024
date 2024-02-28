import { Image, Divider, Button, Center,Text, Badge, Heading, Box } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
function App() {

  return (
    <Box border={'2px solid '} borderRadius={7} m={'30px auto'} w={"500px"}>
      <Box p={7} bg={'purple.300'}>
        <Image boxSize={'200px'} m={'auto'} src='https://masai-website-images.s3.ap-south-1.amazonaws.com/full_stack1_329d6b5595.png' />
      </Box>
      <Box p={6}>
        <Heading m={3}>Full Stack Web Development</Heading>
        <Badge colorScheme='cyan' p={4} borderRadius={'full'} w={'90%'} fontSize={15}>
          For 12th, Diploma & College Graduates,
          <br />
          18-28 years
        </Badge>
        <Divider w={'80%'} m={'auto'} />
        <Box>
          <Text fontWeight={600} size='sm'><CheckCircleIcon /> Become job-ready in 30 weeks</Text>
          <Text fontWeight={600} size='sm'><CheckCircleIcon /> Opportunities: Full Stack Developer, Software Engineer & much more.</Text>
          <Text fontWeight={600} size='sm'><CheckCircleIcon /> 100% live learning with expert instructors.</Text>
          <Text fontWeight={600} size='sm'><CheckCircleIcon /> Pay After Placement</Text>
        </Box>
        <center>
          <Button fontSize={'lg'} w={'50%'} mt={5} px={8} colorScheme='red'>Veiw Details</Button>
        </center>
      </Box>
    </Box>
  )
}
export default App
