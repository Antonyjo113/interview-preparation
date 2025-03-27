// ==================================  1 -4  ==================================


// const a = 1<2<3
// const b = 1>2>3

// console.log(a, b);

// OUTPUT: true, false
// CLARIFICATION: Boolean value consider as 0,1. if 1<2 => true => 1


// ==================================  2 - 5 ==================================

// console.log(5 > '15' < 5);
// console.log(7 > '15' < 7);
// console.log(7 > '85' < 5);

// OUTPUT: true, true, true
// CLARIFICATION: using Coercion method all string converting to number. if 5 > '15' => true => 1
// Type coercion in JavaScript refers to the automatic or implicit conversion of one data type to another, usually when performing operations between different types


// ==================================  3 - 6 ==================================

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 3000);
// setTimeout(() => {
//     console.log(3);
// }, 0);
// console.log(4);

// OUTPUT: 1,4,3,2
// CLARIFICATION: setTimeout is asynchronous function 


// ==================================  4 - 7 ==================================

// In JavaScript, Promise.all(), Promise.any(), Promise.race(), and Promise.allSettled()

/* 1. Promise.all() - waits all promise to resolve, and one to reject */
// const p1 = Promise.resolve(3);
// const p2 = Promise.resolve(4);
// const p3 = Promise.resolve(5);

// Promise.all([p1, p2, p3])
//   .then(results => console.log(results))  // [3, 4, 5]
//   .catch(error => console.log(error));

// const p1 = Promise.resolve(3);
// const p2 = Promise.reject('Error');
// const p3 = Promise.resolve(5);

// Promise.all([p1, p2, p3])
// .then(results => console.log(results))
// .catch(error => console.log(error));  // "Error" (from p2 rejection)
  

/* 2. Promise.any() - wait a first promise to resolve, and all promise to reject */

// const p1 = Promise.reject('Error1');
// const p2 = Promise.reject('Error2');
// const p3 = Promise.resolve(3);

// Promise.any([p1, p2, p3])
//   .then(result => console.log(result))  // 3 (from p3)
//   .catch(error => console.log(error));  // Does not reach here


// const p1 = Promise.reject('Error1');
// const p2 = Promise.reject('Error2');
// const p3 = Promise.reject('Error3');

// Promise.any([p1, p2, p3])
// .then(result => console.log(result))  // Does not reach here
// .catch(error => console.log(error));  // AggregateError: All promises were rejected

/* 3. Promise.race() - wait a first promise to setle*/

// const p1 = new Promise(resolve => setTimeout(resolve, 500, 'First'));
// const p2 = new Promise(resolve => setTimeout(resolve, 100, 'Second'));

// Promise.race([p1, p2])
//   .then(result => console.log(result))  // "Second" (p2 resolves first)
//   .catch(error => console.log(error));

// const p1 = new Promise(resolve => setTimeout(resolve, 500, 'First'));
// const p2 = new Promise((_, reject) => setTimeout(reject, 100, 'Error'));

// Promise.race([p1, p2])
// .then(result => console.log(result))
// .catch(error => console.log(error));  // "Error" (p2 rejects first)

/* 4. Promise.allSetlled() - wait all promise to either reject or resolve, and return into array of object of the ouputs */

// const p1 = Promise.resolve(3);
// const p2 = Promise.reject('Error');
// const p3 = Promise.resolve(5);

// Promise.allSettled([p1, p2, p3])
//   .then(results => {
//     console.log(results);
//     // [
//     //   { status: 'fulfilled', value: 3 },
//     //   { status: 'rejected', reason: 'Error' },
//     //   { status: 'fulfilled', value: 5 }
//     // ]
//   });

// OUTPUT: 
// CLARIFICATION: 


// ==================================  5 - 10 ==================================

// num = 6;
// console.log(num);
// let num;

// OUTPUT: Error
// CLARIFICATION: Cannot access 'num' before initialization


// ==================================  6 - 11  ==================================

// console.log(typeof typeof 1);

// OUTPUT: string
// CLARIFICATION: The typeof 1 is return 'number'. so the next typeof will be string


// ==================================  7 - 12 ==================================

// const num = [1,2,3,4,5]
// const [y] = num 
// console.log(y);

// OUTPUT: 1
// CLARIFICATION: Destructuring the types,
// Another Example:
// const [a,b] = [1,2]
// console.log(a,b); // 1,2


// ==================================  8 - 13 ==================================

// const a = 3
// const b = new Number(3)
// console.log(a == b);
// console.log(a === b);

// OUTPUT: true, false
// CLARIFICATION: Creating new number(b) datytype will be object,
// console.log(typeof a , typeof b);


// ==================================  9 - 14 ==================================


// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('one')
//     }, 500);
// })
// const secondPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('two')
//     }, 100);
// })

// Promise.race([firstPromise, secondPromise])
// .then((res) => console.log(res))

// OUTPUT: two
// CLARIFICATION: Promise.race - wait to anyone get result first either resolve or reject


// ==================================  10 - 17 ==================================

// console.log(3+4 +'5');


// OUTPUT: 75
// CLARIFICATION: using Coercion method all number converting to string.


// ==================================  11 -19 ==================================

// let num = 0
// console.log(num++);
// console.log(++num);

// OUTPUT: 0,2
// CLARIFICATION: Increment operators - Prefix & Suffix
// Prefix - will increment the value and return it
// Suffix - will return the value and increment it

// ==================================  12 - 20 ==================================

// let str = 'jscafe'
// str[0] = 'k'
// console.log(str);

// OUTPUT: jscafe
// CLARIFICATION: Javascript string are mutable value - can not change.
// but can replace the value str = str.replace('s','k')


// ==================================  13 - 21 ==================================

// console.log(num);
// num = 6
// var num;
// console.log(num);

// OUTPUT: undefined, 6
// CLARIFICATION: 
// JavaScript hoists the var declaration to the top of its scope (but not the initialization).
// At this point, num is hoisted but has not been assigned a value yet.

// ==================================  14 - 23  ==================================


// getData1();
// getData2();
// getData3();

// function getData1(){
//     console.log('Hello');
// } // hello - hoists function declaration
// var getData2 = () => {
//     console.log('Antony');
// } // getData2 is not a function - because it's undefined
// const getData3 = () => {
//     console.log('Joseph');
// } // Cannot access 'getData3' before initialization

// OUTPUT: 
// CLARIFICATION: 


// ==================================  15 - 24 ==================================

// function func(){
//     try{
//         console.log(1);
//         return
//     }catch(err){
//         console.log(2);
//     }finally{
//         console.log(3);
//     }
//     console.log(4);
// }
// func()


// OUTPUT: 1,3
// CLARIFICATION: finally block will be readed


// ==================================  16 - 27 ==================================

// function job(){
//     return new Promise((resolve, reject) => {
//         reject()
//     })
// }

// var promise = job()

// promise.then(() => console.log(1)).then(() => console.log(2))
//     .catch(() => console.log(3)).then(()=> console.log(4))


// OUTPUT: 3, 4
// CLARIFICATION: becuase the Promise has been rejected


// ==================================  17 - 28 ==================================

// for(var i =0; i<10; i++){
//     setTimeout( function() {
//         console.log(i);
//     })
// }


// OUTPUT: 10,10,10,10,10,10,10,10,10,10,10
// CLARIFICATION: Var is functional scope, shades binding , it will iteration all 


// ==================================  18  ==================================

// console.log(value);
// let value = 3

// OUTPUT: 
// CLARIFICATION: 
// 1. What is temporal dead zone ?
// - It is a specific time period in the execution of javascript code where the variables declared
//  with let and const exists but cannot be accessed until the value is assigned.

// ==================================  19 - 29 ==================================

// console.log([] == []);

// OUTPUT: false
// CLARIFICATION: Array is reference value and it has stored in different location memory. so this will be false


// ==================================  20  ==================================

// let newList = [1].push(2)
// console.log(newList.push(3));


// OUTPUT: Type Error - newList.push is not a function
// CLARIFICATION: First line throws length of arrary value is 2. again we can not push the value to the value of 2.


// ==================================  21 - 32 ==================================

// var empId = 'abc'
// function foo(){
//     empId = '123'
//     return
//     function empId() {}
// }
// foo()
// console.log(empId);

// OUTPUT: abc
// CLARIFICATION: empid varaible can access from inside the function


// ==================================  22 - 33 ==================================

// const a = {}
// const b = {key: 'a'}
// const c = {key: 'c'}

// a[b] = 45
// a[c] = 67

// console.log(a[b]);


// OUTPUT: 67
// CLARIFICATION: Object will be assign to another object create value - { '[object Object]': 45 }


// ==================================  23  ==================================


// const a = {
//     count: 0
// }

// const b = a
// b.count = a.count++

// console.log(b.count, a.count);


// OUTPUT: 
// CLARIFICATION: 


// ==================================  24 - 34  ==================================

// const arr = [1,2,3]
// const str = '1,2,3'

// console.log(arr == str);

// OUTPUT: true
// CLARIFICATION: using Coercion method arr converting to string


// ==================================  25 - 35  ==================================


// let a = 5
// let b = a++;
// console.log(a+b);

// OUTPUT: 11
// CLARIFICATION: Increment operator


// ==================================  26 - 36 ==================================

// var x = 1
// console.log(x);

// function x(){
//     console.log(2);
// }
// x()

// OUTPUT: 1, x is not a function
// CLARIFICATION: Hoisted function will be replace var to function 


// ==================================  27 - 37  ==================================

// function addition(a=5, b=7){
//     console.log(a+b);
// }
// addition(null, 20)

// OUTPUT: 20
// CLARIFICATION: Null will be consider as 0 when comes to operationals
//  if pass undefined to the answer will be 25

// ==================================  28 - 38  ==================================

// var arr1 = [1,2,3]
// var arr2 = arr1.slice('')
// arr2[0] = 0
// console.log(arr1);

// OUTPUT: 
// CLARIFICATION: Slice function will copying the all reference of array value. so that will affect on previous array value


// ==================================  29 - 39 ==================================


// let person = { name: 'antony'}
// let members = [person]
// person = null
// console.log(members);

// OUTPUT: [ { name: 'antony' } ]
// CLARIFICATION: Object reference value only change, not an object variable


// ==================================  30 - 41 ==================================

// const box = {
//     x: 5, y: 10
// }
// Object.freeze(box)
// box.x = 10

// console.log(box);


// OUTPUT: x:5, y:10
// CLARIFICATION: Object.freeze will make a object immutable


// ==================================  31 - 42  ==================================

// new Promise(() =>{
//     console.log(1);
// })
// console.log(2);

// OUTPUT: 1, 2
// CLARIFICATION: Promisse will be consider as synchronous function if without use resolve, reject method


// ==================================  32 - 43  ==================================

// console.log([1,2]+![]);

// OUTPUT: 1,2false
// CLARIFICATION: addition arr and boolean value into string - Coercion method
// [] = true, ![] = false

// ==================================  33 - 44  ==================================


// let arr1 = [1,2,[3,4]]
// let arr2 = [...arr1]
// arr2[1] = 10
// arr2[2][0] = 100
// console.log(arr1);


// OUTPUT: [ 1, 2, [ 100, 4 ] ]
// CLARIFICATION: 
// ...arr1 - shallow copy - copy with reference value

// ==================================  34 - 45  ==================================

// let str = 'antony'
// str.length = 0
// console.log(str.length);

// OUTPUT: 6
// CLARIFICATION: String are immutable


// ==================================  35 - 46  ==================================

// x++
// console.log(x);
// var x= 10;

// OUTPUT: NaN
// CLARIFICATION: undefined to convert to postfix method, but throws an NaN value - "Not-A-Number,"


// ==================================  36 - 47 ==================================

// function data(){
//     let a = b = 5
// }
// data()
// console.log(b);

// OUTPUT: 5
// CLARIFICATION: without declare of var, let, const into a variable - consisder as global object


// ==================================  37 - 50 ==================================

{/* <div onclick="console.log('div tag')">
    <p onclick="console.log('p tag')">
        onclick
    </p>
</div> */}


// OUTPUT: p tag, div tag
// CLARIFICATION: Javascript will be run for inner most functions


// ==================================  38 - 51  ==================================

// const x = [1,2,3]
// delete x[1]
// console.log(x.length);

// OUTPUT: 3
// CLARIFICATION: if delete the item of array, create an empty value in array ( [1, <1 empty item>, 3 ] )


// ==================================  39 - 53  ==================================

// (function(num){
//     console.log(num*num);
// })(false)

// OUTPUT: 0
// CLARIFICATION: passing a false value to function, so that 0 * 0 = 0, understand the function syntax


// ==================================  40 - 54 ==================================

// let x ='Learn'
// console.log(x.substring(5,1));


// OUTPUT: earn
// CLARIFICATION: javascript swap the index 5,1 to 1,5 automatically


// ==================================  41 - 55 ==================================

// let a = []
// let b = false

// console.log(a == b);

// OUTPUT: 0
// CLARIFICATION: [] - will be zero, 


// ==================================  42 - 56 ==================================

// let person = {
//     name: 'antony',
//     name: 'joseph'
// }
// console.log(person.name);

// OUTPUT: joseph
// CLARIFICATION: override method


// ==================================  43 - 57  ==================================

// let a = [1]
// let b = [2]
// console.log(a + b);

// OUTPUT: 12
// CLARIFICATION: javascript array into string when comes to operational


// ==================================  44 - 59 ==================================

// const timer = setTimeout(() => {
//     console.log(1);
// }, 0);
// clearTimeout(timer)

// OUTPUT: empty
// CLARIFICATION: Javascript clearTimeout is clearing the setTimeout function


// ==================================  45 - 60  ==================================

// var x = 1
// var y = 1

// {
//     var x = 2
//     let y = 2
// }

// console.log(x, y);

// OUTPUT: 2 1
// CLARIFICATION: var x = 2 is assign to global variable, so that x value will be change
// y= 2 block of declartion, so value will not change


// ==================================  46 - 62  ==================================

// let x = NaN
// let y = NaN
// console.log(x === y);

// OUTPUT: false
// CLARIFICATION: NaN means false in javascript


// ==================================  47 - 64  ==================================

// let x = 1
// let y = 2
// console.log(x++ + ++y);

// OUTPUT: 4
// CLARIFICATION: postfix - increment and return the value,  prefix - return the value and increment


// ==================================  48 - 66  ==================================

// let x = {
//     flag : 1,
//     toString: function(){
//         return this.flag++
//     }
// }

// if(x==1 && x==2 && x==3){
//     console.log('Hello');
// }

// OUTPUT: Hello
// CLARIFICATION: Need to watch the video 


// ==================================  49 - 69 ==================================

// const person = { name: 'antony'}
// const arr  = ["name"]
// person[arr] = 'joseph'
// console.log(person.name);

// OUTPUT: joseph
// CLARIFICATION: Javascript string conversation & override methods


// ==================================  50 - 71 ==================================

// const x = []
// x[4] = 1
// console.log(x);
// x.forEach((i) =>{
//     console.log(i);
// })

// OUTPUT: 1
// CLARIFICATION: after assigning 1 value to the 4th index, the remainging index will be empty, 
// foreach will be run for defined values, not for undefined values


// ==================================  51 - 91 ==================================

// var obj1 = {prop: 42}
// var obj2 = obj1
// obj2 = {}
// console.log(obj1);


// OUTPUT: {prop: 42}
// CLARIFICATION: obj2 = {} assign a new value, so javascript create a new memory, if changing the property of object then it will affect the obj1


// ==================================  52 - 95 ==================================

// console.log('str' + +'def');

// OUTPUT: strNaN
// CLARIFICATION: Unary operator will try to convert string into number, but 'def' could not convert it
// so, return 'NaN'. then str + NaN => strNaN


// ==================================  53 - 98 ==================================

// const arrFunc = () => {
//     console.log(this.count);
// }
// arrFunc()

// OUTPUT: undefined
// CLARIFICATION: Watch the video again


// ==================================  54 - 113  ==================================

// let {length} = 'antony'
// console.log(length);

// OUTPUT: 6
// CLARIFICATION: destructure of method, to convert a string into object and has built string method has length value, so that will return 6


// ==================================  55 - 117 ==================================

// let person = { age: 45, userage: 50}
// let {age, userage} = person
// console.log(userage);
// console.log(age);


// OUTPUT: 24, undefined
// CLARIFICATION: destructure of method,


// ==================================  56 - 119 ==================================


// const arr = [1,2,3,4]
// console.log(1 in arr);
// console.log(3 in arr);
// console.log(4 in arr);


// OUTPUT: true, true, false
// CLARIFICATION: 'in' method wil check the index is present in array or not


// ==================================  57 - 122 ==================================

// console.log(1 || 2 && 3);

// OUTPUT: 1
// CLARIFICATION: Javascript will the first preference for '&&' operator => 2 && 3 will be taken the second value
// next preference for '||' operator => 1 || 3 will be taken the first value

// ==================================  58 - 129  ==================================

// console.log(+true);
// console.log(+false);
// console.log(+'123');
// console.log(+null);


// OUTPUT: 1, 0, 123, 0
// CLARIFICATION: Unary operator will try to convert the string into number, so that null is 0


// ==================================  59 - 138 ==================================

// console.log(Boolean({}));
// console.log(Boolean([]));
// console.log(Boolean(''));
// console.log(Boolean(false)); 



// OUTPUT: true, true, false, false
// CLARIFICATION: Empty object will considered in true value 


// ==================================  60 - 148 ==================================


// let num = 0
// console.log(num++);
// console.log(++num);
// console.log(num);


// OUTPUT: 0, 2, 2
// CLARIFICATION: 


// ==================================  61  ==================================

// console.log(0 || 1);
// console.log(1 || 2);
// console.log(2 && 1);
// console.log(0 || 4);


// OUTPUT: 
// CLARIFICATION: 


// ==================================  62  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  63  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  64  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  65  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  66  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  67  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  68  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  69  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  70  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  71  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  72  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  73  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  74  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  75  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  76  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  77  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  78  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  79  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  80  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  81  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  82  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  83  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  84  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  85  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  86  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  87  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  88  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  89  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  90  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  91  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  92  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  93  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  94  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  95  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  96  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  97  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  98  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  99  ==================================



// OUTPUT: 
// CLARIFICATION: 


// ==================================  100  ==================================



// OUTPUT: 
// CLARIFICATION: 
