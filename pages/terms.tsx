import { Heading, Stack } from '@chakra-ui/react';
import React from 'react';

import Footer from '@Reuseables/Footer';
import Header from '@Reuseables/Header';
import TermsAndConditions from '@UI//TermsAndConditions';

const Terms = () => (
  <>
    <Stack className="bg-gradient-to-right">
      <Header />
      <Heading textAlign="center" pt="2em" pb="1em">
        Terms & Conditions
      </Heading>
    </Stack>
    <TermsAndConditions />
    <Footer quote={<></>} />
  </>
);

export default Terms;
