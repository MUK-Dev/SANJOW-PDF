import { Box } from '@chakra-ui/react';
import React from 'react';

import Footer from '@Reuseables/Footer';
import Header from '@Reuseables/Header';
import CheckoutHero from '@UI/CheckoutHero';
import CheckoutSection from '@UI/CheckoutSection';
import Reassurance from '@UI/Reassurance';

const Checkout = () => (
    <>
        <Box className="bg-gradient-to-right">
            <Header/>
            <CheckoutHero/>
        </Box>
        <CheckoutSection/>
        <Reassurance className='' />
        <Footer quote={<></>} />
    </>
);

export default Checkout;
