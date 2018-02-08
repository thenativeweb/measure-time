# measure-time

measure-time is a stopwatch.

## Installation

```shell
$ npm install measure-time
```

## Quick start

First you need to add a reference to measure-time to your application.

```javascript
const measureTime = require('measure-time');
```

Then, call the `measureTime` function to start measuring time. The function returns another function, `getElapsed`, that you need to call to get the elapsed time.

```javascript
const getElapsed = measureTime();

// ...

const elapsed = getElapsed();

console.log(elapsed);
// => {
//      seconds: 3
//      milliseconds: 141,
//      millisecondsTotal: 3141
//    }
```

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ bot
```

## License

The MIT License (MIT)
Copyright (c) 2016-2018 the native web.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
