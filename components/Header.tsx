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
import { FC } from 'react';

import DrawerButton from './DrawerButton';

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <nav>
      <Flex p="1em" alignItems="center">
        <Heading size="lg">SANJOW PDF</Heading>
        <Spacer />
        <Flex gap="1em" display={{ base: 'none', md: 'flex' }}>
          <Button backgroundColor="transparent">Home</Button>
          <Button backgroundColor="transparent">Services and pricing</Button>
          <Button backgroundColor="transparent">Contact</Button>
          <Button colorScheme="teal">Login</Button>
        </Flex>
        <DrawerButton onClick={onOpen} isOpen={isOpen} />
        {drawer}
      </Flex>
    </nav>
  );
};

export default Header;
