


// TASK1 

let str = " Hello   Amigo  "

function noSpace(str){
   return str.replaceAll(" ", "") 
}

console.log(noSpace(str));

// TASK2

let str1 = "  Hello Guys   "

function replaceFirstLast(){
    str1 = str1.trim();
    let firstChar = str1[0];
    let lastChar = str1[str1.length - 1]
    let middle = str1.slice(1, -1);

    if(str1.length <= 1) {
        return ("")   
    }else if(str1.length > 1){
        return `${lastChar}${middle}${firstChar} `
    }
}

console.log(replaceFirstLast(str1));


// TASK3

let str2 =('Hello Amigos');
const vowels = ['a','e','i','o','u']

function hasVowel(){
    str2 = str2.toLowerCase();
    for(let i = 0; i <= str2.length; i++){
        if(vowels.includes(str2[i])){
            return true
        }
    }
return false
}

console.log(hasVowel(str2));

// TASK4

let birthYear = 2017

function checkAge(){
    if(2023 - birthYear < 16 || 2023 - birthYear > 120){
        return "AGE IS NOT ALLOWED"
    }else{
        return "AGE IS ALLOWED"
    }
}

console.log(checkAge(birthYear));

// TASK5

const numbers = [7, 9, 0]

function averageOfEdges(numbers){
    return ((Math.min(...numbers) + Math.max(...numbers)) / 2)
}

console.log(averageOfEdges(numbers));

// TASK6

const str3 = ["apple", "123", "ABC", "javascript"] 

function noA(){
    for(let i = 0; i < str3.length; i++){
        if(str3[i].startsWith('a') || str3[i].startsWith('A')){
            str3[i] = "###"
        }
        
    }
    return str3
}
console.log(noA(str3));

// TASK7

const numbers1 = [10, 11, 12, 13, 14, 15];

function no3and5(){
    for(let i = 0; i < numbers1.length; i++){
        if(numbers1[i] % 15 === 0 ){
            numbers1[i] = 101
        }else if(numbers1[i] % 5 === 0){
            numbers1[i] = 99
        }else if(numbers1[i] % 3 === 0){
            numbers1[i] = 100
        }
    }
    return numbers1
}

console.log(no3and5(numbers1));

// TASK8 (needs to work)

const numbers2 = [41, 53, 19, 47, 67];
count = 0

function countPrimes(){
for(let i = 0; i <= numbers2.length; i++)
number = numbers2[i]
function findPrime(){
    countPrime = 0
    for(let i = 0; i <= number; i++){
        if(number % i === 0) count++
    }
    function caltulate(){
        if(count === 2){
            return countPrime++
        }
        
    }
    return caltulate()
}
return findPrime()
}

console.log(countPrimes(numbers2));

// TASK9 (needs to work)

const array = [10, 20, 35, 20, 35, 60, 70, 60]

function removeDuplicates(){
for(let i = 0; i < array.length; i++){
    for(let x = 0; x < array.length; x++){
if(array[i] - array[x] === 0){
    return array[i].remove
}
}
}
return array
}

console.log(array)
console.log(removeDuplicates(array))

// TASK10

let dob = "15/30/2020"

function isDateFormatValid(){
    dob = dob.split('/')
    if(dob.length = 3 && dob[0].toString().length === 2 && dob[1].toString().length === 2 && dob[2].toString().length === 4){
        return true  
}
return false
}

console.log(isDateFormatValid(dob));

// TASK11

// TASK12

// TASK13


