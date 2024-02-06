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

const thoughts = [
    'Coding is fun',
    'Hot chocolate is better than coffee',
    'Niners will win the superbowl 2/11/24',
    'We can all use a break from TSwift',
    'California is better than Texas',
    'The big earthquake is comming',
    'Blue birds are super cute',
    'Tulips are the best flowers',
    'Italian food is the best',
    'Taco Tuesdays are legit',
    'Waffles are better than pancakes',
    'Futbol not soccer',
    'Gelato is better than ice cream',
    'Holloween is not that cool',
    'Thanksgiving is the best holiday!',
    
];


const reactions = [
 'Cool!',
 'Awecome!',
 'Agree',
 'You rock!',
 'You lost your mind',
 'Did you read my mind?',
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

]



// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];



// Function to generate random reactions that we can add to thoughts object.
const getRandomReaction = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
        reactionBody: getRandomArrItem(reactions),
        username: getRandomArrItem(usernames)
      
    });
  }
  return results;
};

// Function to generate random thoughts that we can add to thoughts object.
const getRandonThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
          thoughtText: getRandomArrItem(thoughts),
          username: getRandomArrItem(usernames)
        
      });
    }
    return results;

}


// Export the functions for use in seed.js
module.exports = { getRandonThought, getRandomReaction };














/* 

//Get random item
const getRandomArrItem = (arr) => arr[Math.floor(Math.random()*arr.length)];

//Get random user
getRandomUser = () =>
`${getRandomArrItem(usernames)}`;

//Get random thoughts to add to User Object

const getRandomThought = (int) => {
    const results = [];
    for (let i=0; i<int; i++){
        results.push({
            
        })
    }
} */