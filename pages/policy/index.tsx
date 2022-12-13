import { Heading, Stack } from '@chakra-ui/react';
import Header from '@Reuseables/Header';
import PrivacyPolicies from '@UI/PrivacyPolicies';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <Stack className="bg-gradient-to-right">
        <Header />
        <Heading textAlign="center" pt="2em" pb="1em">
          Privacy Policy
        </Heading>
      </Stack>
      <PrivacyPolicies />
    </>
  );
};

export default PrivacyPolicy;
