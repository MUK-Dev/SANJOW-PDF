import { FC } from 'react';

import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';

const data = [
  {
    title: 'Edit',
    items: [
      { text: 'Edit PDF', icon: '/assets/discover/document1.png' },
      { text: 'Sign PDF', icon: '/assets/discover/clipboard.png' },
      { text: 'New PDF', icon: '/assets/discover/file.png' },
      { text: 'Add Image', icon: '/assets/discover/duplicateFiles.png' },
    ],
  },
  {
    title: 'Conversion from PDF',
    items: [
      { text: 'PDF to WORD', icon: '/assets/discover/paper.png' },
      { text: 'PDF to POW', icon: '/assets/discover/certificate.png' },
      { text: 'PDF to JPEG', icon: '/assets/discover/news.png' },
      { text: 'PDF to PNG', icon: '/assets/discover/attachment.png' },
    ],
  },
  {
    title: 'Conversion to PDF',
    items: [
      { text: 'WORD to PDF', icon: '/assets/discover/paper.png' },
      { text: 'POW to PDF', icon: '/assets/discover/certificate.png' },
      { text: 'JPEG to PDF', icon: '/assets/discover/news.png' },
      { text: 'PNG to PDF', icon: '/assets/discover/attachment.png' },
    ],
  },
  {
    title: 'Safety',
    items: [
      { text: 'Protect PDF', icon: '/assets/discover/paper.png' },
      { text: 'Unlock PDF', icon: '/assets/discover/certificate.png' },
    ],
  },
  {
    title: 'Merging / Split',
    items: [
      { text: 'Merge PDF', icon: '/assets/discover/document1.png' },
      { text: 'Split PDF', icon: '/assets/discover/clipboard.png' },
      { text: 'Change Orientation', icon: '/assets/discover/file.png' },
      { text: 'Remove pages', icon: '/assets/discover/duplicateFiles.png' },
    ],
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
        {data.slice(0, 3).map((item, i) => (
          <GridItem key={i} w="100%">
            <Stack gap="1em" alignItems="center">
              <Heading fontSize="2xl">{item.title}</Heading>
              <Stack>
                {item.items.map(({ text, icon }, i) => (
                  <Flex key={i} gap="1em" alignItems="center">
                    <Image src={icon} alt="Edit" />
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
        {data.slice(3, 5).map((item, i) => (
          <GridItem key={i} w="100%">
            <Stack gap="1em" alignItems="center">
              <Heading fontSize="2xl">{item.title}</Heading>
              <Stack>
                {item.items.map(({ text, icon }, i) => (
                  <Flex key={i} gap="1em" alignItems="center">
                    <Image src={icon} alt="Edit" />
                    <Text>{text}</Text>
                  </Flex>
                ))}
              </Stack>
            </Stack>
          </GridItem>
        ))}
      </Grid>
      <Button
        variant="outline"
        color="white"
        bgColor="#70e963"
        onClick={scrollToTop}
      >
        Upload PDF to Convert
      </Button>
    </Stack>
  );
};

export default Discover;
