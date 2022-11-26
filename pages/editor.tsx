import React, { useEffect, useRef } from 'react';

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit: any;

    (async () => {
      PSPDFKit = await import('pspdfkit');

      if (PSPDFKit) {
        PSPDFKit.unload(container);
      }

      await PSPDFKit.load({
        container,
        document: '/pspdfkit-web-demo.pdf',
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return <div ref={containerRef} style={{ height: '100vh' }} />;
}
