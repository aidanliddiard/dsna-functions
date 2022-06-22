## DEMO: Recursion Sum

## Challenge

Write a function that finds the sum of the first n natural numbers. **Make your function recursive**.

```js
function sum(n) {
  if (n === 1) return 1;
  const prev = sum(n - 1);
  return prev + n;
}
```

> **You can assume valid inputs**

## Test Cases

| Input | Output                         |
| ----- | ------------------------------ |
| 5     | 15 (// 1 + 2 + 3 + 4 + 5 = 15) |
| 1     | 1                              |
| 12    | 78                             |
