import { useState } from 'react';
import {
  Button,
  Flex,
  Container,
  SimpleGrid,
  Center,
  Text,
  Grid,
  Input,
  Heading
} from '@chakra-ui/react';

function BMICalculator() {
  const [heightCM, setHeightCM] = useState("");
  const [weightKG, setWeightKG] = useState('');
  const [bmiValue, setBMIValue] = useState('');
  const [bmiStatus, setBMIStatus] = useState({ status: "", color: "" });
  const [showResult, setShowResult] = useState(false);

  function calculateBMI() {
    const height = heightCM / 100;
    const bmi = weightKG / (height * height);
    setBMIValue(bmi.toFixed(2));
    let status, color;
    if (bmi < 18.5) {
      status = "Underweight";
      color = "blue";
    } else if (bmi >= 18.5 && bmi < 25) {
      status = "Healthy";
      color = "green";
    } else {
      status = "Overweight";
      color = "red";
    }
    setBMIStatus({ status, color });
    setShowResult(true);
  }

  function resetCalculator() {
    setHeightCM('');
    setWeightKG('');
    setBMIValue('');
    setBMIStatus({ status: "", color: "" });
    setShowResult(false);
  }

  return (
    <Container maxW="lg" w={'70%'} m={'auto'}>
      <Center>
        <Heading as="h1" mb={6}>BMI Calculator</Heading>
      </Center>
      <SimpleGrid className='bmi-form' columns={2} spacing={4}>
        <Text fontWeight="bold" textAlign="center">Weight (kg)</Text>
        <Text fontWeight="bold" textAlign="center">Height (cm)</Text>
        <Input className='weight' type="number" value={weightKG} placeholder='Enter your weight in kilograms' onChange={(e) => setWeightKG(+e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
        <Input className='height' type="number" value={heightCM} placeholder='Enter your height in centimeters' onChange={(e) => setHeightCM(+e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
      </SimpleGrid>
      <Flex justifyContent="center" mt={6}>
        <Button onClick={calculateBMI} bg='lightgreen' borderRadius={'10px'} m='20' fontSize={20} border='none' color='#fff' p={20} mr={4} colorScheme="teal">Calculate</Button>
        <Button onClick={resetCalculator} bg='crimson' borderRadius={'10px'} m='20' fontSize={20} border='none' color='#fff' p={20} colorScheme="red">Reset</Button>
      </Flex>
      {showResult && (
        <Grid templateColumns='repeat(2, 1fr)' gap={60} className="bmi-result">
          <Text className='bmi-value' bg={'grey'} p={20}>{bmiValue}</Text>
          <Text className='bmi-status' p={20} color={bmiStatus.color}>{bmiStatus.status}</Text>
        </Grid>
      )}
    </Container>
  );
}

export default BMICalculator;
