export interface MeasuredTime {
  seconds: number;
  milliseconds: number;
  millisecondsTotal: number;
}

const asTruncatedNumber = function (n: bigint): number {
  return Math.trunc(Number(n));
}

const measureTime = function (): () => MeasuredTime {
  const start = process.hrtime.bigint();

  return function (): MeasuredTime {
    const end = process.hrtime.bigint();

    const nanoseconds = end - start;
    const milliseconds = nanoseconds / BigInt(1e6);
    const seconds = milliseconds / BigInt(1e3);
    const millisecondsTotal = (seconds / BigInt(1e3)) + milliseconds

    return {
      seconds: asTruncatedNumber(seconds),
      milliseconds: asTruncatedNumber(milliseconds),
      millisecondsTotal: asTruncatedNumber(millisecondsTotal)
    };
  };
};

export { measureTime };
