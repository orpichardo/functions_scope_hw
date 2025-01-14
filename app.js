// 1.1. What is the difference between a parameter and an argument?

// The parameter is the name that you give the function.  The argument is the value that we pass to the function that we give it.

// 1.2. Within a function, what is the difference between return and console.log?

//console.log tests your code. Return is used for returning values.

// 1. 3. What are the implications of the ability of a function to return a value?

//the values that a function returned when its complete for ex. true or false. 

// 2. calculateCube
function calculateCube(num) {
    return num * num * num;
}

console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
  if (letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u') {
    return true;
  } else {
return false;
  }
}

console.log(isAVowel("a"));



// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let getTwoLengths = ["Hank", "Hippopopalous"]
        return [word1.length, word2.length]
    }

    //just adding return [word1.length, word2.length] works. you dont have to include line35

console.log(getTwoLengths("Hank", "Hippopopalous"));


// 5. sumArray
function sumArray(arr){
        let sumArray = 0;
        for (i = 0; i < arr.length; ++i) {
             sumArray += arr[i];
        }
        return sumArray;

}


console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    for (let i = 2; i<= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(checkPrime(3));

// 6.2 printPrimes
function printPrimes(num) {
    for (let i = 2; i <= num; i++) {
        if(checkPrime(i)) console.log(i)
    }
}
console.log(printPrimes(97))

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    // calculateCube,
    // isAVowel,
    // getTwoLengths,
    // sumArray,
    // checkPrime,
    // printPrimes,
    // printLongestWord,
    // eulerFibo,
    // findNeedle,
    // sumPositive
};