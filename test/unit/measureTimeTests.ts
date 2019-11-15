import { assert } from 'assertthat';
import { measureTime } from '../../lib/measureTime';

suite('measureTime', (): void => {
  test('is a function.', async (): Promise<void> => {
    assert.that(measureTime).is.ofType('function');
  });

  test('returns a function.', async (): Promise<void> => {
    assert.that(measureTime()).is.ofType('function');
  });

  test('measures short time ranges.', async (): Promise<void> => {
    const getElapsed = measureTime();

    setTimeout((): void => {
      const elapsed = getElapsed();

      assert.that(elapsed.seconds).is.equalTo(0);
      assert.that(elapsed.milliseconds).is.between(100, 125);
    }, 0.1 * 1000);
  });

  test('measures longer time ranges.', async (): Promise<void> => {
    const getElapsed = measureTime();

    setTimeout((): void => {
      const elapsed = getElapsed();

      assert.that(elapsed.seconds).is.equalTo(1);
      assert.that(elapsed.milliseconds).is.between(500, 525);
    }, 1.5 * 1000);
  });

  test('calculates the total milliseconds.', async (): Promise<void> => {
    const getElapsed = measureTime();

    setTimeout((): void => {
      const elapsed = getElapsed();

      assert.that(elapsed.millisecondsTotal).is.between(1500, 1525);
    }, 1.5 * 1000);
  });
});
