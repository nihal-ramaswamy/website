import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useRef } from 'react';
import Floating from '../src/components/common/Floating';
import Footer from '../src/components/common/Footer';
import Header from '../src/components/common/Header';
import AboutUs from '../src/components/landing/AboutUs';
import Carousel from '../src/components/landing/Carousel';
import { images } from '../src/config';

const Landing = () => {
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
            <Box ref={containerRef}>
                <Header showApplyBtn goToBottom={goToBottom} />
                <AboutUs />
                <Carousel data={images} />
                <Footer />
                <Floating />
            </Box>
        </>
    );
};

export default Landing;
