import {
  Grid, GridItem, Heading, Stack,
} from '@chakra-ui/react';

import Card from './Card';

const UniquePoints = () => (
  <Stack
    px={{ base: '1em', md: '5em' }}
    py={{ base: '1em', md: '4em' }}
    alignItems="center"
    w="100%"
  >
    <Heading mb="1em">Unique selling points</Heading>
    <Grid
      w="100%"
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap="2em"
    >
      <GridItem>
        <Card
          title="Convert anywhere anytime"
          path="/assets/convert.png"
          description="No limitations, accessible anywhere anytime."
        />
      </GridItem>
      <GridItem>
        <Card
          title="No download or installation necessary"
          path="/assets/selected.png"
          description="Ready to use"
        />
      </GridItem>
      <GridItem>
        <Card
          title="100% safe and secure"
          path="/assets/shield.png"
          description="No third party interferance, Your Files are not stored by us"
        />
      </GridItem>
      <GridItem>
        <Card
          title="No tech know-how needed"
          path="/assets/happy.png"
          description="Simple to use"
        />
      </GridItem>
    </Grid>
  </Stack>
);

export default UniquePoints;
