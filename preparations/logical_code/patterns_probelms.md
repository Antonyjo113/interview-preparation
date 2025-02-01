# 🧮 **PATTERNS PROBLEMS**

## 1. **Cube Pattern**

A **Cube Pattern** is a pattern that forms a square-like structure using asterisks (*) of size `n x n`.

### 📝 **Python Code to Print Cube Pattern**

```python
# Function to print cube pattern
def cube_pattern(n):
    for i in range(0, n):
        for j in range(0, n):
            print("*", end="")
        print()

# Test case
cube_pattern(5)  # Expected output: A 5x5 grid of stars
```

```python
# Function to print right pattern
def right_aligned_decreasing_triangle(n):
    for i in range(0, n):
        for j in range(n-i-1, n):
            print("*", end="")
        print()

# Test case
right_aligned_decreasing_triangle(5)  # Expected output: Right-aligned triangle of stars
```

```python
# Function to print right pattern
def right_angled_triangle_pattern(n):
    for i in range(0, n):
        for j in range(i, n):
            print("*", end="")
        print()

# Test case
right_angled_triangle_pattern(5)  # Expected output: Right-aligned triangle of stars
```


# PATTERN - 1:

```python
def left_bottom_to_top(n):

    for i in range(0, n):
        for j in range(i, n):
            print("*", end="")
        print() 

left_bottom_to_top(5)
```


# PATTERN - 2:

```python
def left_top_to_bottom(n):

    for i in range(0, n):
        for j in range(n-i-1, n):
            print("*", end="")
        print() 

left_top_to_bottom(5)
```


# PATTERN - 3:

```python
def right_bottom_to_top(n):

    for i in range(0, n):
        for j in range(n-i-1, n):
            print(" ", end="")

        for j in range(i, n):
            print("*", end="")
        print() 

right_bottom_to_top(5)
```


# PATTERN - 4:

```python
def right_top_to_bottom(n):

    for i in range(0, n):
        for j in range(i, n):
            print(" ", end="")

        for j in range(n-i-1, n):
            print("*", end="")
        print() 

right_top_to_bottom(5)
```


# PATTERN - 5:

```python
def prymiod(n):

    for i in range(0, n):
        for j in range(i, n):
            print(" ", end="")

        for j in range(n-i-1, n):
            print("*", end="")

        for j in range(n-i, n):
            print("*", end="")
        print() 

prymiod(5)
```

# PATTERN - 6:

```python
def prymiod_bottom(n):

    for i in range(0, n):
        for j in range(n-i-1, n):
            print(" ", end="")

        for j in range(i, n):
            print("*", end="")

        for j in range(i, n):
            print("*", end="")
        print() 

prymiod_bottom(5)
```


# PATTERN - 7:

```python
def diomond(n):

    for i in range(0, n-1):
        for j in range(i, n):
            print(" ", end="")

        for j in range(n-i-1, n):
            print("*", end="")

        for j in range(n-i-1, n-1):
            print("*", end="")
        print() 

    for i in range(0, n):
        for j in range(n-i-1, n):
            print(" ", end="")

        for j in range(i, n):
            print("*", end="")

        for j in range(i, n-1):
            print("*", end="")
        print() 

diomond(5)
```


# PATTERN - 8:

```python
def butterfly(n):

    for i in range(0, n-1):
        for j in range(n-i-1, n):
            print("*", end="")

        for j in range(i, n-1):
            print(" ", end="")

        for j in range(i, n-1):
            print(" ", end="")
        
        for j in range(n-i-1, n):
            print("*", end="")

        print() 

    for i in range(0, n):
        for j in range(i, n):
            print("*", end="")

        for j in range(n-i-1, n-1):
            print(" ", end="")

        for j in range(n-i-1, n-1):
            print(" ", end="")

        for j in range(i, n):
            print("*", end="")

        print() 

butterfly(5)
```


# PATTERN - 9:

```python
def numbers(n):

    k = 0
    for i in range(0, n):

        for j in range(n-i-1, n):
            k +=1
            print(k, end="")
        print()

numbers(5)
```


# PATTERN - 10:

```python
def numbers2(n):

    for i in range(0, n):

        for j in range(i, n):
            print(" ", end="")

        for k in range(n-i-1, n):
            print((k+i)-3, end="")

        print()

numbers2(5)
```
