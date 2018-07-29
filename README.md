# Recursion Joy
A set of recursion problems to be solved (solutions included).

[![Build Status](https://img.shields.io/snap-ci/hzhu/recursion-joy/master.svg?style=flat-square)](https://snap-ci.com/hzhu/recursion-joy/branch/master)
[![Coverage Status](https://img.shields.io/coveralls/hzhu/recursion-joy.svg?style=flat-square)](https://coveralls.io/github/hzhu/recursion-joy?branch=master)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)]()


## Getting Started
The goal is to work under the directory `/problems`. Implement a solution to get the test(s) to pass. You can find solutions under `/solutions`.

[What on Earth is Recursion? - Computerphile](https://www.youtube.com/watch?v=Mv9NEXX1VHc)

It is important to identify the base case(s). Base cases tell a recursive function when to stop, preventing recursive functions from calling itself infinitely.

Double check base cases if you encouter this error in the test output:
```
  RangeError: Maximum call stack size exceeded
```

## Quick Start
1) Install npm dependencies
```
yarn
```

2) Run tests for problems
```
yarn test
```

or to run the tests for the solutions

```
yarn test:solutions
```

## Problems
* [01 - sumArray](https://github.com/hzhu/recursion-joy/tree/master/problems/01%20-%20sum_array)
* [02 - max](https://github.com/hzhu/recursion-joy/tree/master/problems/02%20-%20max)
* [03 - factorial](https://github.com/hzhu/recursion-joy/tree/master/problems/03%20-%20factorial)
* [04 - exponent](https://github.com/hzhu/recursion-joy/tree/master/problems/04%20-%20exponent)
* [05 - isPalindrome](https://github.com/hzhu/recursion-joy/tree/master/problems/05%20-%20is_palindrome)
* [06 - range](https://github.com/hzhu/recursion-joy/tree/master/problems/06%20-%20range)
* [07 - reverseString](https://github.com/hzhu/recursion-joy/tree/master/problems/07%20-%20reverse_string)
* [08 - getElementsByClassname](https://github.com/hzhu/recursion-joy/tree/master/problems/08%20-%20get_elements_by_classname)
* [09 - fibonacci](https://github.com/hzhu/recursion-joy/tree/master/problems/09%20-%20fibonacci)
* [10 - gcd](https://github.com/hzhu/recursion-joy/tree/master/problems/10%20-%20gcd)
* [11 - binarySearch](https://github.com/hzhu/recursion-joy/tree/master/problems/11%20-%20binary_search)
* [12 - mergesort](https://github.com/hzhu/recursion-joy/tree/master/problems/12%20-%20mergesort)
* [13 - quicksort](https://github.com/hzhu/recursion-joy/tree/master/problems/13%20-%20quicksort)
* [14 - stringPermutations](https://github.com/hzhu/recursion-joy/tree/master/problems/14%20-%20string_permutations)

## Contributing
PRs welcomed! Just submit a PR with a note (new recursion problem? better performance? readibility? bug fix? better testing?)