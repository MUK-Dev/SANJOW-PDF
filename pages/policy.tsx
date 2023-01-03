import { Heading, Stack } from '@chakra-ui/react';
import React from 'react';

import Footer from '@Reuseables/Footer';
import Header from '@Reuseables/Header';
import PrivacyPolicies from '@UI//PrivacyPolicies';

const PrivacyPolicy = () => (
  <>
    <Stack className="bg-gradient-to-right">
      <Header />
      <Heading textAlign="center" pt="2em" pb="1em">
        Privacy Policy
      </Heading>
    </Stack>
    <PrivacyPolicies />
    <Footer quote={<></>} />
  </>
);

export default PrivacyPolicy;
