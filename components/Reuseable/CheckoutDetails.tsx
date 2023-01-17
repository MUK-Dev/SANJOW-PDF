import {
  Divider,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useRef, useEffect } from 'react';

import useEditor from 'hooks/useEditor';

const CheckoutDetails = () => {
  const containerRef = useRef(null);
  const router = useRouter();
  const { previewFile, fName} = useEditor();

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    if (!previewFile) {
      router.push('/');
      return;
    }

    console.log(previewFile);
    

    const container = containerRef.current;
    let PSPDFKit: any;
    (async () => {
      PSPDFKit = await import('pspdfkit');

        if (PSPDFKit) {
          PSPDFKit.unload(container);
        }
      const initialViewState = new PSPDFKit.ViewState({
        readOnly: true,
      });
      try {
        const instance = await PSPDFKit?.load({
          container,
          document: previewFile || '/pspdfkit-web-demo.pdf',
          baseUrl: `${window.location.protocol}//${window.location.host}/`,
          initialViewState,
        });
        instance.setViewState((viewState: any) =>
          viewState.set('showToolbar', !viewState.showToolbar),
        );
      } catch (err) {
        console.error(err);
      }
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, [previewFile, router]);

  return (
    <Stack
      p="1.5em"
      position="relative"
      border="4px solid #7F90BB"
      borderRadius={8}
      bgColor="white"
      textAlign="center"
    >
      <Heading pb="0.5em" fontSize="1.2em">
        {fName} is ready
      </Heading>
      <Divider borderColor="#7F90BB" />
      <Heading fontSize="1em" pt="0.5em">
        Our Pricing
      </Heading>
      <Heading>$19.90</Heading>
      <Heading fontSize="1em" pb="0.5em">
        Every month
      </Heading>
      <div ref={containerRef} style={{ height: '25rem', width: '100%' }} />
      <Divider borderColor="#7F90BB" pb="0.5em" />
      <Heading fontSize="1em" py="0.5em">
        What's included
      </Heading>
      <UnorderedList textAlign="left" color="#7F90BB" px="2em">
        <ListItem>
          <Text color="black">Edit, fill, draw, print or save</Text>
        </ListItem>
        <ListItem>
          <Text color="black">Convert to any format</Text>
        </ListItem>
        <ListItem>
          <Text color="black">Access documents from anywhere</Text>
        </ListItem>
        <ListItem>
          <Text color="black">Customer support instant chat</Text>
        </ListItem>
      </UnorderedList>
      <Text fontSize="sm" textAlign="left">
        *The subscription has a 7 day free trial offer. If you do not cancel it
        during this period, your membership will be automatically activated for
        a $19.90 monthly fee. You can cancel your subscription at any time,
        before or after the end of the trial period.
      </Text>
    </Stack>
  );
};

export default CheckoutDetails;
