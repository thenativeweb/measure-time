import { assert } from 'assertthat';
import { measureTime } from '../../lib/measureTime';
import { setTimeout as wait } from 'timers/promises';

suite('measureTime', function (): void {
  const calibrationSamplesCount = 100;

  let expectedStdError: number;
  let expectedVariance: number;

  this.timeout(110 * calibrationSamplesCount);

  suiteSetup(async (): Promise<void> => {
    let calibrationVarianceSum = 0;

    for (let i = 0; i < calibrationSamplesCount; i++) {
      const timeoutMs = Math.random() * 100;
      const measure = measureTime();

      await wait(timeoutMs);

      const measured = measure();
      const variance = (timeoutMs - measured.millisecondsTotal) ** 2;

      calibrationVarianceSum += variance;
    }

    const calibrationVariance = calibrationVarianceSum / calibrationSamplesCount;
    const calibrationStdError = Math.sqrt(calibrationVariance);

    expectedStdError = 3 * calibrationStdError;
    expectedVariance = expectedStdError ** 2;

    // eslint-disable-next-line no-console
    console.log(`Calibrated tests to sigma: ${expectedStdError}.`);
  });

  test('is a function.', async (): Promise<void> => {
    assert.that(measureTime).is.ofType('function');
  });

  test('returns a function.', async (): Promise<void> => {
    assert.that(measureTime()).is.ofType('function');
  });

  test('measures short time ranges.', async (): Promise<void> => {
    const timeoutMs = 100;
    const measure = measureTime();

    await wait(timeoutMs);

    const measured = measure();
    const error = measured.millisecondsTotal - timeoutMs;
    const variance = error ** 2;

    assert.that(variance).is.lessThan(expectedVariance);
  });

  test('measures longer time ranges.', async (): Promise<void> => {
    const timeoutMs = 1_780;
    const measure = measureTime();

    await wait(timeoutMs);

    const measured = measure();
    const error = measured.millisecondsTotal - timeoutMs;
    const variance = error ** 2;

    assert.that(variance).is.lessThan(expectedVariance);
  });

  test('calculates the total milliseconds.', async (): Promise<void> => {
    const timeoutMs = 1_500;
    const measure = measureTime();

    await wait(timeoutMs);

    const measured = measure();
    const error = measured.millisecondsTotal - timeoutMs;
    const variance = error ** 2;

    assert.that(measured.seconds).is.equalTo(1);
    assert.that(measured.milliseconds).is.atLeast(500 - expectedStdError);
    assert.that(measured.milliseconds).is.lessThan(500 + expectedStdError);
    assert.that(variance).is.lessThan(expectedVariance);
  });
});
