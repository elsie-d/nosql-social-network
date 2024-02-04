const usernames =[
    'alex124',
    'bianca234',
    'clara897',
    'diana9090',
    'ernie888',
    'francisco222',
    'gordon344',
    'helen2348',
    'idira7821',
    'joss2349',
    'karina5672',
    'lolo098',
    'miguel14',
    'nacho09',
    'orlando15',
    'peter657',
    'qoqo10co',
    'rico355',
    'sammy759',
    'terry85',
    'urty36',
    'velvet89',
    'wanda53',
    'x567',
    'yolanda520',
    'zeze7895'

];

const thoughts =[
    'you are cool',
    'you are the best',
    'I am your fan',
    'love you',
    'lol you are funny',
    'you are iconic',
    'best of the best',
    'more content please',
    'congratulations!',
    'you can all come to my party',
    'wish you were here',
    'omg, no way!',
    'that is totally awesome',
    'I admire your work',
    'fan girling right now'
];

//Get random item
const getRandomArrItem = (arr) => arr[Math.floor(Math.random()*arr.length)];

//Get random user
getRandomUser = () =>
`${getRandomArrItem(usernames)}`;

//Get random thoughts to add to User Object

const getReandomThought = (int) => {
    const results = [];
    for (let i=0; i<int; i++){
        results.push({
            
        })
    }
}