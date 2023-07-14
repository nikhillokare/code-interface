const problems = [
  {
    id: 1,
    statement: "Write a function that returns the sum of two numbers.",
    example: "Input: 2, 5\nOutput: 7",
  },
  {
    id: 2,
    statement: "Write a function to check if a string is a palindrome.",
    example: "Input: 'racecar'\nOutput: true",
  },
  {
    id: 3,
    statement:
      "Write a function to sort an array of numbers in ascending order.",
    example: "Input: [7, 3, 1, 9, 4]\nOutput: [1, 3, 4, 7, 9]",
  },
  {
    id: 4,
    statement: "Write a function to find the average of an array of numbers.",
    example: "Input: [3, 5, 2, 8, 4]\nOutput: 4.4",
  },
  {
    id: 5,
    statement: "Write a function to count the number of vowels in a string.",
    example: "Input: 'hello world'\nOutput: 3",
  },
  {
    id: 6,
    statement: "Write a function to check if a number is a power of two.",
    example: "Input: 16\nOutput: true",
  },
  {
    id: 7,
    statement:
      "Write a function to find the second largest number in an array.",
    example: "Input: [9, 5, 2, 7, 4]\nOutput: 7",
  },
  {
    id: 8,
    statement: "Write a function to calculate the area of a triangle.",
    example: "Input: base = 6, height = 8\nOutput: 24",
  },
  {
    id: 9,
    statement: "Write a function to remove duplicates from an array.",
    example: "Input: [1, 2, 3, 2, 4, 1, 5]\nOutput: [1, 2, 3, 4, 5]",
  },
  {
    id: 10,
    statement:
      "Write a function to check if a string is an anagram of another string.",
    example: "Input: 'listen', 'silent'\nOutput: true",
  },

  {
    id: 11,
    statement: "Write a function to reverse a string.",
    example: "Input: 'hello'\nOutput: 'olleh'",
  },
  {
    id: 12,
    statement: "Write a function to check if a number is prime.",
    example: "Input: 7\nOutput: true",
  },
  {
    id: 13,
    statement:
      "Write a function to find the maximum difference between two elements in an array.",
    example: "Input: [3, 9, 2, 1, 6]\nOutput: 8",
  },

  {
    id: 14,
    statement: "Write a function to calculate the factorial of a number.",
    example: "Input: 5\nOutput: 120",
  },
  {
    id: 15,
    statement:
      "Write a function to check if a string contains only unique characters.",
    example: "Input: 'abcde'\nOutput: true",
  },
  {
    id: 16,
    statement:
      "Write a function to find the missing number in an array of consecutive numbers.",
    example: "Input: [1, 2, 4, 5, 6]\nOutput: 3",
  },
  {
    id: 17,
    statement: "Write a function to remove all even numbers from an array.",
    example: "Input: [1, 2, 3, 4, 5, 6]\nOutput: [1, 3, 5]",
  },
  {
    id: 18,
    statement:
      "Write a function to check if a string is a valid email address.",
    example: "Input: 'test@example.com'\nOutput: true",
  },
  {
    id: 19,
    statement: "Write a function to find the longest word in a string.",
    example: "Input: 'The quick brown fox'\nOutput: 'quick'",
  },
  {
    id: 20,
    statement: "Write a function to reverse the words in a string.",
    example: "Input: 'Hello, World!'\nOutput: 'World! Hello,'",
  },
  {
    id: 21,
    statement: "Write a function to find the median of an array of numbers.",
    example: "Input: [3, 1, 2, 5, 4]\nOutput: 3",
  },
  {
    id: 22,
    statement: "Write a function to check if a number is a perfect square.",
    example: "Input: 16\nOutput: true",
  },
  {
    id: 23,
    statement: "Write a function to convert a string to title case.",
    example: "Input: 'hello world'\nOutput: 'Hello World'",
  },
  {
    id: 24,
    statement:
      "Write a function to find the most frequent element in an array.",
    example: "Input: [1, 2, 3, 2, 4, 1, 5]\nOutput: 2",
  },
  {
    id: 25,
    statement:
      "Write a function to find the GCD (Greatest Common Divisor) of two numbers.",
    example: "Input: 12, 18\nOutput: 6",
  },
  {
    id: 26,
    statement:
      "Write a function to check if a string is a valid palindrome ignoring non-alphanumeric characters.",
    example: "Input: 'A man, a plan, a canal: Panama!'\nOutput: true",
  },
  {
    id: 27,
    statement: "Write a function to find the smallest element in an array.",
    example: "Input: [7, 3, 1, 9, 4]\nOutput: 1",
  },
  {
    id: 28,
    statement:
      "Write a function to find the factorial of a non-negative integer using recursion.",
    example: "Input: 5\nOutput: 120",
  },
  {
    id: 29,
    statement: "Write a function to check if a number is a perfect number.",
    example: "Input: 28\nOutput: true",
  },
  {
    id: 30,
    statement:
      "Write a function to capitalize the first letter of each word in a string.",
    example: "Input: 'hello world'\nOutput: 'Hello World'",
  },
  {
    id: 31,
    statement:
      "Write a function to find the index of the first occurrence of an element in an array.",
    example: "Input: [3, 2, 1, 4, 2, 5], 2\nOutput: 1",
  },
  {
    id: 32,
    statement:
      "Write a function to find the largest sum of any two numbers in an array.",
    example: "Input: [1, 2, 3, 4, 5]\nOutput: 9",
  },
  {
    id: 33,
    statement: "Write a function to convert a string to lowercase.",
    example: "Input: 'Hello World'\nOutput: 'hello world'",
  },
  {
    id: 34,
    statement: "Write a function to check if a number is a perfect cube.",
    example: "Input: 27\nOutput: true",
  },
  {
    id: 35,
    statement: "Write a function to check if a string is a pangram.",
    example:
      "Input: 'The quick brown fox jumps over the lazy dog'\nOutput: true",
  },
  {
    id: 36,
    statement:
      "Write a function to find the mode (most frequent element) in an array.",
    example: "Input: [3, 1, 2, 2, 4, 1, 2, 5]\nOutput: 2",
  },
  {
    id: 37,
    statement:
      "Write a function to generate the Fibonacci sequence up to a given number of terms.",
    example: "Input: 8\nOutput: [0, 1, 1, 2, 3, 5, 8, 13]",
  },
  {
    id: 38,
    statement: "Write a function to check if a string is a valid URL.",
    example: "Input: 'https://example.com'\nOutput: true",
  },
  {
    id: 39,
    statement:
      "Write a function to find the smallest missing positive number in an unsorted array of integers.",
    example: "Input: [3, 4, -1, 1]\nOutput: 2",
  },
  {
    id: 40,
    statement: "Write a function to remove all whitespace from a string.",
    example: "Input: 'Hello,   World!'\nOutput: 'Hello,World!'",
  },
  {
    id: 41,
    statement:
      "Write a function to calculate the sum of all numbers in a range.",
    example: "Input: 1, 5\nOutput: 15",
  },
  {
    id: 42,
    statement:
      "Write a function to find the longest common prefix in an array of strings.",
    example: "Input: ['flower', 'flow', 'flight']\nOutput: 'fl'",
  },
  {
    id: 43,
    statement: "Write a function to reverse the order of words in a sentence.",
    example: "Input: 'Hello World'\nOutput: 'World Hello'",
  },
  {
    id: 44,
    statement:
      "Write a function to find the maximum product of two distinct elements in an array.",
    example: "Input: [2, 3, 4, 5]\nOutput: 20",
  },
  {
    id: 45,
    statement: "Write a function to check if a number is a perfect power.",
    example: "Input: 16\nOutput: true",
  },
  {
    id: 46,
    statement: "Write a function to convert a string to camel case.",
    example: "Input: 'hello world'\nOutput: 'helloWorld'",
  },
  {
    id: 47,
    statement:
      "Write a function to find the longest consecutive sequence of elements in an unsorted array.",
    example: "Input: [100, 4, 200, 1, 3, 2]\nOutput: 4",
  },
  {
    id: 48,
    statement:
      "Write a function to count the number of occurrences of a given element in an array.",
    example: "Input: [1, 2, 3, 2, 4, 1, 5], 2\nOutput: 2",
  },
  {
    id: 49,
    statement:
      "Write a function to calculate the sum of squares of all numbers in a range.",
    example: "Input: 1, 5\nOutput: 55",
  },
  {
    id: 50,
    statement:
      "Write a function to remove all punctuation characters from a string.",
    example: "Input: 'Hello, World!'\nOutput: 'Hello World'",
  },
  {
    id: 51,
    statement:
      "Write a function to find the first non-repeating character in a string.",
    example: "Input: 'aabccde'\nOutput: 'b'",
  },
  {
    id: 52,
    statement:
      "Write a function to find the maximum consecutive sum in an array of numbers.",
    example: "Input: [1, -2, 3, -1, 2]\nOutput: 4",
  },
  {
    id: 53,
    statement: "Write a function to check if a string is a valid IPv4 address.",
    example: "Input: '192.168.0.1'\nOutput: true",
  },
  {
    id: 54,
    statement:
      "Write a function to rotate an array by a given number of positions.",
    example: "Input: [1, 2, 3, 4, 5], 2\nOutput: [4, 5, 1, 2, 3]",
  },
  {
    id: 55,
    statement:
      "Write a function to find the kth largest element in an unsorted array.",
    example: "Input: [3, 2, 1, 5, 6, 4], 2\nOutput: 5",
  },
  {
    id: 56,
    statement: "Write a function to check if a string is a valid IPv6 address.",
    example: "Input: '2001:0db8:85a3:0000:0000:8a2e:0370:7334'\nOutput: true",
  },
  {
    id: 57,
    statement:
      "Write a function to find the first repeating element in an array.",
    example: "Input: [2, 5, 1, 2, 3, 5, 1, 2, 4]\nOutput: 2",
  },
  {
    id: 58,
    statement:
      "Write a function to calculate the Hamming distance between two integers.",
    example: "Input: 1, 4\nOutput: 2",
  },
  {
    id: 59,
    statement:
      "Write a function to find the first missing positive integer in an unsorted array.",
    example: "Input: [3, 4, -1, 1]\nOutput: 2",
  },
  {
    id: 60,
    statement: "Write a function to find the majority element in an array.",
    example: "Input: [2, 2, 1, 1, 1, 2, 2]\nOutput: 2",
  },
  {
    id: 61,
    statement:
      "Write a function to check if a string is a valid credit card number.",
    example: "Input: '45320151128336'\nOutput: true",
  },
  {
    id: 62,
    statement:
      "Write a function to find the longest increasing subsequence in an array.",
    example:
      "Input: [10, 22, 9, 33, 21, 50, 41, 60]\nOutput: [10, 22, 33, 50, 60]",
  },
  {
    id: 63,
    statement:
      "Write a function to check if a string is a valid ISBN (International Standard Book Number).",
    example: "Input: '0-306-40615-2'\nOutput: true",
  },
  {
    id: 64,
    statement:
      "Write a function to find the number of prime numbers less than a given number.",
    example: "Input: 10\nOutput: 4",
  },
  {
    id: 65,
    statement:
      "Write a function to reverse the order of bits in a 32-bit unsigned integer.",
    example: "Input: 43261596\nOutput: 964176192",
  },
  {
    id: 66,
    statement:
      "Write a function to find the longest common suffix in an array of strings.",
    example: "Input: ['flower', 'flow', 'flight']\nOutput: 'ow'",
  },
  {
    id: 67,
    statement:
      "Write a function to find the maximum length of a substring with no repeating characters in a string.",
    example: "Input: 'abcabcbb'\nOutput: 3",
  },
  {
    id: 68,
    statement:
      "Write a function to find the longest palindromic substring in a string.",
    example: "Input: 'babad'\nOutput: 'bab'",
  },
  {
    id: 69,
    statement:
      "Write a function to calculate the number of trailing zeroes in the factorial of a given number.",
    example: "Input: 10\nOutput: 2",
  },
  {
    id: 70,
    statement: "Write a function to find the intersection of two arrays.",
    example: "Input: [1, 2, 2, 1], [2, 2]\nOutput: [2]",
  },
  {
    id: 71,
    statement: "Write a function to find the maximum depth of a binary tree.",
    example: "Input: [3, 9, 20, null, null, 15, 7]\nOutput: 3",
  },
  {
    id: 72,
    statement:
      "Write a function to find the smallest common multiple of two numbers.",
    example: "Input: 3, 5\nOutput: 15",
  },
  {
    id: 73,
    statement:
      "Write a function to find the longest word in a dictionary that can be formed by deleting some characters of another word.",
    example:
      "Input: 'abpclefr', ['ale', 'apple', 'monkey', 'plea']\nOutput: 'apple'",
  },
  {
    id: 74,
    statement:
      "Write a function to find the sum of two binary numbers represented as strings.",
    example: "Input: '1010', '1011'\nOutput: '10101'",
  },
  {
    id: 75,
    statement:
      "Write a function to find the number of islands in a grid of 1s (land) and 0s (water).",
    example:
      "Input: [[1, 1, 1, 1, 0], [1, 1, 0, 1, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0]]\nOutput: 1",
  },
  {
    id: 76,
    statement:
      "Write a function to find the length of the last word in a string.",
    example: "Input: 'Hello World'\nOutput: 5",
  },
  {
    id: 77,
    statement:
      "Write a function to merge two sorted arrays into a single sorted array.",
    example: "Input: [1, 2, 3], [2, 5, 6]\nOutput: [1, 2, 2, 3, 5, 6]",
  },
  {
    id: 78,
    statement:
      "Write a function to find the smallest subarray with a sum greater than or equal to a given target value.",
    example: "Input: [2, 3, 1, 2, 4, 3], 7\nOutput: [4, 3]",
  },
  {
    id: 79,
    statement:
      "Write a function to find the maximum path sum in a binary tree.",
    example: "Input: [1, 2, 3]\nOutput: 6",
  },
  {
    id: 80,
    statement:
      "Write a function to convert a decimal number to a Roman numeral.",
    example: "Input: 1994\nOutput: 'MCMXCIV'",
  },
  {
    id: 81,
    statement: "Write a function to find the intersection of two linked lists.",
    example: "Input: 1 -> 2 -> 3 -> 4, 2 -> 4\nOutput: 2 -> 4",
  },
  {
    id: 82,
    statement: "Write a function to find the longest word in a sentence.",
    example:
      "Input: 'The quick brown fox jumps over the lazy dog'\nOutput: 'jumps'",
  },
  {
    id: 83,
    statement: "Write a function to reverse the vowels in a string.",
    example: "Input: 'hello'\nOutput: 'holle'",
  },
  {
    id: 84,
    statement: "Write a function to find the maximum width of a binary tree.",
    example: "Input: [1, 3, 2, 5, 3, null, 9]\nOutput: 4",
  },
  {
    id: 85,
    statement:
      "Write a function to find the longest consecutive sequence of elements in a binary tree.",
    example: "Input: [1, null, 3, 2, 4, null, null, null, 5]\nOutput: 3",
  },
  {
    id: 86,
    statement:
      "Write a function to find the sum of all left leaves in a binary tree.",
    example: "Input: [3, 9, 20, null, null, 15, 7]\nOutput: 24",
  },
  {
    id: 87,
    statement:
      "Write a function to find the length of the longest substring without repeating characters in a string.",
    example: "Input: 'abcabcbb'\nOutput: 3",
  },
  {
    id: 88,
    statement:
      "Write a function to find the number of distinct islands in a grid.",
    example:
      "Input: [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]]\nOutput: 1",
  },
  {
    id: 89,
    statement: "Write a function to calculate the square root of a number.",
    example: "Input: 16\nOutput: 4",
  },
  {
    id: 90,
    statement:
      "Write a function to find the maximum profit from buying and selling stocks in an array.",
    example: "Input: [7, 1, 5, 3, 6, 4]\nOutput: 5",
  },
  {
    id: 91,
    statement:
      "Write a function to find the maximum depth of nested parentheses in a string.",
    example: "Input: '((()))'\nOutput: 3",
  },
  {
    id: 92,
    statement:
      "Write a function to find the majority element in an array (occurs more than n/2 times).",
    example: "Input: [2, 2, 1, 1, 1, 2, 2]\nOutput: 2",
  },
  {
    id: 93,
    statement:
      "Write a function to reverse the order of words in a sentence while preserving the word order within each word.",
    example: "Input: 'Hello, World!'\nOutput: 'olleH, dlroW!'",
  },
  {
    id: 94,
    statement:
      "Write a function to find the longest common subsequence of two strings.",
    example: "Input: 'ABCD', 'AEDF'\nOutput: 'AD'",
  },
  {
    id: 95,
    statement: "Write a function to check if a number is a perfect number.",
    example: "Input: 28\nOutput: true",
  },
  {
    id: 96,
    statement:
      "Write a function to find the number of trailing zeroes in the factorial of a given number.",
    example: "Input: 10\nOutput: 2",
  },
  {
    id: 97,
    statement:
      "Write a function to find the smallest missing positive integer in an unsorted array.",
    example: "Input: [3, 4, -1, 1]\nOutput: 2",
  },
  {
    id: 98,
    statement:
      "Write a function to find the first non-repeating character in a string.",
    example: "Input: 'aabccde'\nOutput: 'b'",
  },
  {
    id: 99,
    statement:
      "Write a function to find the maximum sum of a contiguous subarray within an array.",
    example: "Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]\nOutput: 6",
  },
  {
    id: 100,
    statement:
      "Write a function to calculate the number of ways to climb n stairs if you can climb either 1 or 2 steps at a time.",
    example: "Input: 4\nOutput: 5",
  },
];

module.exports = problems;
