

// TASK-1

let str = "javascript"
let str1 = "Javascript"

function hasUpperCase(str){
    if(str.toLowerCase() === str){
        return false
    }
    return true
}

console.log(hasUpperCase(str));
console.log(hasUpperCase(str1));

// TASK-2

let str2 = "123Hello   Hello23"
let str3 = "123Hello World149"
let str4 = ""

function noDigit(str){
    for(let i = 0; i < str.length; i++){
        if(str[i] >= "A" && str[i] <= "Z" || str[i] >= "a" && str[i] <= "z" || str[i] === " ")
        str4 += str[i]
    }
    return str4
}

console.log(noDigit(str2));

// TASK-3 (needs to talk)

const vowel = ['q','w','r','t','y','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
let str5 = "TechGlobal";
let str6 = "";

function noVowel(){
    for(let i = 0; i < str5.length; i++){
        if(vowel.includes(str5[i].toLowerCase()))
        str6 += str5[i]
    }
    return str6
}

console.log(noVowel(str5));

// TASK-4

const array = [1, 2, 3, 4, 13, 13, 15];
const newArray = []

function no13(){
    for(number of array){
        if(number != 13){
            newArray.push(number)
        }
    }
    return newArray
}

console.log(no13(array));

// TASK-5

let numbers = (6, 2, 3);

function middleInt(a, b, c) {
    if ((a <= b && b <= c) || (c <= b && b <= a)) {
      return b;
    } else if ((b <= a && a <= c) || (c <= a && a <= b)) {
      return a;
    } else {
      return c;
    }
  }
  
console.log(middleInt(6, 2, 3));

// TASK-6

let str7 = "John’s age is 29";


function sumOfDigits(){
    let sumOfTheNumbers = 0
    for(i = 0; i <= str7.length; i++){
        if(str7[i] >= 0 && str7[i] <= 9){
            sumOfTheNumbers += Number(str7[i]);
        }
    }
    return sumOfTheNumbers
}

console.log(sumOfDigits(str7));

// TASK-7 (check again)

const myArray = [1, 3, 5, 6]

function arrFactorial(myArray){
    for(let i = 0; i < myArray.length; i++){
    function factorial(number){
        let result = 1
        for(let i = 1; i <= number; i++){
            result *= i 
        }
        return result;
    }
    myArray[i] = factorial(myArray[i]);
}
    return myArray
}

console.log(arrFactorial(myArray));

// TASK-8

let word = "abc123$#%"

function categorizeCharacters(word){
    let cat = ["","",""]
    for(let i = 0; i < word.length; i++){
        if(word[i] >= 0 && word[i] <= 9){
         cat[1] += word[i]
    }else if(word[i] >= 'a' && word[i] <= 'z' || word[i] >= 'A' && word[i] <= 'Z'){
         cat[0] += word[i]
    }else{
         cat[2] += word[i]
    }
}
return cat
}

console.log(categorizeCharacters(word));