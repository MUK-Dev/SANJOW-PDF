import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Spacer,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

import DrawerButton from './DrawerButton';

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const drawer = (
    <Drawer isOpen={isOpen} onClose={onClose} size="xs" placement="left">
      <DrawerOverlay display={{ base: 'block', md: 'none' }} />
      <DrawerContent display={{ base: 'block', md: 'none' }}>
        <DrawerCloseButton />

        <DrawerBody mt="2.2em">
          <Stack>
            <Button backgroundColor="transparent">Home</Button>
            <Button backgroundColor="transparent">Services and pricing</Button>
            <Button backgroundColor="transparent">Contact</Button>
            <Button colorScheme="teal">Login</Button>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <Flex as="nav" p="1em" alignItems="center">
      <Heading size="lg">SANJOW PDF</Heading>
      <Spacer />
      <Flex gap="1em" display={{ base: 'none', md: 'flex' }}>
        <Button backgroundColor="transparent" onClick={() => router.push('/')}>
          Home
        </Button>
        <Button backgroundColor="transparent">Contact</Button>
        <Button
          variant="outline"
          borderWidth={2}
          borderColor="#70e963"
          color="#70e963"
          _hover={{
            borderColor: '#5DBF52',
            color: '#5DBF52',
            backgroundColor: 'transparent !important',
          }}
          onClick={() => router.push('/log-in')}
        >
          Login
        </Button>
      </Flex>
      <DrawerButton onClick={onOpen} isOpen={isOpen} />
      {drawer}
    </Flex>
  );
};

export default Header;
