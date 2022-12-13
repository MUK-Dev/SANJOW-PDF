import {
  Grid, GridItem, Heading, Stack,
} from '@chakra-ui/react';
import { FC } from 'react';

import Card from '@Reuseables/Card';

interface Props {
  showGradient?: boolean;
}

const UniquePoints: FC<Props> = ({ showGradient = true }) => (
  <Stack
    px={{ base: '1em', md: '5em' }}
    py={{ base: '1em', md: '4em' }}
    paddingBottom={{ base: '6em', md: 'auto' }}
    alignItems="center"
    w="100%"
    className={showGradient ? 'bg-gradient-to-right' : ''}
  >
    <Heading mb="1em" textAlign="center">
      A complete PDF management tool
    </Heading>
    <Grid
      w="100%"
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap="2em"
      justifyContent="stretch"
    >
      <GridItem>
        <Card
          title="Simple"
          path="/assets/uniquePoints/simple.png"
          description="All you have to do is upload your file, and it will appear on the screen so you can modify it as much as you want. Once you're finished editing, just download a new version of the document!"
        />
      </GridItem>
      <GridItem>
        <Card
          title="Safe and Secure"
          path="/assets/uniquePoints/secure.png"
          description="We are the safest and most secure cloud storage for your PDF documents. Your documents are always safe because we use military-grade encryption to protect them from hackers, and we keep them in a private vault that only you can access."
        />
      </GridItem>
      <GridItem>
        <Card
          title="100% safe and secure"
          path="/assets/uniquePoints/conversion.png"
          description="Turn your scanned and digital documents from PDF to Word in just two clicks. Zero skill required. Anyone can convert their PDF to Word doc file in an instant."
        />
      </GridItem>
      <GridItem>
        <Card
          title="Create PDF"
          path="/assets/uniquePoints/create.png"
          description="Create new pages with any content and merge them with your existing PDFs. You can turn your PDF into a fillable form, create a new page for each page in the original document, or even just add new headers and footers."
        />
      </GridItem>
    </Grid>
  </Stack>
);

export default UniquePoints;
