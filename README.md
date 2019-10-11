# measure-time

measure-time is a stopwatch.

## Status

| Category         | Status                                                                                                                                               |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/measure-time)](https://www.npmjs.com/package/measure-time)                                                      |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/measure-time)                                                                                     |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/measure-time)                                                                                 |
| Build            | [![CircleCI](https://img.shields.io/circleci/build/github/thenativeweb/measure-time)](https://circleci.com/gh/thenativeweb/measure-time/tree/master) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/measure-time)                                                                           |

## Installation

```shell
$ npm install measure-time
```

## Quick start

First you need to add a reference to measure-time to your application.

```javascript
const measureTime = require('measure-time').default;
```

If you use TypeScript, use the following code instead:

```typescript
import measureTime from 'measure-time';
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
$ npx roboter
```
