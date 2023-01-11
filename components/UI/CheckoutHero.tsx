import {
  Heading, Stack
} from '@chakra-ui/react';
import React from 'react';

const CheckoutHero = () => (
  <Stack
    py={{ base: '0em', md: '8em' }}
    pb={{base: '5em', md: '15em !important'}}
    px={{ base: '1em', md: '5em' }}
    alignItems="center"
    gap="7em"
  >
    {/* <Stack alignItems="center" w="100%" gap='2em' >
      <Heading>Breadcrumbs</Heading>
      <Flex w={{ base: '95%', md: '40%' }} alignItems="center">
        <Stack
          bgColor="#7F90BB"
          justifyContent="center"
          alignItems="center"
          borderRadius="50%"
          w={130}
          h={50}
        >
          <Text color="white" fontSize="xl">
            1
          </Text>
        </Stack>
        <Divider borderWidth={2} borderColor="#7F90BB" flexGrow={1} />
        <Stack
          bgColor="#7F90BB"
          justifyContent="center"
          alignItems="center"
          borderRadius="50%"
          w={130}
          h={50}
        >
          <Text color="white" fontSize="xl">
            2
          </Text>
        </Stack>
        <Divider borderWidth={2} borderColor="#7F90BB" flexGrow={1} />
        <Stack
          bgColor="#7F90BB"
          justifyContent="center"
          alignItems="center"
          borderRadius="50%"
          w={130}
          h={50}
        >
          <Text color="white" fontSize="xl">
            3
          </Text>
        </Stack>
      </Flex>
    </Stack> */}
    <Heading textAlign='center' >Last step before receiving your document</Heading>
  </Stack>
);

export default CheckoutHero;
