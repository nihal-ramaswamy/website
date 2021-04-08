import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useRef } from 'react';
import AboutContest from '../src/components/register/AboutContest';
import Footer from '../src/components/common/Footer';
import Form from '../src/components/register/Form';
import Header from '../src/components/common/Header';

const Register = () => {
    const containerRef = useRef();
    const goToBottom = () => {
        // @ts-ignore
        containerRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
        });
    };

    return (
        <>
            <Head>
                <title>The Alcoding Club</title>
            </Head>
            <Box w="100vw" ref={containerRef}>
                <Header goToBottom={goToBottom} />
                <AboutContest />
                <Form />
                <Footer />
            </Box>
        </>
    );
};

export default Register;
