import {
  Button, Divider, Flex, Heading, Stack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import Footer from '@Reuseables/Footer';
import Header from '@Reuseables/Header';
import Discover from '@UI/Discover';
import EditAndConvert from '@UI/EditAndConvert';
import Hero from '@UI/Hero';
import Pricing from '@UI/Pricing';
import Reassurance from '@UI/Reassurance';
import UniquePoints from '@UI/UniquePoints';
import WhoAreWe from '@UI/WhoAreWe';

interface Props {
  handleChange: React.ChangeEventHandler;
  children?: React.ReactNode;
}

const Landing: FC<Props> = () => {
  const router = useRouter();

  return (
    <>
      <Stack className="bg-gradient-to-right">
        <Header />
        <Hero />
      </Stack>
      <Discover />
      <EditAndConvert />
      <UniquePoints showGradient={false} />
      <Reassurance />
      <Pricing />
      <WhoAreWe />
      <Footer
        quote={
          <>
            <Flex
              justifyContent="center"
              alignItems="center"
              w="100%"
              pb="2em"
              gap="2em"
              px={{ base: '1em', md: '5em' }}
              direction={{ base: 'column', md: 'row' }}
            >
              <Heading size="lg" py="1em">
                Get more with premium and join The PDF software trusted by
                thousands of users
              </Heading>
              <Button
                onClick={() => router.push('/landing')}
                variant="outline"
                color="white"
                bgColor="#70e963"
                px="3em"
              >
                Start Now
              </Button>
            </Flex>
            <Divider borderWidth={1} borderColor="#7F90BB" />
          </>
        }
      />
    </>
  );
};
export default Landing;
