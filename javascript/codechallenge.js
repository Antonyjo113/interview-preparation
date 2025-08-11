// ========================= LOGICAL PROGRAM -  1 =========================
// QUESTION: 1. Write a program to remove duplicates from an array ?
// const nums = [1, 1, 2];
// const newArray = removeDuplicates(nums);
// console.log(newArray); // [1, 2]


// ANSWER: 




// function removeDuplicates(arr) {

//     let result = []
//     let temp = []
//     let n = arr.length

    // for(let i=0; i<n; i++){
    //     if(temp[arr[i]]){
    //         console.log('Duplicates');
    //     }else{
    //         result.push(arr[i])
    //         temp[arr[i]] = arr[i]
    //     }
    // }
    // return result

    // for(let i = 0; i<n; i++){
    //     if(result.indexOf(arr[i]) == -1){
    //         result.push(arr[i])
    //     }
    // }
    
    // return result
    
// }
    
// console.log(removeDuplicates([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]));
            

// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  2 =========================
// QUESTION: 2. How to check whether a string is palindrome or not ?
// const s = "nolemon,nomelon";
// console.log(isPalindrome(s)); 
// Output: true
          

// ANSWER: 


// const checkPallindrome = (str) => {

//     let str1 = ''
//     for(let i=str.length-1; i>=0; i--){
//         str1 +=str[i]
//     }

//     if(str == str1){
//         return true
//     }else{
//         return false
//     }

    // for (let i = 0; i < len/2; i++) {
    //     if (str[i] !== str[len - i - 1]) {
    //     return "Not pallindrome";
    //     }
    // }
    // return "pallindrome";

// };

// console.log(checkPallindrome("madam"));


// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  3 =========================
// QUESTION: 3. Javascript program to Find the factorial of given number ?
// const num = 5;
// console.log(factorial(num)); 
// Output: 120


// ANSWER: 

// const findFactorial = (num) => {

//     if (num == 0) {
//         return 1
//     }
//     return num * findFactorial(num - 1)

// };

// console.log(findFactorial(5));


// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  4 =========================
// QUESTION: 4. Javascript Program to find longest word in a given sentence ?

// const sentence = "The fox jumped";
//   console.log(longestWord(sentence)); 
// Output: "jumped"

// ANSWER: 

// const findLongestWord = (sentence) => {
//     let wordsArray = sentence.split(" ");
//     let longestWord = "";
  
//     for(let i = 0; i<wordsArray.length; i++){
//         if(wordsArray[i].length > longestWord.length){
//             longestWord = wordsArray[i]
//         }
//     }

//     return longestWord
  
//   };
  
// console.log(findLongestWord("Hi Iam Saikrishna Iam a UI Developer"));
          


// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  5 =========================
// QUESTION: 5. Write a JavaScript program to find the maximum number in an array ?
// const nums = [1, 2, 3, 4, 5];
// console.log(findMax(nums)); 
// Output: 5


// ANSWER: 

// function findMax(arr) {

//     let max1 = -Infinity

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > max1){
//             max1 = arr[i] 
//         }
//     }
//     return max1

// }

// // Example usage:
// const numbers = [1, 6, -33, 9, 4, 8, 2];
// console.log("Maximum number is:", findMax(numbers));
        


// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  6 =========================
// QUESTION: 6. Write a JavaScript function to check if a given number is prime ? 
// const num = 5;
//  console.log(isPrime(num)); 
// Output: true
          

// ANSWER: 


// function isPrime(number) {

//     let n = number **0.5 // Math.sqrt(number)
    
//     for(let i = 2; i<number; i++){
//         if (number%i === 0){
//             return false
//         }
//     }

//     return true

// }

// // Example usage:
// console.log(isPrime(17)); // true
// console.log(isPrime(18)); // true        
        

// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  7 =========================
// QUESTION: 9. Function that returns the Fibonacci sequence up to a given number of terms

// const n = 5;
// console.log(fibonacciSequence(n)); 
// Output: [0, 1, 1, 2, 3]

// ANSWER: 


// function fibonacciSequence(numTerms) {

//     let fib = [0, 1]

//     for(let i=2; i<numTerms; i++){
//         fib.push(fib[i-1] + fib[i-2])
//     }
//     return fib

// }

// // Example usage:
// const numTerms = 10;
// const fibonacciSeries = fibonacciSequence(numTerms);
// console.log(fibonacciSeries); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  8 =========================
// QUESTION: 10. Javascript program to Find the max count of consecutive 1’s in an array ?

// const nums = [1, 1, 0, 1, 1, 1];
// console.log(findConsecutive(nums)); 
// Output: 3

// ANSWER: 


// const findConsecutive = (array) => {

    // let temp = {}

    // for(let i=0; i<array.length; i++){
    //     // // temp[array[i]] = (temp[array[i]] || 0 )  + 1  // Important
    //     if(temp[array[i]]){
    //         temp[array[i]] += 1
    //     }else{
    //         temp[array[i]] = 1
    //     }
    // }

    // let max1 = -Infinity
    // let result;

    // for(let j in temp ){
    //     if(max1 < temp[j]){
    //         max1 = temp[j]
    //         result = temp[j]
    //     }
    // }
    // return result


    // let currentConsCount = 0
    // let maxCount = 0;

    // for(let i = 0; i<array.length; i++){
    //     if(array[i] ==1){
    //         currentConsCount += 1
    //         if(maxCount < currentConsCount){
    //             maxCount = currentConsCount
    //         }
    //     }else{
    //         currentConsCount = 0
    //     }
    // }

    // return maxCount

// };

// console.log(findConsecutive([1, 1, 9, 1, 9, 9, 19, 7, 1, 1, 1, 3, 2, 5, 1]));
// output: 3


// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  9 =========================
// QUESTION: 11. Given 2 arrays that are sorted. Merge them and into single array and sort it
// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
// console.log(mergeAndSort(arr1, arr2)); 
// Output: [1, 2, 3, 4, 5, 6]


// ANSWER: 

// const sortedData = (arr1,arr2) => {

//     let result = []

//     let i = j = 0;

//     while(i < arr1.length && j< arr2.length){
//         if(arr1[i] < arr2[j]){
//             result.push(arr1[i])
//             i++
//         }else{
//             result.push(arr2[j])
//             j++
//         }
//     }

//     while(i < arr1.length){
//         result.push(arr1[i])
//         i++
//     }

//     while(j < arr2.length){
//         result.push(arr2[j])
//         j++
//     }

//     return result


// }
  
// console.log(sortedData([1,3,4,5],[2,6,8,9]))
        


// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  10 =========================
// QUESTION: 12. Find if one string can be formed by rearranging the letters of other string 'qwerty','qeywrt' ==> true
// const s1 = "qwerty";
// const s2 = "qeywrt";
// console.log(isAnagram(s1, s2)); 
// Output: true


// ANSWER: 


// function isStringCreated(str1,str2){

    // let arr1 = str2.split('')
    // let flag = false

    // for(let i =0 ; i<str1.length; i++){
    //     if(arr1.includes(str1[i])){
    //         flag = true
    //     }else{
    //         flag  = false
    //         return flag
    //     }
    // }
    // return flag

    // if(str1.length !== str2.length) return false
    // let freq = {};
    
    // for(let val of str1){
    //     freq[val] = (freq[val] || 0) + 1;
    // }

    
    // for(let val of str2){
    //     if(freq[val]){
    //     freq[val] -= 1;
    //     } else{
    //     return false;
    //     }    
    // } 
    // return true;

// }

// console.log(isStringCreated('anagramm','nagaraam'))



// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  11 =========================
// QUESTION: 13. Write a program to find largest element in nested array [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
// const nestedArray = [[-1, -5], [-2, [-3, [-4]]]];
// console.log(findLargestElement(nestedArray)); 
// Output: -1


// ANSWER: 

// function findLargestElement(arr) {

//     let max = -Infinity

//     function travelse(arr){
//         for(let i=0; i<arr.length; i++){
//             if(Array.isArray(arr[i])){
//                 travelse(arr[i])
//             }else{
//                 if(max < arr[i]){
//                     max = arr[i]
//                 }
//             }

//         }
//     }
//     travelse(arr)
//     return max

// }

// // Example usage:
// const nestedArray = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];
// console.log("Largest element:", findLargestElement(nestedArray));
        





// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  12 =========================
// QUESTION: 16. Write a function that reverses the order of words in a sentence without using built-in methods

// const s = "the quick brown fox";
// console.log(reverseWords(s));
// Output: "fox brown quick the"

// ANSWER: 

        
// const reverseWords = (sampleString) => {

//     let result = ''
//     let word = ''

//     for(let i=0; i<sampleString.length; i++){
//         if(sampleString[i] != ' '){
//             word += sampleString[i]
//         } else {
//             result = word + ' ' + result
//             word = ''
//         }
//     }

//     result = word + ' ' + result

//     console.log(result);

// };

// // Example usage
// reverseWords("learndepth is awesome"); //"awesome is learndepth"
        


// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  13 =========================
// QUESTION: 25. Write a function sumOfThirds(arr) which should return a sum of every third number in the array, starting from the first one.
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// console.log(sumOfThirds(arr)); 
// Output: 10 + 40 + 70 = 120


// ANSWER: 



// const sumOfThirds = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i += 3) {
//       sum += arr[i];
//     }
//     return sum;
//   };                                        
          
//   console.log(sumOfThirds([1,2,3,4,5,6,-10]))                                    
          

// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  14 =========================
// QUESTION: 26. Find the longest common prefix among all strings in given array ['flower', 'flow', 'flight']
// const strs = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(strs));
// Output: "fl"



// ANSWER: 




// const longestCommonPrefix = (arr) => {

    // let str = ''

    // let arr1 = arr[0]
    // let arr2 = arr[1]
    // let arr3 = arr[2]
    
    // for(let i =0; i<arr1.length; i++){
    //     if( arr1[i] == arr2[i] &&  arr2[i] == arr3[i] && arr3[i] == arr1[i]){
    //         str += arr1[i]
    //     }
    // }
    // return str

    // let str = '';
    // let minLength = Math.min(...strs.map(s => s.length));  // Get the minimum length among all strings

    // for (let i = 0; i < minLength; i++) {
    //     let currentChar = strs[0][i];  // Get the character at the current position for the first string
    //     // Check if all strings have the same character at the current position
    //     for (let j = 1; j < strs.length; j++) {
    //         if (strs[j][i] !== currentChar) {
    //             return str;  // If any string doesn't match, return the result so far
    //         }
    //     }
    //     str += currentChar;  // If all strings match, append the character to the result
    // }

    // return str;

// };           

// console.log(longestCommonPrefix(["flower", "flow", "flight"]))                                    



// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  15 =========================
// QUESTION: 22. Find pairs from given input ? input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; input2 = 10; output = [[4, 6], [3, 7], [2, 8], [1, 9]]

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const target = 10;
// console.log(findPairsWithSum(arr, target));
// Output: [[1, 9], [2, 8], [3, 7], [4, 6]]


// ANSWER: 


// function findPairs(input1, input2) {

//     let result = []
//     let temp = []

//     for(let i=0; i< input1.length; i++){
//         for(let j= i + 1; j<input1.length; j++){
//             if(input1[i] + input1[j] == input2){
//                 result.push([input1[i], input1[j]])
//             }
//         }
//     }

//     console.log('temp', temp);
//     return result

// }

// const input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const input2 = 10;

// const output = findPairs(input1, input2);
// console.log(output); // [[1, 9], [2, 8], [3, 7], [4, 6], [5, 5]]



// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  16 =========================
// QUESTION: 21. Write a program to get below output from given input

// const s = "abbcccddddeea";
// console.log(runLengthEncoding(s)); 
// Output: "1a2b3c4d2e1a"


// ANSWER: 


// function encodeString(input) {

//     let count = 1
//     let result = ''

//     for(let i =1; i<input.length; i++){
//         if(input[i] == input[i-1]){
//             count++
//         }else{
//             result += count + input[i-1]
//             count = 1
//         }
//     }

//     result += count + input[input.length - 1]
//     return result

// }

// const input = "abbcccddddeea";
// const output = encodeString(input);
// console.log(output);  // Outputs: 1a2b3c4d2e1a
        


// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  17 =========================
// QUESTION: 
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let rotatedArr = rotateArray(arr, 3);
// console.log(rotatedArr);  // Output: [5, 6, 7, 1, 2, 3, 4]

// ANSWER: 
// function rotateArray(arr, k) {
//     const n = arr.length;
//     let rotatedArr = [];
//     for (let i = 0; i < n; i++) {
//         rotatedArr[(i + k) % n] = arr[i];
//     }
//     return rotatedArr;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let rotatedArr = rotateArray(arr, 3);
// console.log(rotatedArr);


// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  18 =========================
// QUESTION: 



// ANSWER: 

// function parentheses(str) {
//     const checks = { ')': '(', '}': '{', ']': '[' };
//     const stack = [];
    
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
        
//         if ('([{'.includes(char)) {
//             stack.push(char);
//         } else if (')]}'.includes(char)) {
//             if (stack.length > 0 && stack[stack.length - 1] === checks[char]) {
//                 stack.pop();
//             } else {
//                 return false;
//             }
//         }
//     }
    
//     return stack.length === 0;
// }

// console.log(parentheses("()[]"));







// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  19 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  20 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  21 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  22 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  23 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  24 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  25 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  26 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  27 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  28 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  29 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  30 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  31 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  32 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  33 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  34 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  35 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  36 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  37 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  38 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  39 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  40 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  41 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  42 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  43 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  44 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  45 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  46 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  47 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  48 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  49 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 


// ========================= LOGICAL PROGRAM -  50 =========================
// QUESTION: 



// ANSWER: 









// CLARIFICATION: 

