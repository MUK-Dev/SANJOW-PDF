import {
  Button, Flex, Heading, Image, Stack,
} from '@chakra-ui/react';
import React, { FC } from 'react';

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
      <Button
        onClick={() => setShowModal(true)}
        variant="outline"
        color="black"
        bgColor="#70e963"
      >
        Start Now
      </Button>
    </Stack>
    <Stack flex={1} alignItems="center" w="100%">
      <Image src="/assets/Laptop.png" alt="laptop" />
    </Stack>
  </Flex>
);

export default Hero;
