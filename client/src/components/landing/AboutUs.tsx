import { Box, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

const AboutUs = () => (
    <Box w="100vw" p="5">
        <Heading textAlign="center" my="35px" mx="auto">
            About Us
        </Heading>
        <Box w={{ lg: '50%', base: '95%' }} mx="auto">
            <Box
                mb={{ lg: '65px', base: '20px' }}
                padding={{ lg: '0 65px', base: '0' }}
            >
                <Text textAlign="justify" fontSize="lg">
                    The Alcoding Club is the official Competitive Programming
                    Club under the CSE Department of PES University. The club
                    aims to cultivate and promote the skills of competitive
                    programming and problem solving in the campus through our
                    workshops and discussions sessions, where we discuss
                    previous online competition problems and try to come up with
                    solutions to those problems. The competitions we participate
                    in can be found here on our{' '}
                    <span style={{ color: '#fd6378' }}>
                        <Link href="https://calendar.google.com/calendar?cid=N3RsZGt1dXEwcW1mOW9ub2Jxb3ByZ2Z1cDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
                            Calendar
                        </Link>
                    </span>
                    .
                </Text>
            </Box>
            <Box
                mb={{ lg: '40px', base: '10px' }}
                padding={{ lg: '0 80px', base: '0' }}
            >
                <Text textAlign="center" fontSize="lg">
                    The Alcoding Club is also responsible for representing the
                    university in various regional and international coding
                    competitions, from college fests, to major events like the
                    ACM ICPC, Google Kickstart and more. The Club also hosts
                    various competitions throughout the year.
                </Text>
            </Box>
            <Box
                mb={{ lg: '60px', base: '10px' }}
                padding={{ lg: '0 80px', base: '0' }}
            >
                <Text textAlign="center" fontSize="lg">
                    While most of the competitions we host are online, we also
                    host an annual flagship coding competition where students
                    from colleges all over the country compete. Finally, the
                    Alcoding Club undertakes various development projects every
                    year, and offers summer internships to work on the same. You
                    can check out our previous and ongoing projects{'  '}
                    <Link
                        color="#fd6378"
                        href="https://github.com/pes-alcoding-club"
                        userSelect="none"
                    >
                        here
                    </Link>
                    .
                </Text>
            </Box>
        </Box>
    </Box>
);

export default AboutUs;
