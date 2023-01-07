import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
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
            <OutlinedBtn onClick={() => router.push('/log-in')}>
              Login
            </OutlinedBtn>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <Flex as="nav" p="1em" alignItems="center">
      <Image src="/assets/we-pdflogo.png" alt="logo" h="3rem" />
      <Spacer />
      <Flex gap="2em" display={{ base: 'none', md: 'flex' }} alignItems='center' color='black' transition='all 0.4s ease' >
        <Box  _hover={{color: '#FD900F' }}  transition='all 0.2s ease'>

        <Link href='/' >Home</Link>
        </Box>
        <Box  _hover={{color: '#FD900F' }}  transition='all 0.2s ease'>

        <Link href='/' >Contact</Link>
        </Box>
        <OutlinedBtn onClick={() => router.push('/log-in')}>Login</OutlinedBtn>
        <Menu>
          <MenuButton
            px="2em"
            borderRadius="0.375rem"
            color='black'
            _hover={{
              borderColor: '#e3830e',
              color: '#e3830e',
              backgroundColor: 'transparent !important',
            }}
          >
            Oliver L.
          </MenuButton>
          <MenuList color='black'>
            <MenuItem>
              <Image src="/assets/header/avatar.png" alt="avatar" pr="0.5em" />
              Profile
            </MenuItem>
            <MenuItem>
              <Image src="/assets/docs/doc.png" alt="doc" pr="0.5em" />
              Your documents
            </MenuItem>
            <MenuItem>
              <Image src="/assets/docs/doc.png" alt="doc" pr="0.5em" />
              Unsubscribe
            </MenuItem>
            <MenuItem>
              <Image src="/assets/header/logout.png" alt="logout" pr="0.5em" />
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <DrawerButton onClick={onOpen} isOpen={isOpen} />
      {drawer}
    </Flex>
  );
};

export default Header;
