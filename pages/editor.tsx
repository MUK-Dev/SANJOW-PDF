import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';

export default function App(props: any) {
  const { file } = props;
  const router = useRouter();
  const containerRef = useRef(null);
  // eslint-disable-next-line no-console
  console.log(file);

  const convertFunc = async (fileData: any) => {
    const res = await axios.post(
      'https://simplified-pdf.uc.r.appspot.com/api/convert-file',
      { filedata: fileData },
    );
    const downbutt: any = document.getElementById('hidd-down');
    downbutt.href = (await 'data:application/msword;base64,')
      // eslint-disable-next-line no-unsafe-optional-chaining
      + res?.data?.result?.document?.docData;
    downbutt.download = 'response.doc';
    downbutt.target = '_self';
    downbutt.click();
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    file ? null : router.push('/');
    const container = containerRef.current;
    let PSPDFKit: any;
    let instance: any;
    (async () => {
      PSPDFKit = await import('pspdfkit');

      if (PSPDFKit) {
        PSPDFKit.unload(container);
      }

      const item = {
        type: 'custom',
        id: 'convertButton',
        title: 'Convert',
        onPress: async () => {
          instance.exportPDF().then(async (buffer: any) => {
            // const int8 = new Uint8Array(buffer);
            const blob = new Blob([buffer], { type: 'application/pdf' });
            const fileName = 'new-doc.pdf';
            const nav = window.navigator as any;
            if (nav.msSaveOrOpenBlob) {
              nav.msSaveOrOpenBlob(blob, fileName);
            } else {
              const b64 = Buffer.from(buffer).toString('base64');
              // let pdfbase64 = await btoa(String.fromCharCode.apply(null, int8 ))
              await convertFunc(b64);
            }
          });
        },
      };
      await PSPDFKit?.load({
        container,
        document: file || '/pspdfkit-web-demo.pdf',
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
        toolbarItems: [
          ...PSPDFKit.defaultToolbarItems,
          item,
          { type: 'content-editor' },
        ],
      }).then((newInstance: any) => {
        instance = newInstance;
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, [file, router]);

  return (
    <>
      <a style={{ display: 'none' }} id="hidd-down" />
      <div ref={containerRef} style={{ height: '100vh', width: '100%' }} />
    </>
  );
}
