### Recursion Joy
A set of recursion problems to be solved.

[What on Earth is Recursion? - Computerphile](https://www.youtube.com/watch?v=Mv9NEXX1VHc)

### Important
Due to the nature of recursion, it is critical to identify your base case(s). Base cases tell a recursive function when to stop, preventing the function from calling infinitly.

Double check base cases if the unit tests throw:
```
  RangeError: Maximum call stack size exceeded
```



Unit test setup based on [karma-template](https://github.com/hzhu/karma-template) boilerplate.

#### Quick start
0) If you do not already have webpack-dev-server
```
npm install -g webpack-dev-server
```

1) Install npm dependencies
```
npm install
```

2) Setup `/build` directory
```
npm run setup
```

3) Compile and run code
```
npm start
```

4) Run unit tests
```
npm test
```