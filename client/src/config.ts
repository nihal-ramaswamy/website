export const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg'];

export const BASEURL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/'
        : 'https://alcoding-website-backend.herokuapp.com/';

export interface IContest {
    name: string;
    tags: { tag: string; color: string }[];
    problemsURL: string;
    solutionURL: string;
    date: string;
}

export const contests: IContest[] = [
    {
        name: 'Jan Contest',
        tags: [{ color: 'purple', tag: 'space' }],
        problemsURL: 'http://www.google.com',
        solutionURL: 'www.google.com',
        date: '29-02-20',
    },
    {
        name: 'Feb Contest',
        tags: [{ color: 'green', tag: 'easy' }],
        problemsURL: 'www.google.com',
        solutionURL: 'www.google.com',
        date: '29-02-20',
    },
    {
        name: 'Sept Contest',
        tags: [{ color: 'red', tag: 'hard' }],
        problemsURL: 'www.google.com',
        solutionURL: 'www.google.com',
        date: '29-02-20',
    },
    {
        name: 'Jan Contest',
        tags: [{ color: 'purple', tag: 'space' }],
        problemsURL: 'www.google.com',
        solutionURL: 'www.google.com',
        date: '29-02-20',
    },
    {
        name: 'Feb Contest',
        tags: [{ color: 'purple', tag: 'space' }],
        problemsURL: 'www.google.com',
        solutionURL: 'www.google.com',
        date: '29-02-20',
    },
    {
        name: 'Sept Contest',
        tags: [{ color: 'purple', tag: 'space' }],
        problemsURL: 'www.google.com',
        solutionURL: 'www.google.com',
        date: '29-02-20',
    },
];
