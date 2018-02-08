'use strict';

var measureTime = function measureTime() {
  var start = process.hrtime();

  return function () {
    var end = process.hrtime(start);

    var seconds = end[0];
    var milliseconds = Math.trunc(end[1] / 1000000);

    return {
      seconds: seconds,
      milliseconds: milliseconds,
      millisecondsTotal: seconds * 1000 + milliseconds
    };
  };
};

module.exports = measureTime;