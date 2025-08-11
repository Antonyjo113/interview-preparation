# LOGICAL PROBLEMS

## 1. REVERSE ARRAY
```javascript
function reverseArray(arr){

    let left = 0
    let right = arr.length - 1

    while (left < right) {

        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp

        left++
        right--

    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5,6]));
```


## 2. MISSING NUMBER
```javascript
function missingNumber(arr){

    let n = arr.length +  1

    let expectedsum = (n * (n + 1)) / 2
    let actualsum = arr.reduce((a, b) => a + b)

    return expectedsum - actualsum

}

console.log(missingNumber([1,2,3,5,6]));
```


## 3. REVERSE STRING
```javascript
function reverseString(input){
    return input.split('').reverse().join('')
}

console.log(reverseString('antonyjosephraj'))
```


## 4. SECOND LARGEST NUMBER

```javascript
function secondLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;
    
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    
    return second;
}

const numbers = [10, 20, 4, 45, 99, 99, 23];
console.log(secondLargest(numbers));  // Output: 45
```


## 5. FLATTENOBJECT

```javascript
let obj1 = {
    a: {
        b: {
            c: 3,
            d: 4
        },
        e: 5
    },
    f: 6
}

function flattenObject(obj, prefix = '') {

    let result = {}

    for (let key in obj) {
        // if (obj.hasOwnProperty(key)) {
        let newkey = prefix ? `${prefix}.${key}` : key

        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(result, flattenObject(obj[key], newkey));

        } else {
            result[newkey] = obj[key]
        }
    // }
    }
    return result
}

console.log(flattenObject(obj1));
```


## 6. FLATTEN ARRAY

```javascript

function flatterArary(arr) {

    let result = []

    arr.forEach(element => {
        
        if (Array.isArray(element)) {
            result = result.concat(flatterArary(element));
        }else {
            result.push(element)
        }
    }); 
    return result

}

let arr1 = [1, [2, 3], [4, 5, 6]]

console.log(flatterArary(arr1));
```


## 6. FLATTEN SORTED ARRAY

```javascript

let arr = [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

function flattenSortedArray(arr) {

    let result = []
    arr.forEach(item => {

        if(Array.isArray(item)){
            result = result.concat(flattenSortedArray(item))
        } else{
            result.push(item)
        }
    });

    return result
}

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let result1 =  flattenSortedArray(arr)
console.log(result1);

let result2 =  bubbleSort(result1)
console.log(result2);
```


## 6. DUPLICATED OBJECT

```javascript

function duplicatedObject(obj1) {

    let result = {}

    for (let item = 0; item < obj1.length; item++ ){
        let idkey = obj1[item]['id'];
        let namekey = obj1[item]['name'];
        
        let id1 = idkey.toString()

        console.log(idkey, namekey, id1);

        if(result[id1]){
            // console.log('3333');
            result[idkey.toString()] += 1
        } else{
            result[id1] = 1
        }
    }

    let max = null;
    for (let item in result){
        
        if (result[item] > max || null){
            max = result[item]
        }

        console.log('3333', result[item]);
        console.log('444444', max);
    }

    return result

}

let object1 = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 1, name: "John" },
    { id: 3, name: "Mike" }
  ]
console.log(duplicatedObject(object1));
```

## 7. ADD NEW OBJECT

```javascript
const users = [
  { name: "John" },
  { name: "David" },
  { name: "Rahul" },
  { name: "Jain" }
];

const newUser = { name: "Karthik" };

// Find the index of the user named "David"
const index = users.findIndex(user => user.name === "David");

// Insert newUser just before "David" if found
if (index !== -1) {
  users.splice(index, 0, newUser);
}

console.log(users);
```


## 6. ARRAY SORTING

```javascript
    const numbers = [3, 2, 20];
    numbers.sort((a, b) => a - b);
```

