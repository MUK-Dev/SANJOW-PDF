import '../styles/globals.sass';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import MainLayout from '../layouts/mainLayout';
import theme from '../styles/theme';
import { useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [file, setFile] = useState()

  const handleChange = async (e: any) => {
    setFile(e.target.files[0])
    let buffer = await e.target.files[0].arrayBuffer()
    setFile(buffer)
    router.push("/editor")
  }

  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} handleChange={handleChange} file={file} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
