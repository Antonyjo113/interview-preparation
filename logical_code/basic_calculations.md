# 🧮 **BASIC CALCULATIONS**

## 1. **Palindrome**

A **Palindrome** is a word, phrase, number, or other sequences of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). 

### 📝 **Python Code to Check Palindrome**

```python
# Function to check if a string is a palindrome
def is_palindrome(s):
    return s == s[::-1]  # Compare string with its reverse

# Test cases
print(is_palindrome("madam"))  # Expected output: True
print(is_palindrome("hello"))  # Expected output: False
```


## 2. **Prime Numbers**

A **prime number** is a number greater than 1 that has no divisors other than 1 and itself. In other words, a prime number is only divisible by 1 and itself.

### 📝 **Python Code to Check Prime Numbers**

```python
# Function to check if a number is a prime number
def is_primenumber(n):
    if n == 1:  # 1 is not prime
        return False
    for i in range(2, int(n**0.5) + 1):  # Check divisibility up to the square root of n
        if n % i == 0:  # If n is divisible by any number other than 1 and itself
            return False
    return True  # n is prime if no divisors are found

# Test cases
print(is_primenumber(99991))  # Expected output: True
print(is_primenumber(15))     # Expected output: False
```


## 3. **Factorial of a Number**

The **factorial** of a non-negative integer `n` is the product of all positive integers less than or equal to `n`. It is denoted as `n!` and is calculated as:

- `n! = n * (n - 1) * (n - 2) * ... * 1`
- Special case: `0! = 1`

For example:
- **5! = 5 × 4 × 3 × 2 × 1 = 120**
- **3! = 3 × 2 × 1 = 6**
- **0! = 1** (by definition)

### 📝 **Python Code to Calculate Factorial**

```python
# Function to calculate the factorial of a number using recursion
def factorial(n):
    if n == 0:  # Base case: 0! = 1
        return 1
    return n * factorial(n - 1)  # Recursive case: n! = n * (n-1)!

# Test case
print(factorial(5))  # Expected output: 120
```


## 4. **Fibonacci Sequence**

The **Fibonacci sequence** is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence goes:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...`

Mathematically, the Fibonacci sequence is defined by:

- `F(0) = 0`
- `F(1) = 1`
- `F(n) = F(n-1) + F(n-2)` for `n ≥ 2`

### 📝 **Python Code to Generate Fibonacci Sequence**

```python
# Function to generate the Fibonacci sequence up to the nth term
def fibonacci(n):
    fib = [0, 1]  # Initializing the first two numbers in the sequence
    for i in range(2, n):  # Start loop from the 3rd term (index 2)
        fib.append(fib[i - 1] + fib[i - 2])  # Add the sum of the last two terms
    return fib

# Test case: Generate the first 10 Fibonacci numbers
print(fibonacci(10))  # Expected output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```


## 5. **Count Vowels in a String**

In this task, we are asked to **count the number of vowels** (i.e., `a, e, i, o, u`) in a given string. This includes both **lowercase** and **uppercase vowels**.

### 📝 **Python Code to Count Vowels**

```python
# Function to count the number of vowels in a given string
def count_vowels(s):
    vowels = 'aeiouAEIOU'  # List of vowels (both lowercase and uppercase)
    a = 0  # Initialize counter for vowels
    
    # Loop through each character in the string
    for char in s:
        if char in vowels:  # Check if character is a vowel
            a += 1  # Increment the counter for vowels
            
    return a  # Return the total count of vowels

# Example Test Cases:
print(count_vowels("hello"))       # Expected output: 2
print(count_vowels("education"))   # Expected output: 5
```
