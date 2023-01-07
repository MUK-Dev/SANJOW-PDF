import {
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import FilledBtn from '@Reuseables/FilledBtn';
import Footer from '@Reuseables/Footer';
import Header from '@Reuseables/Header';

const SignUp = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Stack
        minWidth="100%"
        minHeight="70vh"
        justifyContent="center"
        alignItems="center"
        py='3em'
      >
        <Stack maxWidth="470px" alignItems="center">
          <Heading align="center" pb="0.5em">
            Sign up
          </Heading>
          <Heading align="center" fontSize="md">
            Create an Account to Download your Document
          </Heading>
          <Text align="center" lineHeight="8">
            Editing and convert functionalities with Unlimited Downloads. One of
            the best PDF solution on the market.
          </Text>
          <Stack gap="1em" py="0.5em">
            <Input variant="flushed" placeholder="Email" />
            <Input variant="flushed" placeholder="Password" />
          </Stack>
          <Text fontSize="sm" mb="0.5em" pb="1em">
            Already have an account? -{' '}
            <Link onClick={() => router.push('/log-in')}>Login</Link>
          </Text>
          <FilledBtn>Create Account</FilledBtn>
        </Stack>
      </Stack>
      <Footer quote={<></>} />
    </>
  );
};

export default SignUp;
