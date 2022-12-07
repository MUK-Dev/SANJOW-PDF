import { FC } from 'react';
import { Button, Flex, Heading, Spacer, Stack, Text } from '@chakra-ui/react';

const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Stack
      py={{ base: '1em', md: '6em' }}
      px={{ base: '1em', md: '5em' }}
      alignItems="center"
      w="100%"
    >
      <Button mb="3em" onClick={scrollToTop} colorScheme="teal">
        Try Today
      </Button>
      <Flex
        w="100%"
        alignItems={{ base: 'center', md: 'flex-start' }}
        direction={{ base: 'column', md: 'row' }}
        gap="1em"
      >
        <Heading size="lg">SANJOW PDF</Heading>
        <Spacer />
        <Stack alignItems={{ base: 'center', md: 'flex-start' }}>
          <Heading size="md">Quick Links</Heading>
          <Button>Home</Button>
          <Button>Services and pricing</Button>
          <Button>Contact</Button>
        </Stack>
        <Spacer />
        <Stack alignItems={{ base: 'center', md: 'flex-start' }}>
          <Heading size="md">Services</Heading>
          <Text>Edit PDF</Text>
          <Text>Convert PDF to WORD</Text>
          <Text>Convert PDF to JPEG</Text>
        </Stack>
        <Spacer />
        <Stack alignItems={{ base: 'center', md: 'flex-start' }}>
          <Heading size="md">Contact Info</Heading>
          <Text>22-25 Portman Close, London, W1H 6BS</Text>
          <Text>contact@pdf.com</Text>
        </Stack>
        <Spacer />
        <Button colorScheme="teal">Log In</Button>
      </Flex>
    </Stack>
  );
};

export default Footer;
