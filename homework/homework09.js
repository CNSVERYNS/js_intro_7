

// TASK 1 

function fizzBuzz1(number){
    if(number % 3 === 0 && number % 5 !== 0){
        return "Fizz";
    }else if(number % 5 === 0 && number % 3 !== 0){
        return "Buzz";
    }else if(number % 5 === 0 && number % 3 === 0){
        return "FizzBuzz";
}else{
    return number;
}
}

console.log(fizzBuzz1(3));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(15));
console.log(fizzBuzz1(7));

// TASK 2 

let myNumber = 15

function fizzBuzz2(){
    const myArray = [""];
for(let i = 1; i <= myNumber; i++){
    if(i % 3 === 0 && i % 5 !== 0){
        myArray[i] = "Fizz"
    }else if(i % 5 === 0 && i % 3 !== 0){
        myArray[i] = "Buzz" 
    }else if(i % 5 === 0 && i % 3 === 0){
        myArray[i] = "FizzBuzz"
    }else{
        myArray[i] = i
    }
}
return myArray.splice(1, myNumber)
}

console.log(fizzBuzz2(myNumber))

// TASK 3

let randoms = "abc1234  $#$%^# 19"

function findSumNumbers(){
    let result = 0
    for(let i = 0; i < randoms.length; i++){
        if(randoms[i] >= '0' && randoms[i] <= '9'){
            result += parseInt(randoms[i])
        }
    }
return result
}

console.log(findSumNumbers(randoms));

// TASK 4

let myString = "abc1acb2acb15acas"

function findBiggestNumber(){
    let result1 = ('')
    for(let i = 0; i < myString.length; i++){
        if(myString[i] >= "0" && myString[i] <= "9"){
            result1 += myString[i];
        }else{
            result1 += (' ')  
        }
}
return result1
}

console.log(findBiggestNumber(myString));

// need some help

// TASK 5

// TASK 6 

function fibonacciSeries1(fibonacci){
    const myFibonacci = [0, 1]
    if(fibonacci === 1){
        return [0]
    }else if(fibonacci === 2){
        return [0, 1]
    }
if(fibonacci > 2){
    for(let i = 2; i < fibonacci; i++){
        myFibonacci[i] = myFibonacci[i - 1] + myFibonacci[i - 2]
    }
}
return myFibonacci
}


console.log(fibonacciSeries1(20))

// TASK 7

function fibonacciSeries2(fibonacci){
    const myFibonacci = [0, 1]
    if(fibonacci === 1){
        return [0]
    }else if(fibonacci === 2){
        return [0, 1]
    }
if(fibonacci > 2){
    for(let i = 2; i < fibonacci; i++){
        myFibonacci[i] = myFibonacci[i - 1] + myFibonacci[i - 2]
    }
}
return myFibonacci[fibonacci - 1]
}

console.log(fibonacciSeries2(20))

// TASK 8

function findUniques(array1, array2){
const resultArray= array1.concat(array2)
return [...new Set(resultArray)]
}

console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]))

// TASK 9 

function isPowerOf3(number){
for(let i = 0; 3**i <= number; i++){

    if(number === 3**i){
        return true
    }
}
return false
}

console.log(isPowerOf3(45))


