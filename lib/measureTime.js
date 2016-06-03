'use strict';

const measureTime = function () {
  const start = process.hrtime();

  return function () {
    const end = process.hrtime(start);

    const seconds = end[0];
    const milliseconds = Math.trunc(end[1] / 1000000);

    return { seconds, milliseconds };
  };
};

module.exports = measureTime;
