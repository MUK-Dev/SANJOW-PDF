import { Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

const EditAndConvert: FC = () => (
  /* const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }; */

  <Stack
    px={{ base: '1em', md: '5em' }}
    py={{ base: '1em', md: '4em' }}
    alignItems="center"
    w="100%"
    gap="2em"
    className="bg-gradient-to-right"
  >
    <Heading textAlign={{ base: 'center', md: 'left' }}>
      Edit and convert your PDF in seconds
    </Heading>
    <Grid
      w="100%"
      templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
      alignItems="center"
      gap="2em"
    >
      <GridItem>
        <Image
          src="/assets/editAndConvert/convert-pdf.png"
          alt="Who We Are"
          margin="0 auto"
        />
      </GridItem>
      <GridItem>
        <Heading pb="0.7em" fontSize="lg">
          Easy-to-use web app
        </Heading>
        <Text>
          We're We PDF, and our mission is to make technology easy and
          accessible for everyone. We believe that our customers' needs should
          be the driving force behind everything we do. That's why we've made it
          our mission to provide the best possible experience for all of our
          users—whether they're a small business owner, an academic
          professional, or just someone who needs help managing their own
          personal documents. If you need something done with your PDFs, we want
          to be there for you!
        </Text>
      </GridItem>
    </Grid>
  </Stack>
);
export default EditAndConvert;
