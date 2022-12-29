import '../styles/globals.sass';
import '../styles/index.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { EditorProvider } from 'contexts/EditorContext';

import MainLayout from '../layouts/mainLayout';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <EditorProvider>
          <Component {...pageProps} />
        </EditorProvider>
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
