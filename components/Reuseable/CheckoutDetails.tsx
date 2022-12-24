import { Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';

const CheckoutDetails = () => (
    <Stack p="3em"
    position="relative"
    border="4px solid #7F90BB"
    borderRadius={8}
    bgColor='white' >
        <Image src='/assets/checkoutDetails/editing.png' alt='editing' objectFit='contain' h='25rem' />
        <Heading fontSize='xl' pt='2em' >
            Edit, fill, draw, print or save<br/>
            Convert to any format<br/>
            Access documents from anywhere<br/>
            Customer support instant chat
        </Heading>
    </Stack>
);

export default CheckoutDetails;
