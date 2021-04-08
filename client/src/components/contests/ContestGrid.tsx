import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { contests } from '../../config';
import ContestCard from './ContestCard';

const ContestGrid = ({}) => {
    return (
        <SimpleGrid columns={{ lg: 3, md: 2, base: 1 }} spacing={5}>
            {contests.map(
                (
                    { date, name, problemsURL, solutionURL, tags },
                    key: number
                ) => (
                    <ContestCard
                        key={key}
                        name={name}
                        date={date}
                        problemsURL={problemsURL}
                        solutionURL={solutionURL}
                        tags={tags}
                    />
                )
            )}
        </SimpleGrid>
    );
};

export default ContestGrid;
