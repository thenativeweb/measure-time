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

    await new Promise<void>((resolve): void => {
      setTimeout((): void => {
        const elapsed = getElapsed();

        assert.that(elapsed.seconds).is.equalTo(0);
        assert.that(elapsed.milliseconds).is.atLeast(100);
        assert.that(elapsed.milliseconds).is.lessThan(125);

        resolve();
      }, 100);
    });
  });

  test('measures longer time ranges.', async (): Promise<void> => {
    const getElapsed = measureTime();

    await new Promise<void>((resolve): void => {
      setTimeout((): void => {
        const elapsed = getElapsed();

        assert.that(elapsed.seconds).is.equalTo(1);
        assert.that(elapsed.milliseconds).is.atLeast(500);
        assert.that(elapsed.milliseconds).is.lessThan(525);

        resolve();
      }, 1_500);
    });
  });

  test('calculates the total milliseconds.', async (): Promise<void> => {
    const getElapsed = measureTime();

    await new Promise<void>((resolve): void => {
      setTimeout((): void => {
        const elapsed = getElapsed();

        assert.that(elapsed.millisecondsTotal).is.atLeast(1_500);
        assert.that(elapsed.millisecondsTotal).is.lessThan(1_525);

        resolve();
      }, 1_500);
    });
  });
});
