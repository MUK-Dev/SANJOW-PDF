import {
  Button, Flex, Heading, Image, Stack, Text,
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
      height={{ base: '100vh', md: 'auto' }}
    >
      <Heading>How it works</Heading>
      <Flex
        w="100%"
        h="100%"
        alignItems="center"
        direction={{ base: 'column', md: 'row' }}
        py={{ base: '1em', md: '4em' }}
      >
        <Stack alignItems="center" w="100%">
          <Image src="/assets/HIW1.png" alt="Pick Image" w={90} h={90} />
          <Text fontSize="lg" align="center">
            Upload your document
          </Text>
        </Stack>
        <Image
          src="/assets/Arrow.svg"
          alt="Arrow"
          transform={{ base: 'rotateZ(90deg) scale(0.3)', md: 'rotateX(0deg)' }}
          height={{ base: '100%', md: 'auto' }}
        />
        <Stack alignItems="center" w="100%">
          <Image src="/assets/HIW2.png" alt="Edit Image" w={90} h={90} />
          <Text fontSize="lg" align="center">
            Modify your document
          </Text>
        </Stack>
        <Image
          src="/assets/Arrow.svg"
          alt="Arrow"
          transform={{ base: 'rotateZ(90deg) scale(0.3)', md: 'rotateX(0deg)' }}
          height={{ base: '100%', md: 'auto' }}
        />
        <Stack alignItems="center" w="100%">
          <Image src="/assets/HIW3.png" alt="Download Image" w={90} h={90} />
          <Text fontSize="lg" align="center">
            Download or print your document
          </Text>
        </Stack>
      </Flex>
      <Button
        variant="outline"
        color="white"
        bgColor="#70e963"
        onClick={scrollToTop}
      >
        Upload a PDF document
      </Button>
    </Stack>
  );
};

export default HowItWorks;
