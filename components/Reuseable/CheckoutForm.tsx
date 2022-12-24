import {
  Flex, Heading, Image, Input, Stack, Text,
} from '@chakra-ui/react';
import React from 'react';

import FilledBtn from './FilledBtn';

const CheckoutForm = () => (
  <Stack
    p="3em"
    position="relative"
    border="4px solid #7F90BB"
    borderRadius={8}
    bgColor='white'
  >
    <Heading fontSize="xl" pb="2em">
      Card Details
    </Heading>
    <Flex w='100%' justifyContent='space-between' alignItems='center' >
      <Flex flexGrow={1} gap='1em' alignItems='center'>
        <Text>Secure Payment</Text>
        <Image src='/assets/checkoutForm/lock.png' alt='lock' objectFit='contain' h='20px' />
      </Flex>
      <Flex gap='1em' alignItems='center'>
        <Image src='/assets/checkoutForm/visa.png' alt='visa' objectFit='contain' h='15px' />
        <Image src='/assets/checkoutForm/mastercard.png' alt='mastercard' objectFit='contain' h='15px' />
      </Flex>
    </Flex>
    <Input placeholder='E-mail' variant='outline' borderColor='#E2E8F0' />
    <Input placeholder='Name On Card' variant='outline' borderColor='#E2E8F0' />
    <Input placeholder='1234 5678 1234 4567' variant='outline' borderColor='#E2E8F0' />
    <Flex alignItems='center' gap='1em' pb='3em' >

    <Input placeholder='MM/AA' variant='outline' borderColor='#E2E8F0' />
    <Input placeholder='CVV' variant='outline' borderColor='#E2E8F0' />
    </Flex>
    <FilledBtn>Get My Document</FilledBtn>
    <Text fontSize='sm' position='absolute' top='-6rem' left='6rem' >Sign in or continue as a guest below</Text>
  </Stack>
);

export default CheckoutForm;
