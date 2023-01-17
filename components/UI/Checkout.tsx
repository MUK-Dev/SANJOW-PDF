/* eslint-disable no-throw-literal */
import { Box} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Footer from '@Reuseables/Footer';
import Header from '@Reuseables/Header';
import CheckoutHero from '@UI/CheckoutHero';
import CheckoutSection from '@UI/CheckoutSection';
import Reassurance from '@UI/Reassurance';

const Checkout = () => (
    <Box w='100%' minH='100%' position='absolute' bgColor='white' top={0} left={0}>
        <Box className="bg-gradient-to-right">
            <Header />
            <CheckoutHero />
        </Box>
        <CheckoutSection />
        <Reassurance className='' />
        <Footer quote={<></>} />
    </Box>
);

export default Checkout;
