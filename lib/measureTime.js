'use strict';

const measureTime = function () {
  const start = process.hrtime();

  return function () {
    const end = process.hrtime(start);

    const seconds = end[0];
    const milliseconds = Math.trunc(end[1] / 1000000);

    return {
      seconds,
      milliseconds,
      millisecondsTotal: seconds * 1000 + milliseconds
    };
  };
};

module.exports = measureTime;
