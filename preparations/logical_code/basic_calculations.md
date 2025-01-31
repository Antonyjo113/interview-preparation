# 🧮 **BASIC CALCULATIONS**

## 1. **Palindrome**

A **Palindrome** is a word, phrase, number, or other sequences of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). 

For example:
- "madam" is a palindrome.
- "hello" is **not** a palindrome.

### 📝 **Python Code to Check Palindrome**

```python
# Function to check if a string is a palindrome
def is_palindrome(s):
    return s == s[::-1]  # Compare string with its reverse

# Test cases
print(is_palindrome("madam"))  # Expected output: True
print(is_palindrome("hello"))  # Expected output: False
