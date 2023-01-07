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

import FilledBtn from '@Reuseables/FilledBtn';
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
            <Input variant="flushed" placeholder="Email" />
            <Input variant="flushed" placeholder="Password" />
          </Stack>
          <Text fontSize="sm" mb="0.5em" pb="1em">
            Don't have an account? -{' '}
            <Link onClick={() => router.push('/sign-up')}>Sign up</Link>
          </Text>
          <FilledBtn>Log in</FilledBtn>
        </Stack>
      </Stack>
      <Footer quote={<></>} />
    </>
  );
};

export default Login;
