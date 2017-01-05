## Recursion Joy
A set of recursion problems to be solved (solutions included).

[![Build Status](https://img.shields.io/snap-ci/hzhu/recursion-joy/master.svg?style=flat-square)](https://snap-ci.com/hzhu/recursion-joy/branch/master)


### Getting Started
The aim is to work under the directory `/problems`. First write a test(s) for the recursive function. Then implement a solution to get the test(s) to pass. You can find solutions under `/solutions`.

[What on Earth is Recursion? - Computerphile](https://www.youtube.com/watch?v=Mv9NEXX1VHc)

### Important
Due to the nature of recursion, it is critical to identify the base case(s). Base cases tell a recursive function when to stop, preventing the function from calling infinitly.

Double check base cases if you encouter:
```
  RangeError: Maximum call stack size exceeded
```


Unit test setup based on [karma-template](https://github.com/hzhu/karma-template) boilerplate.

#### Quick start
1) Install npm dependencies
```
npm install
```

2) Run unit tests
```
npm test
```

or to continously watch tests,

```
npm run test:watch
```

#### Contributing
PRs welcomed! Just submit a PR with a note (new recursion problem? better performance? readibility? bug fix? better testing?)