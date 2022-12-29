/* eslint-disable no-unsafe-optional-chaining */
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ToolbarItem } from 'pspdfkit';
import React, { useEffect, useRef, useState } from 'react';

import FilledBtn from '@Reuseables/FilledBtn';
import Modal from '@Reuseables/Modal';
import OutlinedBtn from '@Reuseables/OutlinedBtn';
import useEditor from 'hooks/useEditor';

export default function App() {
  const router = useRouter();
  const containerRef = useRef(null);
  const [isLoading] = useState(false);
  const {
    file,
    setShowConvertModal,
    showConvertModal,
    radioVal,
    setRadioVal,
    setInstance,
  } = useEditor();
  // eslint-disable-next-line no-console

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    if (!file) {
      router.push('/');
      return;
    }

    const container = containerRef.current;
    let PSPDFKit: any;
    (async () => {
      PSPDFKit = await import('pspdfkit');

      // if (PSPDFKit) {
      //   PSPDFKit.unload(container);
      // }

      const item: ToolbarItem = {
        type: 'custom',
        id: 'convertButton',
        title: '✔ Convert',
        className: 'bg-orange',
        onPress: () => setShowConvertModal?.(true),
      };
      const defaultTools = PSPDFKit.defaultToolbarItems;
      defaultTools[7].icon = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
   <polygon points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0 
     222.031,222.031 0,222.031 0,267.969 222.031,267.969 "/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
   `;

      await PSPDFKit?.load({
        initialViewState: new PSPDFKit.ViewState({
          sidebarMode: PSPDFKit.SidebarMode.THUMBNAILS,
        }),
        container,
        document: file || '/pspdfkit-web-demo.pdf',
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
        toolbarItems: [...defaultTools, item, { type: 'content-editor' }],
      }).then((newInstance: any) => {
        const items = newInstance.toolbarItems;
        items[19].title = 'Add Text';
        newInstance.setToolbarItems(
          items.filter(
            (i: any) => i.type !== 'export-pdf'
              && i.type !== 'note'
              && i.type !== 'print'
              && i.type !== 'search'
              && i.type !== 'search',
          ),
        );

        setInstance?.(newInstance);
      });
    })();

    // return () => PSPDFKit && PSPDFKit.unload(container);
  }, [file, router]);

  return (
    <>
      <div ref={containerRef} style={{ height: '100vh', width: '100%' }} />
      {showConvertModal && (
        <Modal isOpen={true}>
          <Stack py="4rem" px="4em" alignItems="center">
            <Image src="/assets/files.png" alt="file" w={70} />
            <Heading fontSize="sm" textAlign="center">
              Well done!
            </Heading>
            <Text fontSize="sm" textAlign="center">
              Your file is ready
            </Text>
            <RadioGroup onChange={setRadioVal} value={radioVal}>
              <Grid templateColumns="repeat(2,1fr)" gap="1em" py="1em">
                <GridItem>
                  <Radio value="none">PDF</Radio>
                </GridItem>
                <GridItem>
                  <Radio value="docX">DOCX</Radio>
                </GridItem>
                <GridItem>
                  <Radio value="pptx">PPT</Radio>
                </GridItem>
                <GridItem>
                  <Radio value="excel">Excel</Radio>
                </GridItem>
              </Grid>
            </RadioGroup>
            <Flex gap="1em">
              <OutlinedBtn
                w="100%"
                flexGrow={1}
                onClick={() => setShowConvertModal?.(false)}
                disabled={isLoading}
              >
                Cancel
              </OutlinedBtn>
              <FilledBtn
                w="100%"
                onClick={() => router.replace('/checkout')}
                disabled={isLoading}
              >
                {isLoading ? <Spinner /> : 'Download'}
              </FilledBtn>
            </Flex>
          </Stack>
        </Modal>
      )}
    </>
  );
}
