import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

const LinkContainer = ({ children }) => (
    <Box
        userSelect="none"
        _hover={{ color: '#e94560' }}
        color="whitesmoke"
        fontSize={{ lg: 'xl', base: 'sm' }}
        fontWeight="bold"
    >
        {children}
    </Box>
);

interface NavProps {
    goToBottom: () => void;
}

const Nav: FC<NavProps> = ({ goToBottom }) => {
    const { pathname } = useRouter();

    if (pathname === '/register') {
        return (
            <Box display="flex" p="30px" w="100%" justifyContent="space-around">
                <LinkContainer>
                    <Link href="/">Home</Link>
                </LinkContainer>
                <LinkContainer>
                    <a
                        href="https://pes-alcoding-club.github.io/editorials/"
                        style={{ cursor: 'pointer' }}
                    >
                        Editorials
                    </a>
                </LinkContainer>
                <LinkContainer>
                    <Link href="/contests">Contests</Link>
                </LinkContainer>
                <LinkContainer>
                    <a
                        onClick={() => goToBottom()}
                        style={{ cursor: 'pointer' }}
                    >
                        Contact Us
                    </a>
                </LinkContainer>
            </Box>
        );
    } else if (pathname === '/contests') {
        return (
            <Box display="flex" p="30px" w="100%" justifyContent="space-around">
                <LinkContainer>
                    <Link href="/">Home</Link>
                </LinkContainer>
                <LinkContainer>
                    <a
                        href="https://calendar.google.com/calendar?cid=N3RsZGt1dXEwcW1mOW9ub2Jxb3ByZ2Z1cDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
                        style={{ cursor: 'pointer' }}
                    >
                        Calendar
                    </a>
                </LinkContainer>
                <LinkContainer>
                    <a
                        href="https://pes-alcoding-club.github.io/editorials/"
                        style={{ cursor: 'pointer' }}
                    >
                        Editorials
                    </a>
                </LinkContainer>
                <LinkContainer>
                    <a
                        onClick={() => goToBottom()}
                        style={{ cursor: 'pointer' }}
                    >
                        Contact Us
                    </a>
                </LinkContainer>
            </Box>
        );
    } else {
        return (
            <Box display="flex" p="30px" w="100%" justifyContent="space-around">
                <LinkContainer>
                    <a
                        href="https://calendar.google.com/calendar?cid=N3RsZGt1dXEwcW1mOW9ub2Jxb3ByZ2Z1cDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
                        style={{ cursor: 'pointer' }}
                    >
                        Calendar
                    </a>
                </LinkContainer>
                <LinkContainer>
                    <a
                        href="https://pes-alcoding-club.github.io/editorials/"
                        style={{ cursor: 'pointer' }}
                    >
                        Editorials
                    </a>
                </LinkContainer>
                <LinkContainer>
                    <Link href="/contests">Contests</Link>
                </LinkContainer>
                <LinkContainer>
                    <a
                        onClick={() => goToBottom()}
                        style={{ cursor: 'pointer' }}
                    >
                        Contact Us
                    </a>
                </LinkContainer>
            </Box>
        );
    }
};

export default Nav;
