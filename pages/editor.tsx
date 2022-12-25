/* eslint-disable no-unsafe-optional-chaining */
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToolbarItem } from 'pspdfkit';
import React, { useEffect, useRef, useState } from 'react';

import FilledBtn from '@Reuseables/FilledBtn';
import Modal from '@Reuseables/Modal';
import OutlinedBtn from '@Reuseables/OutlinedBtn';

export default function App(props: any) {
  const { file } = props;
  const router = useRouter();
  const containerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [radioVal, setRadioVal] = useState('pdf');
  const [instance, setInstance] = useState<any>(null);
  // eslint-disable-next-line no-console

  const convertFunc = async (fileData: any, fileType: string) => {
    const res = await axios.post(
      'https://simplified-pdf.uc.r.appspot.com/api/convert-file',
      { filedata: fileData },
    );
    const downbutt: any = document.getElementById('hidd-down');
    downbutt.href = await `data:application/${fileType};base64,` + res?.data?.result?.document?.docData;
    downbutt.download = 'response.doc';
    downbutt.target = '_self';
    downbutt.click();
  };

  const runDownload = async () => {
    if (!instance) return;
    instance.exportPDF().then(async (buffer: any) => {
      // const int8 = new Uint8Array(buffer);
      const blob = new Blob([buffer], { type: 'application/pdf' });
      const fileName = 'new-doc.pdf';
      const nav = window.navigator as any;
      console.log(buffer);
      if (nav.msSaveOrOpenBlob) {
        nav.msSaveOrOpenBlob(blob, fileName);
      } else {
        const b64 = Buffer.from(buffer).toString('base64');
        // let pdfbase64 = await btoa(String.fromCharCode.apply(null, int8 ))
        await convertFunc(b64, radioVal);
      }
    });
  };

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

      if (PSPDFKit) {
        PSPDFKit.unload(container);
      }

      const item: ToolbarItem = {
        type: 'custom',
        id: 'convertButton',
        title: '✔ Convert',
        className: 'bg-orange',
        onPress: () => setShowModal(true),
      };
      const defaultTools = PSPDFKit.defaultToolbarItems;
      defaultTools[7].icon = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
   <polygon points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0 
     222.031,222.031 0,222.031 0,267.969 222.031,267.969 "/>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   </svg>
   `;

      // defaultTools = defaultTools.map(item => {
      //   if (
      // item.type === 'note' ||
      // item.type === 'print' ||
      // item.type === 'search' ||
      // item.type === 'export-pdf'
      //   )
      //     return;
      //   else return item;
      // });

      // console.log(defaultTools);

      await PSPDFKit?.load({
        initialViewState: new PSPDFKit.ViewState({
          sidebarMode: PSPDFKit.SidebarMode.THUMBNAILS,
        }),
        container,
        document: file || '/pspdfkit-web-demo.pdf',
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
        toolbarItems: [...defaultTools, item, { type: 'content-editor' }],
      }).then((newInstance: any) => {
        // let items = newInstance.toolbarItems;
        // items = items.map((i) => {
        //   if (
        //     i.type === 'note'
        //     || i.type === 'print'
        //     || i.type === 'search'
        //     || i.type === 'export-pdf'
        //   ) { return; }
        //   return i;
        // });
        // console.log(items);
        // items.push(item);
        // items.push({ type: 'content-editor' });
        // newInstance.setToolbarItems(items);
        const items = newInstance.toolbarItems;
        items[19].title = 'Add Text';
        // items[19].icon = '';
        newInstance.setToolbarItems(
          items.filter(
            (i: any) => i.type !== 'export-pdf'
              && i.type !== 'note'
              && i.type !== 'print'
              && i.type !== 'search'
              && i.type !== 'search',
          ),
        );

        setInstance(newInstance);
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, [file, router]);

  return (
    <>
      <a style={{ display: 'none' }} id="hidd-down" />
      <div ref={containerRef} style={{ height: '100vh', width: '100%' }} />
      {showModal && (
        <Modal isOpen={true}>
          <Stack py="4rem" px="4em" alignItems="center">
            <Image src="/assets/files.png" alt="file" w={70} />
            <Heading fontSize="sm" textAlign="center">
              Well done!
            </Heading>
            <Text fontSize="sm" textAlign="center">
              Your file is ready
            </Text>
            <RadioGroup onChange={setRadioVal} value={radioVal} >

            <Grid templateColumns="repeat(2,1fr)" gap="1em" py="1em">
              <GridItem>
                <Radio value="pdf">PDF</Radio>
              </GridItem>
              <GridItem>
                <Radio value="docx">DOCX</Radio>
              </GridItem>
              <GridItem>
                <Radio value="jpeg">JPEG</Radio>
              </GridItem>
              <GridItem>
                <Radio value="doc">DOC</Radio>
              </GridItem>
            </Grid>
            </RadioGroup>
            <Flex gap="1em">
              <OutlinedBtn onClick={() => setShowModal(false)} >Cancel</OutlinedBtn>
              <FilledBtn onClick={runDownload} >Download</FilledBtn>
            </Flex>
          </Stack>
        </Modal>
      )}
    </>
  );
}
