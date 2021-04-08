import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
// help from: https://www.youtube.com/watch?v=l1MYfu5YWHc :)

interface CarouselProps {
    data: any[];
}

const Carousel: FC<CarouselProps> = ({ data }) => {
    const [current, setCurrent] = useState<number>(0);
    const increment = () => setCurrent((current + 1) % data.length);
    const decrement = () => {
        setCurrent(current !== 0 ? current - 1 : data.length - 1);
    };

    return (
        <Box
            my="10"
            mx="auto"
            w="80%"
            display="flex"
            justifyContent="center"
            userSelect="none"
            position="relative"
        >
            <FaArrowCircleLeft
                cursor="pointer"
                size="35"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '20%',
                    zIndex: 10,
                }}
                onClick={decrement}
            />
            {data.map((src, key) => (
                <Box
                    position="relative"
                    zIndex="1"
                    key={key}
                    opacity={key === current ? '1' : '0'}
                    transitionDuration={key === current ? '1s' : '1s ease'}
                    transform={`scale(${key === current ? '1.08' : '1'})`}
                >
                    {key === current && (
                        <Image
                            alt="Alcoding Club Contest"
                            width="778px"
                            height="556px"
                            src={src}
                            quality={100}
                        />
                    )}
                </Box>
            ))}
            <FaArrowCircleRight
                cursor="pointer"
                size="35"
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '20%',
                    zIndex: 10,
                }}
                onClick={increment}
            />
        </Box>
    );
};

export default Carousel;
