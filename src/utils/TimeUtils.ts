const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const millisecondsFromMinutes = (mins: number): number => {
  return 1000 * 60 * mins;
};

export const TimeUtils = {
  sleep,
  millisecondsFromMinutes
};
