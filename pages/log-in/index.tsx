import {
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

import Footer from '@Reuseables/Footer';
import Header from '@Reuseables/Header';

const Login = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Stack
        minWidth="100%"
        minHeight="70vh"
        justifyContent="center"
        alignItems="center"
        pb={{ base: '1em', md: 0 }}
      >
        <Stack maxWidth="470px" alignItems="center">
          <Heading align="center" pb="0.5em">
            Log in
          </Heading>
          <Stack gap="1em" py="0.5em">
            <Button
              w="100%"
              gap="1em"
              bg="transparent"
              border="1px solid black"
              _hover={{ bgColor: 'transparent !important' }}
            >
              <Image src="/assets/auth/google.png" alt="Google" w="20px" />
              Sign in with Google
            </Button>
            <Button
              w="100%"
              gap="1em"
              bg="transparent"
              border="1px solid black"
              _hover={{ bgColor: 'transparent !important' }}
            >
              <Image src="/assets/auth/facebook.png" alt="Facebook" w="20px" />
              Sign in with Facebook
            </Button>
            <Flex alignItems="center" w="100%" gap="0.5em">
              <Divider borderWidth={1} borderColor="black" flexGrow={1} />
              <Text>OR</Text>
              <Divider borderWidth={1} borderColor="black" flexGrow={1} />
            </Flex>
            <Input variant="flushed" placeholder="Email" />
            <Input variant="flushed" placeholder="Password" />
          </Stack>
          <Text fontSize="sm" mb="0.5em" pb="1em">
            Don't have an account? -{' '}
            <Link onClick={() => router.push('/sign-up')}>Sign up</Link>
          </Text>
          <Button variant="outline" color="white" bgColor="#e3830e">
            Log in
          </Button>
        </Stack>
      </Stack>
      <Footer quote={<></>} />
    </>
  );
};

export default Login;
