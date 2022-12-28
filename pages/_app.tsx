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
  const [fileName, setFileName] = useState('');

  const handleChange = async (e: any) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name.split('.')[0]);
    const buffer = await e.target.files[0].arrayBuffer();
    setFile(buffer);
    await router.push('/editor');
  };

  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} handleChange={handleChange} file={file} fileName={fileName} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
