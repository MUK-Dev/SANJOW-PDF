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
        pb={{ base: '3em', md: 0 }}
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
            Already have an account? -{' '}
            <Link onClick={() => router.push('/log-in')}>Login</Link>
          </Text>
          <Button variant="outline" color="black" bgColor="#70e963">
            Create Account
          </Button>
        </Stack>
      </Stack>
      <Footer quote={<></>} />
    </>
  );
};

export default SignUp;
