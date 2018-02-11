const dog = [{name: 'Snickers', age: 2}, {name: 'Hugo',
              age: 8}];
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

//Regular 
console.log('hello');

//Interpolated
console.log('Hello I am a %s string!', 'poop');

//Styled
console.log('%c I am a great poop!', 'font-size:30px; background:blue;')

//Warning!
console.warn('WHAT?!? NO!');

//Error!
console.error('WAIT!');

//Info
console.info('We are great');

//Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('p'), 'Wrong!');

//Clear
console.clear();

//Viewing DOM Elements
console.dir(p);

console.clear();
//Grouping things together
dog.forEach(dog => { // you can also use 'console.collapse'
  console.group(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age}`);
  console.log(`${dog.name} is ${dog.age * 7} years oldss`);
  console.groupEnd(`${dog.name}`);
});

//Counting 
console.count('wes');
console.count('wes');
console.count('wes');
console.count('wes');

//Timing
console.time('fetching data');
fetch ('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(dta => {
    console.timeEnd('fetching data');
  });