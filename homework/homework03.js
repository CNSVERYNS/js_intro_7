

// TASK 1

let random1 = Math.floor(Math.random() * (100) + 1); 
let random2 = Math.floor(Math.random() * (100) + 1);
let random3 = Math.floor(Math.random() * (100) + 1); 

let avarage = (random1 + random2 + random3) / 3;

result = "true" ? avarage >= 50 : "false";

console.log(avarage);
console.log(result);

// ------------------------------------------------------------------------------

// TASK 2 

let random4 = Math.floor(Math.random() * (3) + 1); 
let random5 = Math.floor(Math.random() * (3) + 1); 
let random6 = Math.floor(Math.random() * (3) + 1); 

if(random4 !== random5 && random4 !== random6 && random5 !== random6){
    return console.log("NO MATCH");
}
else if(random4 === random5 && random4 !== random6 || random4 === random6 && random4 !== random5 || random5 === random6 && random5 !== random4){
    return console.log("DOUBLE MATCH");
} 
else {
    return console.log("TRIPLE MATCH");
}


// ------------------------------------------------------------------------------

// TASK 3 

function hasA(WORD){
    return WORD.toUpperCase().includes("A");
}

  
// ------------------------------------------------------------------------------

// TASK 4

let word = "15" 

function doubleOrTripleWord(word){
        if (word.length % 2 === 0){
            return word + word + word;
        } else
            return word + word
        }
    

console.log(doubleOrTripleWord(word));
// ------------------------------------------------------------------------------

// TASK 5
let word1 = "Hello World"

function firstWord(word1){
    return word1.slice(0, word1.indexOf(" "))
}

console.log(firstWord(word1));
// ------------------------------------------------------------------------------

// TASK 6

let word2 = "Hello Dude";

function lastWord(deneme){
if (deneme.includes(" ")){
    return deneme.slice(deneme.lastIndexOf(" ") + 1);
} else {
    return deneme;
}
} 

console.log(lastWord(word2));

// ------------------------------------------------------------------------------

// TASK 7

let word3 = "try";

function firstlastWord(deneme2){
    return deneme2.slice(0, deneme2.indexOf(" ")) + deneme2.slice(deneme2.lastIndexOf(" ") + 1)
}

console.log(firstlastWord(word3));

// ------------------------------------------------------------------------------

// TASK 8 

let vowel = "aeiouAEIOU"

function startVowel(word4){
    return (vowel.includes(word4.charAt(0)))
}

console.log(startVowel("aword4"));
// ------------------------------------------------------------------------------

// TASK 9
let word5 = "HelloWorld"
let last4 = word5.slice(word5.length - 4)
let first4 = word5.slice(0, 4)

function swap4(word5){
if(word5.length >= 8){
    return last4 + word5.slice(3, word5.length - 4) + first4;

}else{ 
    return "";
}
}

console.log(swap4(word5));
// ------------------------------------------------------------------------------

// TASK 10

let sentence1 = "Hello my friend how is your day going?"
let firstWord = sentence1.slice(0, sentence1.indexOf(" "))
let lastWord = sentence1.slice(sentence1.lastIndexOf(" "))

function swapFirstLastWord(str3){
    if(str3.includes(" ")){

     return lastWord + str3.slice(str3.indexOf(" "), str3.lastIndexOf(" ") + 1) + firstWord;
    }else{
        return "";
    } 
}

console.log(swapFirstLastWord(sentence1));



