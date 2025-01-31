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
print(factorial(1))  # Expected output: 1
```


