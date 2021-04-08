import { Box, Button, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Nav from './Nav';

interface HeaderProps {
    showApplyBtn?: boolean;
    goToBottom: () => void;
}

const Header: React.FC<HeaderProps> = ({ showApplyBtn, goToBottom }) => (
    <Box w="100vw" backgroundImage={`url(/shattered-island.gif)`}>
        <a href="/" style={{ cursor: 'pointer' }}>
            <Box mx="auto" display="flex" justifyContent="center">
                <Image
                    height="250px"
                    width="250px"
                    src="/Logo-w.png"
                    alt="alcoding logo"
                    priority
                />
            </Box>
        </a>
        <Heading
            as="h2"
            textAlign="center"
            fontSize={{ base: '4xl', lg: '6xl' }}
        >
            <Link href="/">
                <span style={{ color: 'whitesmoke' }}>The Alcoding Club</span>
            </Link>
        </Heading>
        {showApplyBtn && (
            <Link href="/register">
                <Button
                    fontSize={{ lg: 'xl', base: 'md' }}
                    size="lg"
                    _hover={{
                        bg: '#b0152f',
                        textColor: 'whitesmoke',
                    }}
                    bgColor="#e94560"
                    mt="50px"
                    mx="auto"
                    mb={{ lg: '90px', base: '50px' }}
                    display="block"
                    textColor="whitesmoke"
                >
                    Apply to our Monthly Challenge
                </Button>
            </Link>
        )}
        <Nav goToBottom={goToBottom} />
    </Box>
);

export default Header;
