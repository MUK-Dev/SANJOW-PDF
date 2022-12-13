import { Heading, Stack } from '@chakra-ui/react';
import Header from '@Reuseables/Header';
import TermsAndConditions from '@UI/TermsAndConditions';
import React from 'react';

const Terms = () => {
  return (
    <>
      <Stack className="bg-gradient-to-right">
        <Header />
        <Heading textAlign="center" pt="2em" pb="1em">
          Terms & Conditions
        </Heading>
      </Stack>
      <TermsAndConditions />
    </>
  );
};

export default Terms;
