

// TASK 1 

let str1 = "Hello"

function hasLowerCase(){
   if(str1.toUpperCase() !== str1){
    return true;
   }
   return false;
}

console.log(hasLowerCase(str1));

// TASK 2

const myArray = [0, 1, 2, 3]
const testArray = []

function noZero(){
    
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] !== 0) {
            testArray.push(myArray[i])
    }
}
return testArray
}

console.log(noZero(myArray));

// TASK 3 

const myArray1 = [0, 1, 2, 3]

function numberAndSquare(){
    for(let i = 0; i < myArray1.length; i++){
        myArray1[i] = [myArray1[i], (myArray1[i] * myArray1[i])]
    }
return myArray1
}

console.log(numberAndSquare(myArray1));

// TASK 4 

const myArray2 =[["abc", "def", "123", "Javascript", "Hello"], "23"]

function containsValue(){
if(myArray2[0].includes(myArray2[1])){
    return true
}
return false
}

console.log(containsValue(myArray2));

// TASK 5 

let sentence = "";
const testArray1 = sentence.split(" ");

function reverseSentence() {
    const emptyArray = [];
    if(testArray1.length <= 1){
        console.log("There is not enough words!")
    }else {
    for (let i = testArray1.length - 1; i >= 0; i--) {
        emptyArray.push(testArray1[i]);
    }
    }
    return emptyArray.join(" ");
}


console.log(reverseSentence(sentence));

// TASK 6 

let myString = "123Javascript #$%is fun"
const testArray2 = myString.split("")


function removeStringSpecialsDigits(){
const emptyArray2 = [];
for(let i =0; i < testArray2.length; i++){
    if(testArray2[i] >= 'a' && testArray2[i] <= 'z'|| testArray2[i] >= 'A' && testArray2[i] <= 'Z' ||testArray2[i] === " "){
        emptyArray2.push(testArray2[i])  
    }
 
}
let resultString = emptyArray2.join("")
return resultString;
}

console.log(removeStringSpecialsDigits(myString));


// TASK 7 

const myArray3 = ["123Javascript", "#$%is", "fun"];

function removeArraySpecialsDigits() {
    const emptyArray3 = [];
    
    for (let i = 0; i < myArray3.length; i++) {
        emptyArray3[i] = '';
        for (let j = 0; j < myArray3[i].length; j++) {
            if (
                (myArray3[i][j] >= 'a' && myArray3[i][j] <= 'z') ||
                (myArray3[i][j] >= 'A' && myArray3[i][j] <= 'Z') ||
                myArray3[i][j] === ' '
            ) {
                emptyArray3[i] += myArray3[i][j];
            }
        }
    }
    
    return emptyArray3.join(' ');
}

console.log(removeArraySpecialsDigits(myArray3));

// TASK 8

const myArray4 = ( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] )
function getCommons(inputArray) {
    const emptyArray4 = [];
    const array1 = inputArray[0];
    const array2 = inputArray[1];
  
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          emptyArray4.push(array1[i]);
        }
      }
    }
  
    return emptyArray4;
  }
  

console.log(getCommons(myArray4));

// TASK 9

const myArray5 = ["xyz", 123, "#$%"];

function noXInVariables() {
    const emptyArray5 = [];

    for (let i = 0; i < myArray5.length; i++) {
        const element = myArray5[i];


        if (element !== 'x' && element !== 'X') {
            emptyArray5.push(element);
        }
    }

    return emptyArray5;
}

console.log(noXInVariables(myArray5))