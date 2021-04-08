import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import '../styles/app.css';
import '../styles/common.css'
import '../styles/daygrid.css'
import '../styles/timegrid.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
