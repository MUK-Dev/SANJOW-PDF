import '../styles/globals.sass';
import '../styles/index.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useState } from 'react';

import MainLayout from '../layouts/mainLayout';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [file, setFile] = useState();

  const handleChange = async (e: any) => {
    // eslint-disable-next-line no-console
    console.log(e.target.files);

    setFile(e.target.files[0]);
    const buffer = await e.target.files[0].arrayBuffer();
    setFile(buffer);
    await router.push('/editor');
  };

  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} handleChange={handleChange} file={file} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
