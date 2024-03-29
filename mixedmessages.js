//arrays to hold the parts of the greeting
const intro = [
    'Howdy neighbour!',
    'Top of the morning to ya!',
    'How areyou doing my friend?',
    'Look what the cat dragged in!',
    'Looks like a beautiful day!'
];   
const segway = [
    'You know what they say.',
    'My grandpa always said.',
    'As the saying goes, ',
    'A wise man once said - ',
    'My mom told me - '
];
const proverbs = [
    'Absence makes the heart grow fonder.',
    'An apple a day keeps the doctor away.',
    'The squeaky wheel gets the grease.',
    'The grass is always greener on the other side.',
    'The pen is mightier than the sword.',
    'All good things must come to an end.',
    'Don\'t bite the hand that feeds you.',
];
//Array to hold combined parts of the greeting
const finalGreeting = [];

//choose one from each of the 3 options (using Math.random and Math.floor)
const genRandom = (arr) => {  //generate random number to choose random element of array
    return Math.floor(Math.random() * arr.length);
}
const createMessage = (int, seg, prov) =>{
    let introToAdd = genRandom(int);
    let segwayToAdd = genRandom(seg);
    let proverbToAdd = genRandom(prov);
    finalGreeting.push(intro[introToAdd]);
    finalGreeting.push(segway[segwayToAdd]);
    finalGreeting.push(proverbs[proverbToAdd]);
    return finalGreeting.join(' ');
}

//present greeting
console.log(createMessage(intro, segway, proverbs));

