import { Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';

import CheckoutDetails from '@Reuseables/CheckoutDetails';
import CheckoutForm from '@Reuseables/CheckoutForm';

const CheckoutSection: FC = () => (
  <Grid
    templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
    px={{ base: '1em', md: '6em' }}
    gap="4em"
    transform="translateY(-4rem)"
    bgColor='white'
  >
    <GridItem>
      <CheckoutForm />
    </GridItem>
    <GridItem>
      <CheckoutDetails />
    </GridItem>
  </Grid>
);

export default CheckoutSection;
