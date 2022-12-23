import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Spacer,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

import DrawerButton from './DrawerButton';
import OutlinedBtn from './OutlinedBtn';

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
            <Button
              backgroundColor="transparent"
              onClick={() => router.push('/')}
            >
              Home
            </Button>
            <Button backgroundColor="transparent">Contact</Button>
            <OutlinedBtn onClick={() => router.push('/log-in')} >Login</OutlinedBtn>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <Flex as="nav" p="1em" alignItems="center">
      <Image src="/assets/we-pdflogo.png" alt="logo" h="3rem" />
      <Spacer />
      <Flex gap="1em" display={{ base: 'none', md: 'flex' }}>
        <Button backgroundColor="transparent" onClick={() => router.push('/')}>
          Home
        </Button>
        <Button backgroundColor="transparent">Contact</Button>
        <OutlinedBtn onClick={() => router.push('/log-in')} >Login</OutlinedBtn>
      </Flex>
      <DrawerButton onClick={onOpen} isOpen={isOpen} />
      {drawer}
    </Flex>
  );
};

export default Header;
