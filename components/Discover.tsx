import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';

const data = [
  {
    title: 'Edit',
    path: '/assets/edit.png',
    items: ['Edit PDF', 'Sign PDF', 'New PDF', 'Add Image'],
  },
  {
    title: 'Conversion from PDF',
    path: '/assets/convert.png',
    items: ['PDF to WORD', 'PDF to POW', 'PDF to JPEG', 'PDF to PNG'],
  },
  {
    title: 'Conversion to PDF',
    path: '/assets/exchange.png',
    items: ['WORD to PDF', 'POW to PDF', 'JPEG to PDF', 'PNG to PDF'],
  },
  {
    title: 'Safety',
    path: '/assets/shield.png',
    items: ['Protect PDF', 'Unlock PDF'],
  },
  {
    title: 'Merging/Split',
    path: '/assets/file.png',
    items: ['MergePDF', 'Split PDF', 'Change Orientation', 'Remove pages'],
  },
];

const Discover: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Stack
      px={{ base: '1em', md: '5em' }}
      py={{ base: '1em', md: '4em' }}
      w="100%"
      alignItems="center"
    >
      <Heading mb="2em">Discover all our tools</Heading>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        w="100%"
        gap="2em"
        pb="2em"
      >
        {data.slice(0, 3).map((item, i1) => (
          <GridItem key={i1} w="100%">
            <Stack gap="1em" alignItems="center">
              <Heading fontSize="2xl">{item.title}</Heading>
              <Stack>
                {item.items.map((text, i2) => (
                  <Flex key={i2} gap="1em" alignItems="center">
                    <Image src={item.path} alt="Edit" w={50} h={50} />
                    <Text>{text}</Text>
                  </Flex>
                ))}
              </Stack>
            </Stack>
          </GridItem>
        ))}
      </Grid>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        w="100%"
        gap="2em"
        pb="2em"
      >
        {data.slice(3, 5).map((item, i1) => (
          <GridItem key={i1} w="100%">
            <Stack gap="1em" alignItems="center">
              <Heading fontSize="2xl">{item.title}</Heading>
              <Stack>
                {item.items.map((text, i2) => (
                  <Flex key={i2} gap="1em" alignItems="center">
                    <Image src={item.path} alt="Edit" w={50} h={50} />
                    <Text>{text}</Text>
                  </Flex>
                ))}
              </Stack>
            </Stack>
          </GridItem>
        ))}
      </Grid>
      <Button colorScheme="teal" onClick={scrollToTop}>
        Try it out
      </Button>
    </Stack>
  );
};

export default Discover;
