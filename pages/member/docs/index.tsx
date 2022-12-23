import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
} from '@chakra-ui/react';
import { FC } from 'react';

import Footer from '@Reuseables/Footer';
import Header from '@Reuseables/Header';
import OutlinedBtn from '@Reuseables/OutlinedBtn';

const Docs: FC = () => (
  <>
    <Box className="bg-gradient-to-right">
      <Header />
    </Box>
    <Flex minH="70vh" px="1em" justifyContent="center" alignItems="center">
      <Stack alignItems="flex-start" w={{ base: '100%', md: '80%' }}>
        <Heading fontSize="3xl">Your documents</Heading>
        <Stack pb='0.5em' alignItems="flex-end" w="100%">
          <OutlinedBtn>+ Add New</OutlinedBtn>
        </Stack>
        {Array.from(Array(5).keys()).map((i) => (
          <>
            <Flex
              key={i}
              justifyContent="space-between"
              w="100%"
              px="2em"
              py="0.5em"
            >
              <Flex gap="1em">
                <Image src="/assets/docs/doc.png" alt="doc" />
                <Link>Document12{i + 1}.pdf</Link>
              </Flex>
              <Flex gap="1em">
                <Link fontWeight={600}>Edit</Link>
                <Link fontWeight={600}>Download</Link>
              </Flex>
            </Flex>
            <Divider borderWidth={1} borderColor="rgba(68, 68, 68, 0.6)" />
          </>
        ))}
      </Stack>
    </Flex>
    <Footer quote={<></>} />
  </>
);

export default Docs;
