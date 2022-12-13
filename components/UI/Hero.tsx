import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  ChangeEventHandler,
  DragEvent,
  FC,
  LegacyRef,
  useEffect,
  useRef,
  useState,
} from 'react';

const Hero: FC = () => {
  const router = useRouter();
  return (
    <Flex
      py={{ base: '1em', md: '6em' }}
      px={{ base: '1em', md: '5em' }}
      alignItems="center"
      // className="bg-gradient-to-right"
      direction={{ base: 'column-reverse', md: 'row' }}
      gap="2em"
    >
      <Stack
        flex={1}
        gap="1em"
        alignItems={{ base: 'center', md: 'flex-start' }}
      >
        <Heading textAlign={{ base: 'center', md: 'left' }}>
          Modify, convert and manage PDF documents online
        </Heading>
        <Button
          onClick={() => router.push('/landing')}
          variant="outline"
          color="white"
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
};

export default Hero;
