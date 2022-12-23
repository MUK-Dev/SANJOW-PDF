import {
  Flex, Heading, Image, Stack,
} from '@chakra-ui/react';
import React, { FC } from 'react';

import FilledBtn from '@Reuseables/FilledBtn';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: FC<Props> = ({ setShowModal }) => (
  <Flex
    py={{ base: '1em', md: '6em' }}
    px={{ base: '1em', md: '5em' }}
    alignItems="center"
    // className="bg-gradient-to-right"
    direction={{ base: 'column-reverse', md: 'row' }}
    gap="2em"
  >
    <Stack flex={1} gap="1em" alignItems={{ base: 'center', md: 'flex-start' }}>
      <Heading textAlign={{ base: 'center', md: 'left' }}>
        Modify, convert and manage PDF documents online
      </Heading>
      <FilledBtn onClick={() => setShowModal(true)}>Start now</FilledBtn>
    </Stack>
    <Stack flex={1} alignItems="center" w="100%">
      <Image src="/assets/Laptop.png" alt="laptop" />
    </Stack>
  </Flex>
);

export default Hero;
