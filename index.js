/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
let newID = oldID + 1000000000;
let ageIsValid;

if (Number.isInteger(currentAge)){
  ageIsValid = true;
}else{
  ageIsValid = false;
}

let randomNumber = Math.floor(Math.random() * 20) + 1;

let randomInteger = Math.floor(randomNumber)

let randomUserID = Math.floor(Math.random() * 10) + 1000000001;