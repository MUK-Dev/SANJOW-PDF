import {
  Box, Flex, Heading, Stack,
} from '@chakra-ui/react';
import { FC } from 'react';

import Footer from '@Reuseables/Footer';
import Header from '@Reuseables/Header';
import OutlinedBtn from '@Reuseables/OutlinedBtn';

const Member: FC = () => (
  <>
    <Box className="bg-gradient-to-right">
      <Header />
    </Box>
    <Flex minH="70vh" px='1em' justifyContent="center" alignItems="center">
      <Box
        border="4px solid rgba(127, 144, 187, 1)"
        w={{ base: '100%', md: '80%' }}
        borderRadius={8}
        p="4rem 2rem"
      >
        <Stack alignItems="flex-start">
          <Heading fontSize="3xl">My Profile</Heading>
          <Heading fontSize="md">Name</Heading>
          <Heading fontSize="md">Last name</Heading>
          <Heading fontSize="md">Email address</Heading>
          <Heading fontSize="md">Change password</Heading>
          <Heading fontSize="md" pb="1em">
            Subscription
          </Heading>
          <OutlinedBtn>Update</OutlinedBtn>
        </Stack>
      </Box>
    </Flex>
    <Footer quote={<></>} />
  </>
);

export default Member;
