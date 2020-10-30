export interface MeasuredTime {
  seconds: number;
  milliseconds: number;
  millisecondsTotal: number;
}

const measureTime = function (): () => MeasuredTime {
  const start = process.hrtime();

  return function (): MeasuredTime {
    const end = process.hrtime(start);

    const seconds = end[0];
    const milliseconds = Math.trunc(end[1] / 1_000_000);

    return {
      seconds,
      milliseconds,
      millisecondsTotal: (seconds * 1_000) + milliseconds
    };
  };
};

export { measureTime };
