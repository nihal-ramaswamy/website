import { Box, Button, Divider, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
    const { pathname } = useRouter();
    return (
        <Box
            w="100vw"
            p="10px"
            pb={{ base: pathname === '/' ? '85px' : '10px', lg: '10px' }}
            backgroundImage={`url(/shattered-island.gif)`}
            mt="100"
        >
            <Box display="flex" justifyContent="space-evenly">
                <Box
                    display="flex"
                    justifyContent="center"
                    width={{ base: '50%', lg: '25%' }}
                    height="100%"
                >
                    <Box width={{ lg: '70%', base: '100%' }}>
                        <Image
                            height="100%"
                            width="100%"
                            src="/Logo-w.png"
                            alt="alcoding logo"
                        />
                    </Box>
                </Box>
                <Box
                    display={{ lg: 'flex', base: 'none' }}
                    justifyContent="center"
                    flexDir="column"
                >
                    <Divider
                        orientation="vertical"
                        color="white"
                        height="80%"
                    />
                </Box>
                <Box display="flex" justifyContent="center" flexDir="column">
                    <a href="https://www.instagram.com/thealcodingclub/">
                        <Button
                            m="2"
                            w={{ lg: '100%', base: '90%' }}
                            fontSize={{ lg: 'xl', base: 'md' }}
                            _hover={{
                                bg: '#bc2a8d',
                                textColor: 'whitesmoke',
                            }}
                            leftIcon={<FaInstagram />}
                        >
                            Instagram
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/company/the-alcoding-club/">
                        <Button
                            m="2"
                            w={{ lg: '100%', base: '90%' }}
                            fontSize={{ lg: 'xl', base: 'md' }}
                            _hover={{
                                bg: '#0e76a8',
                                textColor: 'whitesmoke',
                            }}
                            leftIcon={<FaLinkedin />}
                        >
                            Linkedin
                        </Button>
                    </a>
                    <a href="https://github.com/pes-alcoding-club">
                        <Button
                            m="2"
                            w={{ lg: '100%', base: '90%' }}
                            fontSize={{ lg: 'xl', base: 'md' }}
                            _hover={{
                                bg: '#4A5568',
                                textColor: 'whitesmoke',
                            }}
                            leftIcon={<FaGithub />}
                        >
                            Github
                        </Button>
                    </a>
                    <a href="mailto:alcoding@pes.edu">
                        <Button
                            m="2"
                            w={{ lg: '100%', base: '90%' }}
                            fontSize={{ lg: 'xl', base: 'md' }}
                            _hover={{
                                bg: '#DB4437',
                                textColor: 'whitesmoke',
                            }}
                            leftIcon={<SiGmail />}
                        >
                            Email
                        </Button>
                    </a>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
