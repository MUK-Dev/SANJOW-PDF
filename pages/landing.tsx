import {
  Divider, Heading, Stack } from '@chakra-ui/react';
import React, { FC } from 'react';

import FilledBtn from '@Reuseables/FilledBtn';
import Footer from '@Reuseables/Footer';
import Header from '@Reuseables/Header';
import Discover from '@UI//Discover';
import HowItWorks from '@UI//HowItWorks';
import LandingHero from '@UI//LandingHero';
import Pricing from '@UI//Pricing';
import Reassurance from '@UI//Reassurance';
import UniquePoints from '@UI//UniquePoints';
import WhoAreWe from '@UI//WhoAreWe';
import useEditor from 'hooks/useEditor';

interface Props {
  handleChange: React.ChangeEventHandler;
  children?: React.ReactNode;
}

const Landing: FC<Props> = () => {
  const { handleChange } = useEditor();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Stack className="bg-gradient-to-right">
        <Header />
        <LandingHero handleChange={handleChange} />
      </Stack>
      <HowItWorks />
      <Discover />
      <UniquePoints />
      <Pricing />
      <Reassurance />
      <WhoAreWe />
      <Footer
        quote={
          <>
            <Stack alignItems="center" pb="2em" px={{ base: '1em', md: '5em' }}>
              <Heading textAlign="center" fontStyle="italic" size="lg" py="1em">
                Works with digital and scanned files. Get started and upload
                your document to our online PDF editor and converter.
              </Heading>
              <FilledBtn onClick={scrollToTop}>Upload a PDF document</FilledBtn>
            </Stack>
            <Divider borderWidth={1} borderColor="#D9D9D9" />
          </>
        }
      />
    </>
  );
};
export default Landing;
