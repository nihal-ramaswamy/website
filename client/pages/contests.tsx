import { Box, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useRef } from 'react';
import Footer from '../src/components/common/Footer';
import Header from '../src/components/common/Header';
import ContestGrid from '../src/components/contests/ContestGrid';

interface ContestsProps {}

const Contests: React.FC<ContestsProps> = ({}) => {
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
                <Heading textAlign="center" my="10">
                    Previous Contests
                </Heading>
                <ContestGrid />
                <Footer />
            </Box>
        </>
    );
};

export default Contests;
