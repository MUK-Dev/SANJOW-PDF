/* eslint-disable no-throw-literal */
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

import FilledBtn from '@Reuseables/FilledBtn';
import Footer from '@Reuseables/Footer';
import Header from '@Reuseables/Header';
import Modal from '@Reuseables/Modal';
import OutlinedBtn from '@Reuseables/OutlinedBtn';
import CheckoutHero from '@UI/CheckoutHero';
import CheckoutSection from '@UI/CheckoutSection';
import Reassurance from '@UI/Reassurance';

const Checkout = () => {
    const router = useRouter();
    const [showLeaveModal, setShowLeaveModal] = useState(false);

    // const handleRouteChange = useCallback(
    //     (url: any, { shallow }: any) => {          
    //       if(!showLeaveModal){
    //         setShowLeaveModal(true);
    //         throw 'Router change cancelled';
    //       } else {
    //         setShowLeaveModal(false);
    //         return url;
    //       }
    //     },
    //     [showLeaveModal],
    //   );
      
    //   // prompt the user if they try and leave with unsaved changes
    //   useEffect(() => {
    
    //     router.events.on('routeChangeStart', handleRouteChange);
    
    //     // If the component is unmounted, unsubscribe
    //     // from the event with the `off` method:
    //     return () => {
    //       router.events.off('routeChangeStart', handleRouteChange);
    //     };
    //   }, [showLeaveModal]);

    return (
        <>
            <Box className="bg-gradient-to-right">
                <Header />
                <CheckoutHero />
            </Box>
            <CheckoutSection />
            <Reassurance className='' />
            <Footer quote={<></>} />
            <Modal isOpen={showLeaveModal}>
        <Stack px="3em" py="2em" textAlign="center">
          <Heading fontSize="xl">
            Are you sure you want to
            <br />
            leave this page?
          </Heading>
          <Text pt="1em">
            Your file is almost ready and
            <br />
            your changes will not be saved
            <br />
            if you choose to leave now.
          </Text>
          <Flex w="100%" justifyContent="space-between" py="2em">
            <OutlinedBtn onClick={()=>{
              setShowLeaveModal(false);
              router.replace('/');
            }} >Yes</OutlinedBtn>
            <FilledBtn px="2em" onClick={() => setShowLeaveModal(false)}>
              No
            </FilledBtn>
          </Flex>
        </Stack>
      </Modal>
        </>
    );
};

export default Checkout;
