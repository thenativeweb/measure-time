export interface MeasuredTime {
  seconds: number;
  milliseconds: number;
  millisecondsTotal: number;
}

const asTruncatedNumber = function (bigNumber: bigint): number {
  return Math.trunc(Number(bigNumber));
};

const measureTime = function (): () => MeasuredTime {
  const start = process.hrtime.bigint();

  return function (): MeasuredTime {
    const end = process.hrtime.bigint();

    const nanoseconds = end - start;
    const milliseconds = nanoseconds / BigInt(1e6);
    const seconds = milliseconds / BigInt(1e3);

    return {
      seconds: asTruncatedNumber(seconds),
      milliseconds: asTruncatedNumber(milliseconds - (seconds * BigInt(1e3))),
      millisecondsTotal: asTruncatedNumber(milliseconds)
    };
  };
};

export { measureTime };
