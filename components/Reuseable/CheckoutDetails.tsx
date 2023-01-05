import { Heading, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useRef, useEffect } from 'react';

import useEditor from 'hooks/useEditor';

const CheckoutDetails = () => {
  const containerRef = useRef(null);
  const router = useRouter();
  const { previewFile } = useEditor();
  console.log(previewFile);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    if (!previewFile) {
      router.push('/');
      return;
    }

    const container = containerRef.current;
    let PSPDFKit: any;
    (async () => {
      PSPDFKit = await import('pspdfkit');

      //   if (PSPDFKit) {
      //     PSPDFKit.unload(container);
      //   }
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
        instance.setViewState((viewState:any) => viewState.set("showToolbar", !viewState.showToolbar));
      } catch (err) {
        console.error(err);
      }
    })();

    // return () => PSPDFKit && PSPDFKit.unload(container);
  }, [previewFile, router]);

  return (
    <Stack
      p="3em"
      position="relative"
      border="4px solid #7F90BB"
      borderRadius={8}
      bgColor="white"
    >
      <div ref={containerRef} style={{ height: '25rem', width: '100%' }} />
      <Heading fontSize="xl" pt="2em">
        Edit, fill, draw, print or save
        <br />
        Convert to any format
        <br />
        Access documents from anywhere
        <br />
        Customer support instant chat
      </Heading>
    </Stack>
  );
};

export default CheckoutDetails;
