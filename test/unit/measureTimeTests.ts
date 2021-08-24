import { assert } from 'assertthat';
import { measureTime } from '../../lib/measureTime';
import { setTimeout as wait } from 'timers/promises';

suite('measureTime', (): void => {
  const epsilon = 50;

  test('is a function.', async (): Promise<void> => {
    assert.that(measureTime).is.ofType('function');
  });

  test('returns a function.', async (): Promise<void> => {
    assert.that(measureTime()).is.ofType('function');
  });

  test('measures short time ranges.', async (): Promise<void> => {
    const timeoutMs = 100;
    const getElapsed = measureTime();

    await wait(timeoutMs);

    const elapsed = getElapsed();

    assert.that(elapsed.seconds).is.equalTo(0);
    assert.that(elapsed.milliseconds).is.atLeast(timeoutMs);
    assert.that(elapsed.milliseconds).is.lessThan(timeoutMs + epsilon);
  });

  test('measures longer time ranges.', async (): Promise<void> => {
    const timeoutMs = 500;
    const getElapsed = measureTime();

    await wait(timeoutMs);

    const elapsed = getElapsed();

    assert.that(elapsed.seconds).is.equalTo(0);
    assert.that(elapsed.milliseconds).is.atLeast(timeoutMs);
    assert.that(elapsed.milliseconds).is.lessThan(timeoutMs + epsilon);
  });

  test('calculates the total milliseconds.', async (): Promise<void> => {
    const timeoutMs = 1_500;
    const getElapsed = measureTime();

    await wait(timeoutMs);

    const elapsed = getElapsed();

    assert.that(elapsed.seconds).is.equalTo(1);
    assert.that(elapsed.millisecondsTotal).is.atLeast(timeoutMs);
    assert.that(elapsed.millisecondsTotal).is.lessThan(timeoutMs + epsilon);
  });
});
