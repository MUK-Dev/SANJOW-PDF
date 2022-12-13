import { FC, ReactNode } from 'react';
import {
  Button,
  Divider,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface Props {
  quote: ReactNode;
}

const Footer: FC<Props> = ({ quote }) => {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  console.log(router.pathname);

  return (
    <Stack
      py={{ base: '1em', md: '1em' }}
      alignItems="center"
      w="100%"
      className="bg-gradient-to-right"
    >
      {quote}

      <Flex
        w="100%"
        pt="3em"
        pb="2em"
        px={{ base: '1em', md: '5em' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
        direction={{ base: 'column', md: 'row' }}
        gap="1em"
      >
        <Heading size="lg">SANJOW PDF</Heading>
        <Spacer />
        <Stack alignItems={{ base: 'center', md: 'flex-start' }}>
          <Heading size="md">Quick Links</Heading>
          <Button
            onClick={
              router.pathname === '/' ? scrollToTop : () => router.push('/')
            }
          >
            Home
          </Button>
          <Button>Contact</Button>
          <Button>Pricing</Button>
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
        <Button
          borderWidth={2}
          borderColor="#70e963"
          color="#70e963"
          backgroundColor="transparent"
          _hover={{
            borderColor: '#5DBF52',
            color: '#5DBF52',
            backgroundColor: 'transparent !important',
          }}
          onClick={() => router.push('/log-in')}
        >
          Log In
        </Button>
      </Flex>
      <Divider borderWidth={1} borderColor="#7F90BB" />
      <Flex
        justifyContent="space-between"
        alignItems={{ base: 'center', md: 'flex-start' }}
        w="100%"
        px={{ base: '1em', md: '5em' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Text>©️Copyright 2022 | All Rights Reserved</Text>
        <Flex
          gap={{ base: '0', md: '4em' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Button bgColor="transparent" onClick={() => router.push('/terms')}>
            Terms & Conditions
          </Button>
          <Button bgColor="transparent" onClick={() => router.push('/policy')}>
            Privacy Policy
          </Button>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Footer;
