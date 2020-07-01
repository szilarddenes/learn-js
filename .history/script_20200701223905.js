// objects

let cat = {
  name: 'Fluffy',
  age: 2,
  foods: {
    favorite: 'dry food',
    secondFavorite: 'fish',
  },
  eyeColor: 'orange',
  meow() {
    console.log('I say meeeeeeowwww');
  },
  end() {
    console.log(`this is the end`);
  },
};
let catTwo = {
  name: 'Repa',
  age: 3,
  foods: {
    favorite: 'minden',
    secondFavorite: 'fish',
  },
  eyeColor: 'blue',
  meow() {
    console.log('I say meeeeeeowwww');
  },
  end() {
    console.log(`this is the end`);
  },
};
cat.meow();

//arrays

let myFavouriteNumbers = [9, 7, 3, 4, 30];
let myFavoriteColoros = ['yellow', 'green'];
let myPets = [
  {
    cat: 'Meowsalot',
    species: 'dagi',
  },
  {
    catTwo: 'repacica',
    species: 'dagi2',
  },
  {
    catThree: 'REPA',
    species: 'dagi3',
  },
];

//adding to array
myFavoriteColoros.push('black');
console.log('myFavoriteColoros', myFavoriteColoros);

//having different functions to numbers and strings
let mynamme = 'szisz';
let myNumber = 7.89;
console.log('myNumber', myNumber.toFixed());
console.log('mynamme', mynamme.toUpperCase());

//removing from array based on index -- 0 starter
myFavoriteColoros.splice(2);
console.log('myFavoriteColoros', myFavoriteColoros);

//sort and addressing arrays

console.log('myPets', myPets[0].species);
console.log('myPets.length', myPets.length);
for (i = 0; i <= myPets.length; i++) {
  console.log(myPets[i].species);
  console.log(myPets[i]);
  i++;
}

//while loop

let counter = 0;
while (counter <= 4) {
  // document.write('The counter current status is' + counter + 'and' + (13 - counter) + 'is left behind.')
  console.log(
    'The counter current status is ' +
      counter +
      ' and ' +
      (4 - counter) +
      ' is left behind.<br>'
  );

  document.write(
    'The counter current status is ' +
      counter +
      ' and ' +
      (4 - counter) +
      ' is left behind.<br>'
  );
  counter++;
}

// function

// function doubleMe(x) {
//     return x * 2
// }

// function in function
inputAny = document.querySelectorAll('input');
console.log('inputAny', inputAny);

inputAny[(0, 1)].addEventListener('input', function (evt) {
  let input1 = document.getElementById('inputField').value;
  console.log('input1', input1);

  let input2 = document.getElementById('inputField2').value;
  console.log('input2', input2);

  window.input1 = input1;
  window.input2 = input2;

  // function createMultiplier(multiplier){
  //     return function(x){
  //         return x*multiplier
  //     }
  // }
  // let doubleMe= createMultiplier(2)
  // console.log('inner function ==== ', doubleMe(5))

  let a = input1;
  console.log('a', a);
  let b = input2;
  console.log('b', b);

  function szorzas(a) {
    return function (b) {
      return a * b;
    };
  }
  let res = szorzas(a);
  console.log(' the result of NB1 * NB2 is=== ', res(b));
});
// lesson learnt: if you have a function in function, then you have to call the inner function in a variable, and then call the outter function in the function of the inner ----higher order functions

//forEach
let myColors = ['yellow', 'green', 'red', 'blue'];

myColors.forEach(doSomethingWithArrays);

function doSomethingWithArrays(parameterName) {
  document.write('the color ' + parameterName + ' is a color. <br>');
}
//takeaway: element.forEach(!function!) --> function in the function of a random parameter.

myColors.forEach((parameter) => {
  document.write(
    'This is my firs ARROW Function. Plot the color::: ' + parameter + '<br>'
  );
});

// Return vs Mutating

let gyumolcsok = [
  { name: 'alma', jellemzo: 'savanyo', szin: 'piros', darab: 4 },
  { name: 'korte', jellemzo: 'kemeny', szin: 'sarga', darab: 1 },
  { name: 'dinnye', jellemzo: 'nehez', szin: 'zold', darab: 10 },
];

gyumolcsok.push({
  name: 'szolo',
  jellemzo: 'bor lesz belole',
  szin: 'valtozo',
});

//push method returns the array.length!!

//map method

let ourHello = gyumolcsok.map(testHello);

function testHello() {
  return 'hello';
}
console.log('ourHello', ourHello);

let ourJellemzo = gyumolcsok.map(fJellemzok);
console.log('ourJellemzo', ourJellemzo);

function fJellemzok(randomPar) {
  return randomPar.jellemzo;
}

//filter

let onlyKisebb = gyumolcsok.filter(szuresF);
console.log('onlyKisebb', onlyKisebb);

function szuresF(paramEter) {
  return paramEter.darab < 10; //or any other x.name == 'dinnye'
}

let onlySarga = gyumolcsok.filter(szuresF2);
console.log('onlySarga', onlySarga);
function szuresF2(pm2) {
  return pm2.szin == 'sarga'; //or any other x.name == 'dinnye'
}

// create a new array from an array from NoMans Land---from the Memory. so for a filtered one
//let leszures = gyumolcsok.filter(onlyKisebb).filter(onlySarga).map(fJellemzok);
// console.log("leszures", leszures)

//end
