import {
  Divider,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

import OutlinedBtn from './OutlinedBtn';

interface Props {
  quote: ReactNode;
}

const Footer: FC<Props> = ({ quote }) => {
  const router = useRouter();

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
        <Image src='/assets/we-pdflogo.png' alt='logo' h='3rem' />
        <Spacer />
        <Stack alignItems={{ base: 'center', md: 'flex-start' }}>
          <Heading size="md">Quick Links</Heading>
          <Link href="/">Home</Link>
          <Link href="mailto:contact@we-pdf.com">Contact</Link>
          <Link href="#">Pricing</Link>
        </Stack>
        <Spacer />
        <Stack alignItems={{ base: 'center', md: 'flex-start' }}>
          <Heading size="md">Services</Heading>
          <Link href="/landing">Edit PDF</Link>
          <Link href="/landing">Convert PDF to WORD</Link>
          <Link href="/landing">Convert PDF to JPEG</Link>
        </Stack>
        <Spacer />
        <Stack alignItems={{ base: 'center', md: 'flex-start' }}>
          <Heading size="md">Contact Info</Heading>
          <Text>Agiou Pavlous, 115, Agios Dometios, 2362,</Text>
          <Text>Nicosia, Cyprus</Text>
          <Text>contact@we-pdf.com</Text>
        </Stack>
        <Spacer />
        <OutlinedBtn onClick={() => router.push('/log-in')} >Log In</OutlinedBtn>
      </Flex>
      <Divider borderWidth={1} borderColor="#D9D9D9" />
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
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/policy">Privacy Policy</Link>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Footer;
