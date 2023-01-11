import {
  Checkbox,
  Flex,
  Heading,
  Image,
  Input,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import useEditor from 'hooks/useEditor';

import FilledBtn from './FilledBtn';

const CheckoutForm = () => {
  const { runDownload, isLoading } = useEditor();
  return (
    <Stack
      p="3em"
      position="relative"
      border="4px solid #7F90BB"
      borderRadius={8}
      bgColor="white"
    >
      <Heading fontSize="xl">Total: $0.99*</Heading>
      <Text
        fontSize="sm"
        cursor="pointer"
        fontStyle="italic"
        color="#8C9BC2"
        pb="1em"
      >
        <Link href="/log-in" passHref>
          <Text>Already have an account?</Text>
        </Link>
      </Text>
      <Flex w="100%" justifyContent="space-between" alignItems="center">
        <Flex flexGrow={1} gap="1em" alignItems="center">
          <Text>Secure Payment</Text>
          <Image
            src="/assets/checkoutForm/lock.png"
            alt="lock"
            objectFit="contain"
            h="20px"
          />
        </Flex>
        <Flex gap="1em" alignItems="center">
          <Image
            src="/assets/checkoutForm/visa.png"
            alt="visa"
            objectFit="contain"
            h="15px"
          />
          <Image
            src="/assets/checkoutForm/mastercard.png"
            alt="mastercard"
            objectFit="contain"
            h="15px"
          />
        </Flex>
      </Flex>
      <Input placeholder="E-mail" variant="outline" borderColor="#E2E8F0" />
      <Input
        placeholder="Name On Card"
        variant="outline"
        borderColor="#E2E8F0"
      />
      <Input
        placeholder="1234 5678 1234 4567"
        variant="outline"
        borderColor="#E2E8F0"
      />
      <Flex alignItems="center" gap="1em" pb="1em">
        <Input placeholder="MM/AA" variant="outline" borderColor="#E2E8F0" />
        <Input placeholder="CVV" variant="outline" borderColor="#E2E8F0" />
      </Flex>
      <Checkbox alignItems='flex-start' defaultChecked >
        I have read and agree to the Terms and Conditions and the Privacy
        Policy, and would like to subscribe for $19.90 every month after the 7
        days trial. I would also like to proceed my document immediately. I
        understand and accept that by requesting this, I will lose my right to
        withdraw from this contract once the service has been fully performed.
      </Checkbox>
      <FilledBtn onClick={runDownload} disabled={isLoading} >
        {isLoading ? <Spinner /> : 'Get My Document'}
      </FilledBtn>
    </Stack>
  );
};

export default CheckoutForm;
