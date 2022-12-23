import {
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';

import FilledBtn from '@Reuseables/FilledBtn';

interface Props {
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const WhoAreWe: FC<Props> = ({ setShowModal }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Stack
      px={{ base: '1em', md: '5em' }}
      py={{ base: '1em', md: '4em' }}
      alignItems="center"
      w="100%"
      gap="2em"
    >
      <Heading>Who Are We?</Heading>
      <Grid
        w="100%"
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
        alignItems="center"
        gap="2em"
        pb="2em"
      >
        <GridItem>
          <Stack w="100%" alignItems={{ base: 'center', md: 'flex-start' }}>
            <Text pb="0.4em" textAlign={{ base: 'center', md: 'left' }}>
              We're The Pdf Converter, and our mission is to make technology
              easy and accessible for everyone. We believe that our customers'
              needs should be the driving force behind everything we do. That's
              why we've made it our mission to provide the best possible
              experience for all of our users—whether they're a small business
              owner, an academic professional, or just someone who needs help
              managing their own personal documents. If you need something done
              with your PDFs, we want to be there for you!
            </Text>
            <Text pb="1em" textAlign={{ base: 'center', md: 'left' }}>
              Our values are reflected in everything we do. We believe that
              technology should be accessible to everyone, no matter what their
              level of expertise—and that's why we've built our platform from
              the ground up to be simple enough for anyone to use. And we love
              hearing from our customers about how much they love using us!
            </Text>
            <FilledBtn
              onClick={setShowModal ? () => setShowModal(true) : scrollToTop}
            >
              Start Now
            </FilledBtn>
          </Stack>
        </GridItem>
        <GridItem display={{ base: 'none', md: 'block' }}>
          <Image
            src="/assets/whoWeAre/who-we-are.png"
            alt="Who We Are"
            margin="0 auto"
          />
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default WhoAreWe;
