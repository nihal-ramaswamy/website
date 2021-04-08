import {
    Badge,
    Box,
    Button,
    ButtonGroup,
    Heading,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react';
import React from 'react';

export interface ContestCardProps {
    name: string;
    date: string;
    tags: { tag: string; color: string }[];
    problemsURL: string;
    solutionURL: string;
}

const ContestCard: React.FC<ContestCardProps> = ({
    name,
    date,
    tags,
    problemsURL,
    solutionURL,
}) => (
    <Box
        pos="relative"
        display="flex"
        flexDirection="column"
        minW="0"
        wordBreak="break-word"
        backgroundColor="#fff"
        backgroundClip="border-box"
        border="1px solid rgba(0,0,0,.125)"
        borderRadius=".5rem"
        p="5"
        w="60%"
        h="100%"
        mx="auto"
        boxShadow="lg"
        transition={{ lg: 'ease-out', base: 'none' }}
        transitionDuration={{ lg: '.3s', base: 'none' }}
        _hover={{
            transform: 'translate(0, -7.5px)',
        }}
    >
        <Heading fontSize="3xl">{name}</Heading>
        <Box my="3">
            <Stack my="3" direction="row">
                {tags.map(({ tag, color }) => (
                    <Badge
                        key={tag}
                        variant="solid"
                        colorScheme={color}
                        borderRadius="sm"
                        fontWeight="bold"
                    >
                        {tag}
                    </Badge>
                ))}
            </Stack>
            <Text color="gray.500">{date}</Text>
        </Box>
        <ButtonGroup>
            <Link href={problemsURL} _hover={{ textDecoration: 'none' }}>
                <Button
                    size="sm"
                    fontSize="sm"
                    colorScheme="teal"
                    variant="solid"
                >
                    Problems
                </Button>
            </Link>
            <Link href={solutionURL} _hover={{ textDecoration: 'none' }}>
                <Button
                    size="sm"
                    fontSize="sm"
                    colorScheme="teal"
                    variant="outline"
                >
                    Solutions
                </Button>
            </Link>
        </ButtonGroup>
    </Box>
);

export default ContestCard;
