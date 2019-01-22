'use strict';

const assert = require('assertthat');

const measureTime = require('../../src/measureTime');

suite('measureTime', () => {
  test('is a function.', done => {
    assert.that(measureTime).is.ofType('function');
    done();
  });

  test('returns a function.', done => {
    assert.that(measureTime()).is.ofType('function');
    done();
  });

  test('measures short time ranges.', done => {
    const getElapsed = measureTime();

    setTimeout(() => {
      const elapsed = getElapsed();

      assert.that(elapsed.seconds).is.equalTo(0);
      assert.that(elapsed.milliseconds).is.between(100, 125);
      done();
    }, 0.1 * 1000);
  });

  test('measures longer time ranges.', done => {
    const getElapsed = measureTime();

    setTimeout(() => {
      const elapsed = getElapsed();

      assert.that(elapsed.seconds).is.equalTo(1);
      assert.that(elapsed.milliseconds).is.between(500, 525);
      done();
    }, 1.5 * 1000);
  });

  test('calculates the total milliseconds.', done => {
    const getElapsed = measureTime();

    setTimeout(() => {
      const elapsed = getElapsed();

      assert.that(elapsed.millisecondsTotal).is.between(1500, 1525);
      done();
    }, 1.5 * 1000);
  });
});
