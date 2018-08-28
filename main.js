const imaString = 'hi';

console.log ('this is the first line of code for js part deux');

const age = 20;

if (age >= 21) {
    console.log ('old enough to drink')
} else if (age < 21){
    console.log ('not old enough yet')
}

// === checks value and data type
// == just checks value
//ex:
/*
const a = 1;
const b = '1';

a === b //false
a == b //true

//try to never use '=='

// replace the first '=' with a '!' to say 'NOT'
a !== b //true

a != b//false
*/


// && means 'AND' 
// || means 'OR'
const favoriteColor = 'blue'
const favoriteAnimal = 'bear'

if (favoriteAnimal==='bear' && favoriteColor==='blue'){
  console.log ('welcome to the club');
} else if (favoriteAnimal==='cat' || favoriteColor==='red'){
  console.log ('$500 to join the club');
} else {
    console.log ('go away');
}

const pie = 'peach';
console.log('pie length:', pie.length);
console.log('#3', pie.charAt(2));
console.log('indexof cat:', pie.indexOf('cat'));
console.log('indexof pea:', pie.indexOf('pea'));

const quote = 'winter is coming';
const newQuote = quote.replace(/is/g,"ain't");
console.log('newQuote:',newQuote);

//object
const fancyObject = {};

fancyObject.color = 'red';
fancyObject['number'] = 10;
console.log("fancyObject", fancyObject);
