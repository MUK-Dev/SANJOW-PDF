import {
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';

const HowItWorks: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Stack
      alignItems="center"
      px={{ base: '1em', md: '5em' }}
      py={{ base: '1em', md: '4em' }}
    >
      <Heading>How it works</Heading>
      <Flex
        w="100%"
        alignItems="center"
        direction={{ base: 'column', md: 'row' }}
        py={{ base: '1em', md: '4em' }}
      >
        <Stack alignItems="center" w="100%">
          <Image src="/assets/selected.png" alt="Pick Image" w={90} h={90} />
          <Text fontSize="lg">Upload your doc</Text>
        </Stack>
        <Divider my={{ base: '2em', md: '0' }} />
        <Stack alignItems="center" w="100%">
          <Image src="/assets/edit.png" alt="Edit Image" w={90} h={90} />
          <Text fontSize="lg">Type anywhere or sign your doc</Text>
        </Stack>
        <Divider my={{ base: '2em', md: '0' }} />
        <Stack alignItems="center" w="100%">
          <Image src="/assets/folder.png" alt="Download Image" w={90} h={90} />
          <Text fontSize="lg">Download or print your doc</Text>
        </Stack>
      </Flex>
      <Button colorScheme="teal" onClick={scrollToTop}>
        Try it out
      </Button>
    </Stack>
  );
};

export default HowItWorks;
